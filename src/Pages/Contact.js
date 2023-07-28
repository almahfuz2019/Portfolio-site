import React from 'react';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { MdOutgoingMail } from 'react-icons/md';
import bgImg from "../Images/bg-dark.jpg";
const Contact = () => {
    return (
        <div >
            <div className='pt-14' style={{ backgroundImage: `url(${bgImg})` }}>
                <div class="bg-homeBg min-h-screen bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed   w-full px-2">
                    <div class=" ">
                        {/* <!-- container start --> */}
                        <div class=" ">
                            {/* <!-- header start for large screens --> */}


                            <section className=''>
                                {/* <!-- Home page contant start --> */}
                                <div class=" lg:rounded-2xl bg-[#111111] rounded-md">
                                    <div data-aos="fade" class="aos-init aos-animate">
                                        <div class="container px-4 sm:px-5 md:px-10 lg:px-20">
                                            <div class=" py-3 md:py-12">
                                                <div className="flex items-center ">
                                                    <h5 className="headline my-5 sm:text-5xl text-3xl font-bold text-white leading-none font"  >
                                                        Contact Me

                                                        {/* <hr  className='text-red-500 bg-yellow-900'/> */}
                                                    </h5>
                                                    <progress className="progress h-1 sm:w-48 w-20 ml-2 mt-2 sm:ml-5 progress-primary  block" value="100" max="100"></progress>
                                                </div>
                                                <div class="lg:flex gap-x-20">
                                                    {/* <!-- personal contact information --> */}
                                                    <div class="w-full lg:w-[50%] xl:w-[50%] space-y-6">
                                                        <div class="flex items-start  bg-transparent p-[30px] border-[#212425] border-2 gap-2 rounded-xl">
                                                            <span class="w-8 mt-2">
                                                                <BsFillTelephoneOutboundFill className='text-3xl text-primary
                                                '/>
                                                            </span>
                                                            <div class="space-y-2">
                                                                <p class="text-xl font-semibold text-white"> Phone : </p>
                                                                <p class="text-gray-lite text-lg text-[#A6A6A6]"> +88017878-787443 </p>
                                                                <p class="text-gray-lite text-lg text-[#A6A6A6]"> +8801837-298170 </p>
                                                            </div>
                                                        </div>

                                                        <div class="flex items-start bg-transparent  p-[30px] border-[#212425] border-2 gap-2 rounded-xl">
                                                            <span class="w-8 mt-2">
                                                                <MdOutgoingMail className='text-3xl text-warning' />
                                                            </span>
                                                            <div class="space-y-2">
                                                                <p class="text-xl font-semibold text-white"> Email : </p>
                                                                <p class="text-gray-lite text-lg text-[#A6A6A6]"> almahfuz2019@gmail.com
                                                                </p>
                                                                <p class="text-gray-lite text-lg text-[#A6A6A6]"> almahfuz2025.com
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div class="flex items-start bg-transparent  p-[30px] border-[#212425] border-2 gap-2 rounded-xl">
                                                            <span class="w-8 mt-2">
                                                                <FaMapMarkedAlt className='text-3xl text-red-700' />
                                                            </span>
                                                            <div class="space-y-2">
                                                                <p class="text-xl font-semibold text-white"> Address : </p>
                                                                <p class="text-gray-lite text-lg text-[#A6A6A6]"> Moulvibazar, Sylhet, Dhaka, Bangladesh.
                                                                </p>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]">
                                                        <div data-aos="fade" class="border-[#212425] border-2 mb-16 md:p-[48px] p-4 bg-color-810 rounded-xl bg-[#111111] mb-[30px] md:mb-[60px] aos-init aos-animate">
                                                            <h3 class="text-2xl">
                                                                <span class="text-gray-600 text-xs sm:text-xl">I'm always open to
                                                                    discussing website</span>
                                                                <br />
                                                                <span class="font-semibold text-white text-xl sm:text-2xl">design & development or
                                                                    partnerships.</span>
                                                            </h3>
                                                            <form id="myForm" action="https://formspree.io/f/xoqrgaab" method="POST">
                                                                {/* <!-- name input --> */}
                                                                <div class="relative z-0 w-full mt-[40px] mb-8 group">
                                                                    <input type="text" id="name" name="name" class="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none text-white border-[#333333] focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer" placeholder=" " required="" />
                                                                    <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Name
                                                                        *</label>
                                                                </div>

                                                                {/* <!-- email input  --> */}
                                                                <div class="relative z-0 w-full mb-8 group">
                                                                    <input type="email" name="user_email" class="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none text-white border-[#333333] focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer" placeholder=" " id="user_email" required="" />
                                                                    <label for="user_email" class="peer-focus:font-medium absolute text-sm text-gray-500 text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email
                                                                        *</label>
                                                                </div>

                                                                {/* <!-- massage input --> */}
                                                                <div class="relative z-0 w-full mb-8 group">
                                                                    <input type="text" name="message" class="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none text-white border-[#333333] focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer" placeholder=" " id="message" required="" />
                                                                    <label for="message" class="peer-focus:font-medium absolute text-sm text-gray-500 text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Message
                                                                        *</label>
                                                                </div>

                                                                <div class="transition-all duration-300 ease-in-out inline-block hover:bg-primary rounded-lg mt-3">
                                                                    {/* <!-- submit buttons --> */}
                                                                    <input type="submit" class="transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white text-white" value="Submit" />
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- footer  start--> */}

                                        {/* <!-- footer ends --> */}
                                    </div>

                                </div>

                            </section>
                            <footer class="overflow-hidden  bg-[#212425] rounded-b-2xl mx-1 mt-3">
                                <p className='text-center text-gray-400 mt-4 text-xs sm:text-xl pb-4'>© 2023 All Rights Reserved by <span className='font-bold underline'>AL MAHFUZ.</span></p>
                            </footer>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;