import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Download, Github, Linkedin } from 'lucide-react';

// Import your image
import profileImage from '../assets/profilepic.png';

const About = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const text = textRef.current;
    const button = buttonRef.current;
    const image = imageRef.current;

    // Create a GSAP timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Add animations to the timeline
    tl.fromTo(container, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(image, 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5 },
      "-=0.5"
    )
    .fromTo(title, 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.3"
    )
    .fromTo(text, 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.3"
    )
    .fromTo(button, 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.3"
    );

    // Optional: Animate background on hover
    const bgLayer = container.querySelector('.bg-layer');
    
    const handleMouseEnter = () => {
      gsap.to(bgLayer, { 
        backgroundColor: "rgba(59, 130, 246, 0.2)", 
        duration: 0.3 
      });
    };

    const handleMouseLeave = () => {
      gsap.to(bgLayer, { 
        backgroundColor: "rgba(59, 130, 246, 0.1)", 
        duration: 0.3 
      });
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Clean up the animation and event listeners when the component unmounts
    return () => {
      tl.kill();
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // const handleDownload = () => {
  //   // Replace 'your-resume.pdf' with the actual path to your resume file
  //   const link = document.createElement('a');
  //   link.href = '/path/to/your-resume.pdf';
  //   link.download = 'Your_Name_Resume.pdf';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto overflow-hidden">
      <div className="bg-layer absolute inset-0 bg-blue-500 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg transition-colors duration-300"></div>
      <div className="relative z-10 p-8">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div ref={imageRef} className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8 flex-shrink-0 border-4 border-blue-500 shadow-lg">
            <img
              src={profileImage}
              alt="Profile Picture"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-grow">
            <h2 ref={titleRef} className="text-3xl font-bold mb-4">About Me</h2>
            <p ref={textRef} className="text-lg text-gray-300 mb-6">
              I am a passionate web developer with expertise in React, JavaScript, and modern web technologies. I love creating
              beautiful, responsive, and user-friendly websites that solve real-world problems.
            </p>
            <div className="flex space-x-4">
            {/* <button
                ref={buttonRef}
                onClick={handleDownload}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </button> */}
              <a
                href="https://github.com/abirbhab-dasgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
              >
                <Github size={18} className="mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abirbhab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-300"
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
