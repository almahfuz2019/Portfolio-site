import React from 'react';
import bgImg from "../Images/bg-dark.jpg";
import { ImFacebook } from "react-icons/im";
import Typewriter from 'typewriter-effect';
import { FaDownload } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import selfImg from '../Images/self.jpg'
const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md " >
                    <div className='flex justify-center'>
                        <img className="rounded-full  border-double w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px] shadow-md shadow-white" src={selfImg} alt="" /></div>
                    <h3 className="mt-6 mb-1 text-4xl font-bold ">Abdullah Al Mahfuz</h3>
                
                    <Typewriter className="mb-4 text-[#9e9999] "
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            strings: ["Web Designer", "Web Developer", "React Developer", "MERN Stack Developer"],
                        }}
                    />
                    <div className="flex space-x-3 justify-center mb-6 mt-4">
                        {/* <!-- facebook link --> */}
                        <a className='bg-white py-1.5 px-2 rounded' href="https://www.facebook.com/abdullahal.mahfuz.7792?mibextid=ZbWKwL" >
                            <span className="socialbtn text-xl  text-[#1773EA]">
                                <ImFacebook />
                            </span>
                        </a>
                        {/* <!-- twitter link --> */}
                        <a href="https://github.com/almahfuz2019?tab=repositories" className='bg-white py-1.5 px-2 rounded' >
                            <span className="socialbtn text-xl text-[#131b20]">
                                <BsGithub />
                            </span>
                        </a>
                        {/* <!-- dribbble icon and link --> */}
                        <a href="mailto:almahfuz2019@gmail.com" className='bg-white py-1.5 px-2 rounded' >
                            <span className="socialbtn text-xl text-[#e14a84]">
                                <TfiEmail />
                            </span>
                        </a>
                        {/* <!-- linkedin icon and link --> */}
                        <a href="https://www.linkedin.com/" className='bg-white py-1.5 px-2 rounded pointer-events-none' >
                            <span className="socialbtn text-xl text-[#0072b1]">
                                <GrLinkedinOption />
                            </span>
                        </a>
                    </div>

                    <button className="btn dowanload-btn bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary pointer-events-none "> <span className='mr-2'><FaDownload /></span> Download CV</button>



                </div>
            </div>
        </div>
    );
};
export default Home;