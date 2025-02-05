import React from 'react'
import contact from '../../assets/images/contact.svg'
import icon from '../../assets/images/contact2.svg'
import social from '../../assets/images/Social.svg'
import meeting from '../../assets/images/meeting.svg'
import location from '../../assets/images/location.svg'
import social1 from '../../assets/images/social1.svg'
import social2 from '../../assets/images/social2.svg'
import social3 from '../../assets/images/social3.svg'
import contact1 from '../../assets/images/contact1.png'
import contact3 from '../../assets/images/contact3.png'
import connect1 from '../../assets/images/connect1.svg'
import connect2 from '../../assets/images/connect2.svg'
import Header from '../Home/Header'
import svg from '../../assets/images/calendar-linear.svg'


const Contact = () => {
    return (
        <div>
            <Header />
            <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />
            <div className='p-5 py-10 '>
                <div className=' text-center'>
                    <div>
                        <h1 className='font-medium text-[#1782C5] text-3xl md:text-4xl'>Connect & Support
                        </h1>
                        <p className=' mt-2 md:text-base'>Let us know how we can help you!</p>
                    </div>

                    <div className='flex justify-center items-center '>
                        <img src={contact1} alt="" className='md:h-[480px] md:w-auto' />
                    </div>
                </div>

                <div className=' border-black md:w-[80%] mx-auto md:flex justify-center my-8'>
                    <div className='md:order-2'>
                        <img src={contact3} alt="" className='w-full h-[245px] md:w-[540px] md:h-[300px] object-cover rounded-t-lg md:rounded-l-none md:rounded-r-lg' />
                    </div>
                    <div className='bg-[#1782C5] md:order-1 md:w-[45%] md:flex items-center p-5 px-8 gap-5 text-white rounded-b-lg md:rounded-b-none md:rounded-l-lg '>
                        <div className=''>
                            <img src={icon} alt="" className='w-12 h-12  justify-start items-center p-2 rounded-lg  border ' />
                            <h1 className='font-medium text-xl md:text-2xl mt-5 mb-3'>Schedule a Meeting
                                <br /> with our Experts</h1>
                            <p className='text-[#D9D9D9] text-sm my-3'>Book a session with our experts to get <br /> personalized solutions tailored to your needs!</p>
                            {/* <button className="bg-white text-black flex justify-between items-center gap-1 w-auto h-[38px]  p-2 px-3 rounded-full">
                                Schedule meeting
                                <div className='flex items-center hover:bg-[#1782C5] justify-center w-[28px] h-[28px] rounded-full'>
                                    <img src={svg} className='w-[20px] h-[25px]' alt="Down arrow icon" />
                                </div>
                            </button> */}

                            <a href="https://api.whatsapp.com/send?phone=9899829299" target="_blank" rel="noopener noreferrer">
                                <button
                                    className="bg-white flex justify-between items-center gap-1 hover:bg-[#1782C5] w-auto h-[38px] p-2 px-3 rounded-full hover:border hover:border-white transition-colors duration-200 group"
                                >
                                    <span
                                        className="text-black transition-colors duration-200 group-hover:text-white"
                                    >
                                        Schedule Meeting
                                    </span>

                                    <div
                                        className="flex items-center justify-center w-[28px] h-[28px] rounded-full group "
                                    >
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition-colors duration-300"
                                        >
                                            <path
                                                d="M2 12C2 8.229 2 6.343 3.172 5.172C4.344 4.001 6.229 4 10 4H14C17.771 4 19.657 4 20.828 5.172C21.999 6.344 22 8.229 22 12V14C22 17.771 22 19.657 20.828 20.828C19.656 21.999 17.771 22 14 22H10C6.229 22 4.343 22 3.172 20.828C2.001 19.656 2 17.771 2 14V12Z"
                                                className="stroke-black group-hover:stroke-white"
                                                stroke-width="1.5"
                                            />
                                            <path
                                                d="M7 4V2.5M17 4V2.5M2.5 9H21.5"
                                                className="stroke-black group-hover:stroke-white"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                            />
                                            <path
                                                d="M18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C16.7348 18 16.4804 17.8946 16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17C16 16.7348 16.1054 16.4804 16.2929 16.2929C16.4804 16.1054 16.7348 16 17 16C17.2652 16 17.5196 16.1054 17.7071 16.2929C17.8946 16.4804 18 16.7348 18 17ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14C16.7348 14 16.4804 13.8946 16.2929 13.7071C16.1054 13.5196 16 13.2652 16 13C16 12.7348 16.1054 12.4804 16.2929 12.2929C16.4804 12.1054 16.7348 12 17 12C17.2652 12 17.5196 12.1054 17.7071 12.2929C17.8946 12.4804 18 12.7348 18 13ZM13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16C12.2652 16 12.5196 16.1054 12.7071 16.2929C12.8946 16.4804 13 16.7348 13 17ZM13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13ZM8 17C8 17.2652 7.89464 17.5196 7.70711 17.7071C7.51957 17.8946 7.26522 18 7 18C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17C6 16.7348 6.10536 16.4804 6.29289 16.2929C6.48043 16.1054 6.73478 16 7 16C7.26522 16 7.51957 16.1054 7.70711 16.2929C7.89464 16.4804 8 16.7348 8 17ZM8 13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13C6 12.7348 6.10536 12.4804 6.29289 12.2929C6.48043 12.1054 6.73478 12 7 12C7.26522 12 7.51957 12.1054 7.70711 12.2929C7.89464 12.4804 8 12.7348 8 13Z"
                                                className="fill-black group-hover:fill-white"
                                            />
                                        </svg>
                                    </div>

                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-8 md:flex-row md:gap-8 md:w-[80%] mx-auto my-10 '>
                    <div className='border flex flex-col gap-4 p-5 pb-10 px-7 w-[90%] mx-auto font-custom rounded-xl border-[#1782C5]'>
                        <img src={contact} alt="" className='w-12 h-12' />
                        <h1 className='text-lg font-medium '>Connect with Us</h1>
                        <div>
                            <div className='flex gap-3'>
                                <img src={connect1} alt="" />
                                <a
                                    href="tel:+917942962885"
                                    className="font-custom text-[#1E1E1E] text-opacity-75"
                                >
                                    +91-7942962885
                                </a>
                            </div>
                            <div className='flex gap-3 mt-2 mb-3'>
                                <img src={connect2} alt="" />
                                <a
                                    href="mailto:info@airbio.in"
                                    className="font-custom text-[#1E1E1E] text-opacity-75"
                                >
                                    info@airbio.in
                                </a>

                            </div>

                        </div>
                    </div>

                    <div className='border flex flex-col gap-4 p-5 px-7 w-[90%] mx-auto font-custom rounded-lg border-[#1782C5]'>
                        <img src={social} alt="" className='w-12 h-12' />
                        <h1 className='text-lg font-medium '>Follow Us on Socials</h1>
                        <div>
                            <p className='text-[#1E1E1E] text-opacity-75'>Connect with our Social Handles Stay Updated with Latest News!</p>
                            <div className='font-custom flex justify-center mt-4 gap-5 '>
                                <a href="https://m.facebook.com/airbio/" target="_blank" rel="noopener noreferrer">
                                    <img src={social1} alt="Facebook" className='w-[28px] h-[28px] ' />
                                </a>
                                <a href="https://api.whatsapp.com/send?phone=9899829299" target="_blank" rel="noopener noreferrer">
                                    <img src={social2} alt="WhatsApp" className='w-[30px] h-[30px] ' />
                                </a>
                                <a href="https://www.linkedin.com/company/airbiotechnologies/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                                    <img src={social3} alt="linkedin" className='w-[28px] h-[28px] ' />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <div className='border flex flex-col gap-8 p-5 px-7 w-[90%] mx-auto font-custom rounded-lg border-[#1782C5]'>
                        <img src={meeting} alt="" className='w-10 h-10' />
                        <p className='text-lg font-medium '>Schedule a meeting</p>
                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p className='font-custom'>contact.airbio@gmail.com</p>
                        </div>
                    </div> */}

                    <div className='border flex flex-col gap-4 p-5 pb-7 px-7 w-[90%] mx-auto font-custom rounded-lg border-[#1782C5]'>
                        <img src={location} alt="" className='w-12 h-12' />
                        <h1 className='text-lg font-medium '>Address</h1>
                        <div>
                            <p className='text-[#1E1E1E] text-opacity-75 mb-6'>11/32, Site IV, Sahibabad Industrial Area, Ghaziabad- 201010, Uttar Pradesh.</p>
                            <div className='flex justify-center items-center'>
                                <a href="https://maps.app.goo.gl/TgVT5d8wzAxkSZVb9" target="_blank" rel="noopener noreferrer">
                                    <button className=' bg-black text-white  p-1 px-3 rounded-3xl'>Locate on Maps</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
