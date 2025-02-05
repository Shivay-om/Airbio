import React from 'react';
import logo from '../../assets/images/flogo.png'
import contact from '../../assets/images/fcontact.svg'
import email from '../../assets/images/femail.svg'
import facebook from '../../assets/images/facebook.svg'
import linkedin from '../../assets/images/linkedin.svg'
import whatsapp from '../../assets/images/whatsapp.svg'

const Footer = () => {
    return (
        <div className="bg-[#1782C5] text-white rounded-t-[20px] py-8 px-4">
            <div className="container md:flex justify-between pb-2 px-4 mb-8 md:mb-0 md:mt-10">
                {/* Logo Section */}
                <div className="flex justify-center items-center">
                    <img src={logo} alt="logo" className='w-[168px] h-[44px] md:w-auto md:h-[130px]' />
                </div>

                <div className='md:flex flex-col justify-between md:w-[50%] md:h-[300px]'>
                    {/* Links Section */}
                    <div className="flex justify-between md:justify-around text-[14px] my-5 gap-6 md:gap-0">
                        {/* Company Section */}
                        <div>
                            <h3 className="font-[500px] text-base md:text-[21px] mb-4 ">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="/about" className="md:text-lg md:font-light hover:text-gray-400">About Us</a></li>
                                <li><a href="/product" className="md:text-lg md:font-light hover:text-gray-400">Products</a></li>
                            </ul>
                        </div>

                        {/* Need Help Section */}
                        <div>
                            <h3 className="mb-4 text-base font-medium md:text-[21px] ">Need Help</h3>
                            <ul className="space-y-2">
                                <li><a href="/contact" className="md:text-lg md:font-light hover:text-gray-400">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* More Info Section */}
                        <div>
                            <h3 className="font-[500px] text-base mb-4 md:text-[21px] ">More Info</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="md:text-lg md:font-light hover:text-gray-400">T&C</a></li>
                                <li><a href="#" className="md:text-lg md:font-light hover:text-gray-400">Privacy Policy</a></li>
                                <li><a href="#faq" className="md:text-lg md:font-light hover:text-gray-400">FAQ</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact & Social Icons Section */}
                    <div className="flex justify-between items-center">
                        {/* Contact Email */}
                        <div className='md:flex flex-center justify-center gap-10'>
                            <div className="flex items-center gap-3  py-3">
                                <img src={contact} alt="Contact Icon" className="w-6 h-6" />
                                <a href="tel:0120 2988099">
                                    <h3>0120 2988099</h3>
                                </a>

                            </div>

                            <div className='flex items-center gap-3 '>
                                <img src={email} alt="" className="w-6 h-6" />
                                <a href="mailto:Info@airbio.in">
                                    <p>Info@airbio.in</p>
                                </a>

                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            <a href="https://m.facebook.com/airbio/" className="hover:text-gray-400">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="https://www.linkedin.com/company/airbiotechnologies/?originalSubdomain=in" className="hover:text-gray-400">
                                <img src={linkedin} alt="" />
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=9899829299" className="hover:text-gray-400">
                                <img src={whatsapp} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br /><p className='text-[10px] mb-1 md:hidden text-center'>Copyright © 2025 AirBio Technologies</p>
            <hr className='w-full' />
        </div>
    );
};

export default Footer;
