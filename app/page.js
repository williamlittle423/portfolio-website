import NavigationBar from './components/NavigationBar';
import Project from './components/Project';



const Home = () => {
  return (
    //root
    <div className='flex flex-col justify-center items-center bg-neutral-900 p-[3vw] '>
      {/* hero */}
      <div className=" text-[#d4d4d4] font-medium h-[85vh] sm:h-screen w-full flex flex-col justify-between pb-[4vw]">
        {/* Navbar */}
        <NavigationBar />
        
        {/* Outer Wrapper */}
        <div className="flex flex-row justify-center ">
          {/* First Child */}
          <div className="w-full px-[2vw] md:mr-10 md:w-3/4 xl:w-1/2">
            <p className='Inter font-light text-[#FFFFFF] pb-2'>Welcome to</p>
            <div className='border-l-2 border-[#FFFFFF] pl-2'>
              <div>
                {/*Name gradient text */}
              <p className="Inter bg-gradient-to-r from-[#5D59FF] via-[#F19696] to-[#EC54DD] bg-clip-text text-transparent text-7xl font-semibold pb-3">
                  WILLIAM LITTLE
              </p>
                
                <p className='Inter font-light pl-1'> 
                I am a passionate software engineer, tech founder, and product designer currently pursuing an engineering physics degree with a focus in computing applications at 
                Queen's University. I am activetly seeking a summer internship a in software engineering, data science, or applied physics role.
                </p>
              </div>
            </div>
          </div>
     
        </div>
        <div className='flex  justify-center'>
          <p className="Inter text-white bg-clip-text flex-shrink text-transparent text-2xl font-medium pb-1 border-b border-[#FFFFFF]">
            Projects
          </p>
        </div>
      </div>
      {/* projects */}
      <div className='flex flex-col xl:w-4/5'>
        {/* Motiv */}
        <Project  
            title={"Motiv | Swift, MongoDB, REST API, AWS Lambda Functions, AWS S3"}
            description={"Motiv is a social media and event hosting platform dedicated to university and college students. It allows students to seamlessly host a wide range of events like parties, pres and everything inbetween. Motiv removes the tiresome invitation process that comes with hosting events. Within a few taps, users can host a event and efficiently notify the invitees. It is built for university and college students including a house functionality that allows user to host either personal events or house events with their friends."}
            photoLink={"/Motiv_Preview.png"}
            gitHubLink = {"https://github.com/williamlittle423/Motiv-iOS/"}
        />
        {/* QMIND Vertical farm */}
        <Project 
            title={"Autonomous Vertical Farm | C++, JavaScript, React, TailWind, Arduino IoT, MongoDB"}
            description={"This is a QMIND AI organization project at Queen's University—an innovative modular vertical farm designed for cultivating a variety of small plants. It is managed by an Arduino system connected to a MongoDB database. The database, in turn, interfaces with a React web application, granting users the ability to monitor and control the farm. The farm is governed by an AI system, continually enhancing its knowledge using collected data, and it takes charge of tasks such as plant watering and nutrient supply."}
            photoLink={"/QMIND_Preview.png"}
            gitHubLink = {"https://github.com/williamlittle423/vert-farm/"}
        />
        {/* iCons */}
        <Project 
            title={"iCons | Swift, Firestore "}
            description={"The iCons iOS application is a valuable resource for both engineering students and iCons at Queen's University. It serves as a streamlined solution, enhancing equipment rental processes and communication. This platform has been meticulously designed to offer students and faculty convenient access to essential equipment within the ILC, fostering a seamless and efficient academic experience."}
            photoLink={"/iCons_Preview.png"}
            gitHubLink = {"https://github.com/williamlittle423/iConsEquipmentRentaliOS"}
        />
        {/* Spreadsheet Software */}
        <Project 
          title={"CLI Spreadsheet Software | C, nCurses"}
          description={"A command line interface spreadsheet program built in C that supports inputting data, formulas, connecting cells, and more. It is designed to be a lightweight, efficient, and easy-to-use alternative to traditional spreadsheet software like Excel or Google Sheets. It is built with nCurses, a library that allows for the creation of text-based user interfaces, and is designed to be run in a terminal environment."}
          photoLink={"/Spreadsheet_Preview.png"}
          gitHubLink = {"https://github.com/williamlittle423/Spreadsheet_CLI/"}
        />
      </div>
    </div>
  );
};

export default Home;
