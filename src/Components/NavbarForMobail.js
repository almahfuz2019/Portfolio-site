import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaAlignLeft } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { MdContactPage, MdOutlineSpeakerNotes, MdWork } from 'react-icons/md';
const NabbarForMabail = () => {
     
     let navItems=<>
     <li><NavLink to="/" className='hover:underline underline-offset-4 rounded-md h-10   mr-2 mb-2 sm:mb-0 text-gray-100 '><span className='text-xl'><AiFillHome/></span> Home</NavLink></li>
          <li><NavLink to="/about" className='hover:underline underline-offset-4 rounded-md h-10   mr-2 mb-2 sm:mb-0 text-gray-100 '><span className='text-xl'><FiUser/></span> About</NavLink></li>
          <li><NavLink to="/resume" className=' hover:underline underline-offset-4 rounded-md h-10   mr-2 mb-2 sm:mb-0 text-gray-100 '><span className='text-white'><MdOutlineSpeakerNotes/></span> Resume</NavLink></li>
       <li><NavLink to="/works" className='hover:underline underline-offset-4 rounded-md h-10 mr-2 mb-2 sm:mb-0 text-gray-100'><span className='text-xl'><MdWork/></span> Works</NavLink></li> 

         
          <li><NavLink to="/contact" className=' hover:underline underline-offset-4 rounded-md h-10   mr-2 mb-2 sm:mb-0 text-gray-100'><span className='text-xl'><MdContactPage/></span> Contact</NavLink></li>
     </>
     return (
          <div  style={{backgroundColor:"#111111"}} className='pt-3 lg:hidden'>
         
     <div className="flex justify-between border-b-4 border-primary items-center ">
     <div className="ml-4">
     <NavLink to="/" className="text-white  normal-case text-2xl  sm:text-4xl logo ">  AL MAHFUZ</NavLink>
     </div>
       <div className="flex justify-end">
    <div className="dropdown dropdown-bottom dropdown-end">
      <label tabIndex={0} className="btn btn-ghost text-white ">
          <i className='font-bold'><FaAlignLeft className='text-2xl font-extrabold rotate-180'/></i>
      
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-48 border border-primary border-opacity-30 mr-3 "  style={{backgroundColor:"#111111"}} >
{navItems}
      </ul>
    </div>

 
 

</div>
     </div>
          </div>
     );
};
export default NabbarForMabail;