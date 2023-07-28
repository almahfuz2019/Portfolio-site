import React from 'react';

import { BsCodeSlash, BsFillPhoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import bgImg from "../Images/bg-dark.jpg";
import chaayasurgical from "../Images/chaayasurgical.jpg";
import freeImg from "../Images/freeimg.PNG";
import eskillIT from "../Images/eskillIT.PNG";
import aboutImg from "../Images/aboutImg.jpg";
import { MdAttachEmail, MdDisplaySettings, MdOutlineDateRange } from 'react-icons/md';
import { SiTaichigraphics } from "react-icons/si";
const About = () => {
     return (
          <div className='pt-14' style={{ backgroundImage: `url(${bgImg})`}}>
              <section className='m-4 mt-0 rounded-md' style={{backgroundColor:"#111111"}} >
           
    <div className="px-4 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">

    <div className="flex items-center ">
             <h5 className="headline my-5  sm:text-5xl text-3xl font-bold text-white leading-none font"> 
            About Me
            {/* <hr  className='text-red-500 bg-yellow-900'/> */}
          </h5>
          <progress className="progress h-1 sm:w-48 w-20 ml-2 sm:ml-5 progress-primary mt-2 block" value="100" max="100"></progress>
             </div>


      <div className="grid gap-10 lg:grid-cols-2">
      <div>
    
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={aboutImg}
            alt=""
          />
        </div>
        <div className="lg:pr-10">
       
          <h5 className="mb-4 text-2xl sm:text-3xl font-bold text-white leading-none">
            Who am i ?
            
          </h5>
          <p className="mb-6 text-gray-200 text-justify">
          I am a skilled MERN stack developer with a passion for building dynamic web applications. A Bangladeshi web developer who has expertise in using MongoDB, Express.js, React, and Node.js to create robust, efficient, and scalable web applications. I enjoy solving complex problems and creating user-friendly interfaces that are both beautiful and intuitive.
<p className='mb-1'></p>
With a strong understanding of web development concepts such as RESTful APIs and MVC architecture, I am dedicated to deliver high-quality applications that meet the needs of my clients and users.
          </p>
          <hr className="mb-5 border-gray-300" />
          <h5 className="mb-5 text-2xl sm:text-3xl font-bold text-white leading-none">
            Personal Info
          </h5>
          <div class="grid grid-cols-1 sm:grid-cols-2  gap-4">
          <div class="flex">
        <span class="text-oriange  shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 bg-gray-600">
        <BsFillPhoneFill className='text-rose-400'/>
           </span>
             <div class="space-y-1">
           <p class="text-xs text-gray-200 "> Phone
           </p>
           <h6 class="font-medium text-white"> +8801787-878743 </h6>
            </div>
              </div>

              <div class="flex">
        <span class="text-oriange  shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 bg-gray-600">
        <IoLocationSharp className='text-rose-400'/>
           </span>
             <div class="space-y-1">
           <p class="text-xs text-gray-200 "> Location
           </p>
           <h6 class="font-medium text-white">Dhaka, Bangladesh </h6>
            </div>
              </div>
              <div class="flex">
        <span class="text-oriange  shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 bg-gray-600">
        <MdAttachEmail style={{color:"#60c0c6"}}/>
           </span>
             <div class="space-y-1">
           <p class="text-xs text-gray-200 "> Email
           </p>
           <h6 class="font-medium text-white">almahfuz2019@mail.com </h6>
            </div>
              </div>
              <div class="flex">
        <span class="text-oriange  shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 bg-gray-600">
        <MdOutlineDateRange style={{color:"#c17ceb"}}/>
           </span>
             <div class="space-y-1">
           <p class="text-xs text-gray-200 "> Birthday
           </p>
           <h6 class="font-medium text-white">Apr 21, 2000 </h6>
            </div>
              </div>
          </div>
        </div>
        
      </div>
    <h5 className="mt-12 mb-7 text-2xl sm:text-3xl font-bold text-white leading-none">
            What i do!
          </h5>
          <div class="grid grid-cols-1 sm:grid-cols-3  gap-4">
          <div class="about-box bg-transparent bg-[#fcf4ff] flex justify-center border-2 border-gray-600 rounded-lg p-4 ">
         
            <div class="space-y-2">
           <div className="flex items-center justify-center">
           <BsCodeSlash class="text-4xl sm:text-7xl  " style={{color:"#c17ceb"}}/>
            </div>
            <h3 class="text-xl sm:text-2xl font-semibold text-white text-center"> 
              Web Design </h3>
            {/* <p class="leading-8 text-gray-200 text-center "> Lorem ipsum dolor
          adipiscing elit, sed diam euismod volutpat.Lorem ipsum dolor adipiscing elit, sed diam euismod volutpat. </p> */}
             </div>
                 </div>
          <div class="about-box bg-transparent bg-[#fcf4ff] flex justify-center border-2 border-gray-600 rounded-lg p-4 ">
         
            <div class="space-y-2">
           <div className="flex items-center justify-center">
           <MdDisplaySettings class="text-4xl sm:text-7xl  " style={{color:"#c17ceb"}}/>
            </div>
            <h3 class="text-xl sm:text-2xl font-semibold text-white text-center"> 
             Web Development </h3>
            {/* <p class="leading-8 text-gray-200 text-center "> Lorem ipsum dolor
          adipiscing elit, sed diam euismod volutpat.Lorem ipsum dolor adipiscing elit, sed diam euismod volutpat. </p> */}
             </div>
                 </div>
          <div class="about-box bg-transparent bg-[#fcf4ff] flex justify-center border-2 border-gray-600 rounded-lg p-4 ">
         
            <div class="space-y-2">
           <div className="flex items-center justify-center">
           <SiTaichigraphics class="text-4xl sm:text-7xl " style={{color:"#c17ceb"}}/>
            </div>
            <h3 class="text-xl sm:text-2xl font-semibold text-white text-center"> 
            Graphic  Design </h3>
            {/* <p class="leading-8 text-gray-200 text-center "> Lorem ipsum dolor
          adipiscing elit, sed diam euismod volutpat.Lorem ipsum dolor adipiscing elit, sed diam euismod volutpat. </p> */}
             </div>
                 </div>
          </div>
              <div className='py-5 mt-10 px-2 rounded-md' style={{backgroundColor:"black"}}>
<h1 className='text-center text-xl sm:text-3xl  font-bold text-white mb-10'>Clients<hr/></h1>

<div className="relative w-full flex gap-4  overflow-x-auto">
	<img className="h-48 aspect-video rounded-sm  " src={chaayasurgical} alt="Image 1" />
	<img className="h-48 aspect-video rounded-sm  " src={freeImg} alt="Image 2" />
	<img className="h-48 aspect-video rounded-sm  " src={eskillIT} alt="Image 3" />
	
</div>
              </div>
              <p className='text-center text-gray-400 mt-4 text-xs sm:text-xl pb-4'>© 2023 All Rights Reserved by <span className='font-bold underline'>AL MAHFUZ.</span></p>
    </div>
    
              </section>
              <br />
          </div>
     );
};
export default About;