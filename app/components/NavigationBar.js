import React from 'react';
import Image from 'next/image';

const NavigationBar = () => {


  return (
    <div className="flex mt-5 sm:mt-0">
      
      {/* Resume Button */}
      <div className="filter brightness-50 transform scale-75 hover:scale-95 transition-all duration-200 hover:brightness-75 h-[2.5rem] w-[2.5rem]">
        <a href="https://docs.google.com/document/d/e/2PACX-1vSSq41dF1lQ2nIZ0OLSirYSniLdIBObDSuqJKbhC-eriobRoN4etPUcC7lph-DYl1yazDgWWBwudgf-/pub"
          target="_blank" 
          rel="noopener noreferrer">
          <Image
            src="/icons8-resume-50.png"
            alt="LinkedIn Logo"
            fill={true}
          />
        </a>
      </div>
      {/* Logos and Links on Top Right */}
      <div className="flex items-center space-x-6 ml-auto">
        
        <div className='filter brightness-50 transform scale-75 hover:scale-95 transition-all duration-200 hover:brightness-75 h-[2.3rem] w-[3.5rem]'>
          {/* email */}
          <a
          href={"mailto:willbythesea@gmail.com"}
          className=""
          style={{ cursor: 'pointer' }} // Change cursor to indicate it's clickable
          >
            <Image
              src="/emailImage.png" // Replace with the path to your email image
              alt="email link"
              fill={true}
            />
          </a>
        </div>
        {/* GitHub Logo */}
        <div className="filter brightness-50 transform scale-75 hover:scale-95 transition-all duration-200 hover:brightness-75 h-[2.5rem] w-[2.5rem]">
          <a 
          href="https://github.com/williamlittle423" 
          target="_blank" 
          rel="noopener noreferrer">
            <Image
              src="/github.png"
              alt="GitHub Logo"
              fill={true}
            />
          </a>
        </div>

        {/* LinkedIn Logo */}
        <div className="filter brightness-50 transform scale-75 hover:scale-95 transition-all duration-200 hover:brightness-75 h-[2.5rem] w-[2.5rem]">
          <a href="https://www.linkedin.com/in/williamtheadore/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/linkedIn(2).png"
              alt="LinkedIn Logo"
              fill={true}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
