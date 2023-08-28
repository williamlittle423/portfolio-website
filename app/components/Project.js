import React from 'react';
import Image from 'next/image';

const Project = (props) => {

    const {title, description, videoLink, videoTitle, gitHubLink} = props;

    let videoContainer
    if (videoLink != null){
        videoContainer =           
        <div className='w-full md:w-4/5 relative lg:w-1/2'>
        <div style={{ paddingBottom: '56.25%' }} className='h-0'>
        <iframe 
            className='rounded-lg absolute top-0 left-0 w-full h-full'
            src={`${videoLink}?vq=hd1080`} 
            title={videoTitle}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
        >
        </iframe>
        </div>
    </div>
    } else {
        videoContainer = null;
    }

    const paragraphWidth = videoLink != null ? 'lg:w-1/2' : '';
    
    return (
    <div className='Exo bg-neutral-800 w-9/10 mx-auto rounded-xl text-white shadow-md shadow-black p-[2rem] mb-[2rem]'>
        <div className='flex items-center mb-[1rem]'>
            <header>
            {/* Header content */}
                <h1 className='text-xl lg:text-2xl font-bold mr-4'>{title}</h1>
            </header>
                    {/* GitHub Logo */}
            <div className="filter brightness-50 transform scale-100 hover:scale-110 transition-all duration-200 hover:brightness-75 h-[2rem] w-[2rem]">
                <a 
                href={gitHubLink} 
                target="_blank" 
                rel="noopener noreferrer">
                    <Image
                    src="/github.png"
                    alt="GitHub Logo"
                    fill={true}
                    />
                </a>
            </div>
        </div>
        <div className='flex flex-col-reverse items-center justify-between lg:flex-row lg:items-start'>
            {videoContainer}
            <div className={'lg:ml-[2rem] lg:mb-0 mb-[1rem] ' + paragraphWidth}>
                {/* Second item */}
                <p className=' border-l-2 border-blue-700 px-[0.7rem]'>
                    {description}
                </p>
            </div>
        </div>
    </div>
    );    
};

export default Project;
