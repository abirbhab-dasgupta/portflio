'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function MovingStars() {
  const starsRef = useRef()

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.x += 0.0001
      starsRef.current.rotation.y += 0.0001
    }
  })

  return <Stars ref={starsRef} radius={100} depth={50} count={5000} factor={6} saturation={0} fade speed={1} />
}

function Nebula() {
  const shaderRef = useRef()

  useFrame((state) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    }
  })

  const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;

    float noise(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(mix(mix(hash(i + vec3(0, 0, 0)), 
                          hash(i + vec3(1, 0, 0)), f.x),
                      mix(hash(i + vec3(0, 1, 0)), 
                          hash(i + vec3(1, 1, 0)), f.x), f.y),
                  mix(mix(hash(i + vec3(0, 0, 1)), 
                          hash(i + vec3(1, 0, 1)), f.x),
                      mix(hash(i + vec3(0, 1, 1)), 
                          hash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
    }

    float hash(vec3 p) {
      p = fract(p * 0.3183099 + 0.1);
      p *= 17.0;
      return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
    }

    void main() {
      vec2 uv = vUv * 2.0 - 1.0;
      vec3 color = vec3(0.0);
      
      for (float i = 1.0; i < 4.0; i++) {
        vec2 q = uv * (1.0 + i * 0.1);
        q += vec2(q.y * 2.0, -q.x * 5.0) * uTime * 0.01 * i;
        float n = noise(vec3(q * i, uTime * 0.1));
        color += vec3(0.1, 0.2, 0.5) / i * smoothstep(0.1, 0.9, n);
      }
      
      gl_FragColor = vec4(color, 0.5);
    }
  `

  return (
    <mesh>
      <planeGeometry args={[40, 40]} />
      <shaderMaterial
        ref={shaderRef}
        fragmentShader={fragmentShader}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        uniforms={{
          uTime: { value: 0 }
        }}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}

function Planet({ orbitRadius, orbitSpeed, rotationSpeed, orbitAxis, size, color }) {
  const meshRef = useRef()
  const pivotRef = useRef()

  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 128
    canvas.height = 128
    const context = canvas.getContext('2d')
    context.fillStyle = color
    context.fillRect(0, 0, 128, 128)
    for (let i = 0; i < 1000; i++) {
      context.fillStyle = `rgba(255,255,255,${Math.random() * 0.05})`
      context.fillRect(Math.random() * 128, Math.random() * 128, 1, 1)
    }
    return new THREE.CanvasTexture(canvas)
  }, [color])

  useFrame((state) => {
    if (pivotRef.current && meshRef.current) {
      pivotRef.current.rotateOnAxis(orbitAxis, orbitSpeed)
      meshRef.current.rotateY(rotationSpeed)
    }
  })

  return (
    <group ref={pivotRef}>
      <mesh ref={meshRef} position={[orbitRadius, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial 
          map={texture}
          bumpMap={texture}
          bumpScale={0.05}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>
    </group>
  )
}

function Planets() {
  const planets = useMemo(() => [
    { 
      orbitRadius: 15, 
      orbitSpeed: 0.01, 
      rotationSpeed: 0.02, 
      orbitAxis: new THREE.Vector3(0, 1, 0).normalize(),
      size: 2, 
      color: '#A52A2A'  // Mars-like reddish-brown
    },
    { 
      orbitRadius: 20, 
      orbitSpeed: 0.007, 
      rotationSpeed: 0.015, 
      orbitAxis: new THREE.Vector3(1, 0, 0).normalize(),
      size: 3, 
      color: '#4B0082'  // Jupiter-like deep purple
    },
    { 
      orbitRadius: 25, 
      orbitSpeed: 0.005, 
      rotationSpeed: 0.01, 
      orbitAxis: new THREE.Vector3(0, 0, 1).normalize(),
      size: 4, 
      color: '#F4A460'  // Saturn-like sandy brown
    },
  ], [])

  return (
    <group>
      {planets.map((planet, index) => (
        <Planet key={index} {...planet} />
      ))}
    </group>
  )
}

function Satellites() {
  const satellites = useMemo(() => [
    { orbitRadius: 12, orbitSpeed: 0.02, size: 0.2, color: '#C0C0C0' },  // Silver
    { orbitRadius: 18, orbitSpeed: 0.015, size: 0.3, color: '#D3D3D3' }, // Light gray
    { orbitRadius: 22, orbitSpeed: 0.01, size: 0.25, color: '#A9A9A9' }, // Dark gray
  ], [])

  return (
    <group>
      {satellites.map((satellite, index) => (
        <Planet key={index} {...satellite} orbitAxis={new THREE.Vector3(0, 1, 0).normalize()} rotationSpeed={0} />
      ))}
    </group>
  )
}

function ShootingStars() {
  const starsRef = useRef()
  const { viewport } = useThree()

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.children.forEach((star) => {
        star.position.x -= star.userData.speed
        star.position.y -= star.userData.speed * 0.5

        if (star.position.x < -viewport.width / 2 || star.position.y < -viewport.height / 2) {
          star.position.x = Math.random() * viewport.width - viewport.width / 2
          star.position.y = viewport.height / 2 + Math.random() * viewport.height / 2
        }
      })
    }
  })

  const shootingStars = useMemo(() => {
    const temp = []
    for (let i = 0; i < 50; i++) {  // Increased from 20 to 50
      temp.push({
        position: [
          Math.random() * viewport.width - viewport.width / 2,
          viewport.height / 2 + Math.random() * viewport.height / 2,
          0
        ],
        speed: Math.random() * 0.05 + 0.05
      })
    }
    return temp
  }, [viewport])

  return (
    <group ref={starsRef}>
      {shootingStars.map((star, index) => (
        <mesh key={index} position={star.position} userData={{ speed: star.speed }}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>
      ))}
    </group>
  )
}

function Constellations() {
  const constellations = useMemo(() => [
    { points: [[0.5, 0.5, 15], [1, 1.5, 15], [0, 1.5, 15], [-0.5, 0.5, 15], [0.5, -0.5, 15], [-0.5, -0.5, 15]] },
    { points: [[5, 5, 15], [6, 6, 15], [7, 5.5, 15], [8, 6, 15], [9, 5, 15], [8.5, 4, 15], [7.5, 3.5, 15]] },
    { points: [[-5, 7.5, 15], [-6, 8.5, 15], [-7, 8, 15], [-8, 9, 15], [-9, 8.5, 15]] },
  ], [])

  const starRefs = useRef([])

  useFrame((state) => {
    starRefs.current.forEach((star) => {
      if (star) {
        star.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + Math.random() * 10) * 0.1)
      }
    })
  })

  return (
    <group>
      {constellations.map((constellation, index) => (
        <group key={index}>
          {constellation.points.map((point, pointIndex) => (
            <mesh key={pointIndex} position={point} ref={(el) => (starRefs.current[index * constellation.points.length + pointIndex] = el)}>
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshBasicMaterial color="#FFFFFF" />
            </mesh>
          ))}
          <line>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={constellation.points.length}
                array={new Float32Array(constellation.points.flat())}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#FFFFFF" opacity={0.5} transparent />
          </line>
        </group>
      ))}
    </group>
  )
}

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 40], fov: 60 }} shadows>
        <color attach="background" args={['#000']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={1} castShadow />
        <MovingStars />
        <Nebula />
        <Planets />
        <Satellites />
        <ShootingStars />
        <Constellations />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}