import React from 'react';
import Image from 'next/image';
import './custom.css';

const Project = (props) => {

    const {title, description, videoLink, videoTitle, gitHubLink, photoLink} = props;

    let mediaContainer;
    if (videoLink != null){
        mediaContainer =           
        <div className='w-full md:w-4/5 relative lg:w-1/2'>
        <div style={{ paddingBottom: '56.25%' }} className='h-0'>
        <iframe 
            className='rounded-lg  absolute top-0 left-0 w-full h-full'
            src={`${videoLink}?vq=hd1080`} 
            title={videoTitle}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
        >
        </iframe>
        </div>
    </div>
    } else if (photoLink != null) {
        mediaContainer = 
        <div className='w-full md:w-4/5 relative lg:w-1/2 rounded-lg overflow-hidden'>
            <div className="rounded-lg">
                <div style={{ paddingBottom: '56.25%' }} className='h-0 relative overflow-hidden rounded-lg'>
                    <Image
                        src={photoLink}
                        layout='fill'
                        objectFit='contain'
                        className='rounded-xl' 
                    />
                </div>
            </div>
        </div>



    } else {
        mediaContainer = null;
    }
    const paragraphWidth = videoLink != null || photoLink != null ? 'lg:w-1/2' : '';
    
    return (
    <div className='Inter bg-neutral-800 w-9/10 mx-auto rounded-xl text-white shadow-md shadow-black p-[2rem] mb-[2rem] '>
        <div className='flex items-center mb-[1rem]'>
            <header>
            {/* Header content */}
                <h1 className='text-xl lg:text-2xl font-medium mr-4 text-[#ededed]'>{title}</h1>
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
            {mediaContainer}
            <div className={'lg:ml-[2rem] lg:mb-0 mb-[1rem] ' + paragraphWidth}>
                {/* Second item */}
                <p className="text-[#d4d4d4] border-l-2 border-[gradient-border] px-[0.7rem] font-light">
                    {description}
                </p>
            </div>
        </div>
    </div>
    );    
};

export default Project;