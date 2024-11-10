import React from 'react';
import { Calendar, GraduationCap } from 'lucide-react';

const EducationItem = ({ item, index }) => (
  <div className="flex flex-col md:flex-row mb-8 relative">
    <div className="md:w-1/3 mb-4 md:mb-0">
      <h3 className="text-xl font-semibold text-blue-400">{item.institution}</h3>
      <p className="text-gray-400 flex items-center mt-1">
        <Calendar className="w-4 h-4 mr-2" />
        {item.year}
      </p>
    </div>
    <div className="md:w-2/3 md:pl-8 relative">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500 hidden md:block" />
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-500 -ml-2 hidden md:block" />
      <h4 className="text-lg font-medium text-white mb-2">{item.degree}</h4>
      <p className="text-gray-300">{item.location}</p>
    </div>
  </div>
);

const Education = () => {
  const educationData = [
    {
      institution: 'Adamas University',
      degree: 'Bachelor of Technology in Computer Science',
      year: '2024 - 2028',
      location: 'Barasat, West Bengal'
    },
    {
      institution: 'Kendriya Vidyalaya Birbhum',
      degree: 'Senior School Certification (HSC)',
      year: '2024',
      location: 'Suri Birbhum, West Bengal'
    },
    {
      institution: 'Kendriya Vidyalaya Birbhum',
      degree: 'Secondary School Certification (SSC)',
      year: '2022',
      location: 'Suri Birbhum, West Bengal'
    }
  ];

  return (
    <div className="relative max-w-4xl mx-auto overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-blue-500 bg-opacity-10 backdrop-blur-lg" />
      <div className="relative z-10 p-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <GraduationCap className="w-8 h-8 mr-4 text-blue-400" />
          Education
        </h2>
        {educationData.map((item, index) => (
          <EducationItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Education;
