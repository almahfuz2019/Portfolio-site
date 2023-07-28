import React from 'react';
import bgImg from "../Images/bg-dark.jpg";
import { FaGraduationCap } from "react-icons/fa";
import { MdBusinessCenter } from 'react-icons/md';
const Resume = () => {
     return (
          <div>
               <div className='pt-14' style={{ backgroundImage: `url(${bgImg})`}}>
              <section className='m-4 my-0 rounded-md p-3 sm:p-10' style={{backgroundColor:"#111111"}} >
             <div className="flex items-center ">
             <h5 className="headline my-5 sm:text-5xl text-3xl font-bold text-white leading-none font"> 
            Resume
            
            {/* <hr  className='text-red-500 bg-yellow-900'/> */}
          </h5>
          <progress className="progress h-1 sm:w-48 w-20 ml-2 mt-2 sm:ml-5 progress-primary  block" value="100" max="100"></progress>
             </div>
          <div className='flex items-center'>
               <FaGraduationCap className='text-3xl  sm:text-5xl mr-3' style={{color:"#F95054"}}/>
          <h5 className="my-5 text-xl sm:text-3xl font-semibold text-white leading-none">
           Education
          </h5>
          </div>
          <div  class="grid grid-cols-1 sm:grid-cols-2  gap-4">
         
          <div class="about-box bg-transparent bg-[#fcf4ff] flex border-2 border-gray-600 rounded-lg p-4">
         
            <div class="space-y-1">
           <div className="flex items-center justify-center">
          
            </div>
            <p class=" text-gray-200 text-justify text-xs sm:text-xl  font-normal mb-3 ">2023-Present</p>
            <h3 class=" text-xl sm:text-2xl font-semibold text-white "> 
            B.Sc. in Computer Science and Engineering (CSE)</h3>
            <p class="leading-8 text-gray-200 text-xs sm:text-xl text-justify "> Metropolitan University</p>
             </div>
                 </div>
          <div class="about-box bg-transparent bg-[#fcf4ff] flex border-2 border-gray-600 rounded-lg p-4">
         
            <div class="space-y-1">
           <div className="flex items-center justify-center">
          
            </div>
            <p class=" text-gray-200 text-justify text-xs sm:text-xl  font-normal mb-3 ">2018-2023</p>
            <h3 class=" text-xl sm:text-2xl font-semibold text-white "> 
           Diploma in Engineering (Computer Science and Technology) </h3>
            <p class="leading-8 text-gray-200 text-xs sm:text-xl text-justify "> Moulvibazar Polytechnic Institute </p>
             </div>
                 </div>
          <div class="about-box bg-transparent bg-[#fcf4ff] flex border-2 border-gray-600 rounded-lg p-4">
         
            <div class="space-y-1">
           <div className="flex items-center justify-center">
          
            </div>
            <p class=" text-gray-200 text-justify text-xs sm:text-xl  font-normal mb-3 ">2017-2018</p>
            <h3 class=" text-xl sm:text-2xl font-semibold text-white "> 
           Dakhil </h3>
            <p class="leading-8 text-gray-200 text-xs sm:text-xl text-justify "> Moulvibazar Jamea Islamia Dakhil Madrasah</p>
             </div>
                 </div>
        
          
       
          </div>
          <div className='flex items-center'>
               <MdBusinessCenter className='text-3xl  sm:text-5xl mr-3' style={{color:"#F95054"}}/>
          <h5 className="my-5 text-xl sm:text-3xl font-semibold text-white leading-none">
           Experience
          </h5>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2  gap-4">
          <div class="about-box bg-transparent bg-[#fcf4ff] flex border-2 border-gray-600 rounded-lg p-4">
         
         <div class="space-y-1">
        <div className="flex items-center justify-center">
       
         </div>
         <p class=" text-gray-200 text-justify text-xs sm:text-xl  font-normal mb-3 ">Mar 2023-june 2023</p>
         <h3 class=" text-xl sm:text-2xl font-semibold text-white "> 
         Guest Lecturer (Computer Science and Technology)</h3>
         <p class="leading-8 text-gray-200 text-xs sm:text-xl text-justify "> Moulvibazar Polytechnic Institute </p>
          </div>
              </div>
            
         
          </div>
              </section>
       
          <section  className='bg-black m-4 p-2 bg-opacity-10'>
          <div class="grid grid-cols-1 sm:grid-cols-2  gap-10">
               <div>
               <h3 class="text-xl underline underline-offset-8 sm:text-3xl font-semibold text-white"> 
              Working Skills </h3>
              <div>
              <br />
              <div className='flex justify-between'>
              <p className='text-gray-300 font-semibold'>Tailwindcss</p>
              <p className='text-gray-300 font-semibold'>90%</p>
              </div>
<progress className="progress progress-success bg-gray-500  w-full" value="80" max="100"></progress>
              <div className='flex justify-between'>
              <p className='text-gray-300 font-semibold'>Bootstrap 5</p>
              <p className='text-gray-300 font-semibold'>95%</p>
              </div>
<progress className="progress progress-error bg-gray-500  w-full" value="80" max="100"></progress>
              <div className='flex justify-between'>
              <p className='text-gray-300 font-semibold'>JavaScript</p>
              <p className='text-gray-300 font-semibold'>80%</p>
              </div>
<progress className="progress progress-accent bg-gray-500  w-full" value="80" max="100"></progress>
<div className='flex justify-between'>
              <p className='text-gray-300 font-semibold'>React  JS</p>
              <p className='text-gray-300 font-semibold'>85%</p>
              </div>
<progress className="progress progress-secondary bg-gray-500  w-full" value="85" max="100"></progress>
<div className='flex justify-between'>
              <p className='text-gray-300 font-semibold'>Firebase </p>
              <p className='text-gray-300 font-semibold'>70%</p>
              </div>
<progress className="progress progress-accent bg-gray-500 w-full" value="70" max="100"></progress>
<div className='flex justify-between'>
              <p className='text-gray-300 font-semibold'>Node Js</p>
              <p className='text-gray-300 font-semibold'>75%</p>
              </div>
<progress className="progress progress-error bg-gray-500 w-full" value="75" max="100"></progress>
<div className='flex justify-between'>
              <p className='text-gray-300 font-semibold'>Express JS</p>
              <p className='text-gray-300 font-semibold'>90%</p>
              </div>
<progress className="progress progress-info  w-full bg-gray-500" value="95" max="100"></progress>
<div className='flex justify-between'>
              <p className='text-gray-300 font-semibold'>MongoDB</p>
              <p className='text-gray-300 font-semibold'>80%</p>
              </div>
<progress className="progress progress-success bg-gray-500  w-full" value="80" max="100"></progress>
              </div>
               </div>
               <div >
          
              <h3 class="text-xl underline underline-offset-8 sm:text-3xl font-semibold text-white"> 
              Knowledges </h3>
              <br />
              <div class="flex gap-x-2 gap-y-2 md:gap-y-4 md:gap-x-4 flex-wrap">
              <button className="resume-btn btn glass text-xs sm:text-xl">HTML</button><button className="resume-btn btn glass text-xs sm:text-xl">CSS</button><button className="resume-btn btn glass text-xs sm:text-xl ">Bootstrap 5</button><button className="resume-btn btn glass text-xs sm:text-xl">Tailwindcss</button><button className="resume-btn btn glass text-xs sm:text-xl">Daisyui</button>
              <button className="resume-btn btn glass text-xs sm:text-xl">React-router-dom v6</button>
              <button className="resume-btn btn glass text-xs sm:text-xl">react-firebase-hooks</button>
              <button className="resume-btn btn glass text-xs sm:text-xl">Recharts</button>
              <button className="resume-btn btn glass text-xs sm:text-xl">Git</button><button className="resume-btn btn glass text-xs sm:text-xl">GitHub</button>              
                                 <button className="resume-btn btn glass text-xs sm:text-xl">VSCode</button>
                                 <button className="resume-btn btn glass text-xs sm:text-xl">Redux</button>
                                 <button className="resume-btn btn glass text-xs sm:text-xl">Redux Toolkit</button>
              <button className="resume-btn btn glass text-xs sm:text-xl">DevTools </button>
              <button className="resume-btn btn glass text-xs sm:text-xl">Cloud server</button>
              <button className="resume-btn btn glass text-xs sm:text-xl">MS office</button>
              <button className="resume-btn btn glass text-xs sm:text-xl">Adobe Photoshop</button>
              <button className="resume-btn btn glass text-xs sm:text-xl border">Adobe Illustrator </button>
              <button className="resume-btn btn glass text-xs sm:text-xl">Microcontroller </button>
                                    </div>
               </div>
          </div>
         
          </section>
          <footer class="overflow-hidden bg-[#212425] rounded-b-2xl mx-5">
          <p className='text-center text-gray-400 mt-4 text-xs sm:text-xl pb-4'>© 2023 All Rights Reserved by <span className='font-bold underline'>AL MAHFUZ.</span></p>
                        </footer>
                        <br />
          </div>
          </div>
     );
};
export default Resume;