import React from 'react'
import banner from '../../assets/images/banner.jpeg'
import banner_one from '../../assets/images/banner_airbio.png'

import art1 from '../../assets/images/biosafety/bsc.jpg'
// import art1 from '../../assets/images/biosafety1.jpg'
import art2 from '../../assets/images/fume/fume.webp'
// import art2 from '../../assets/images/biosafety.jpg'
import art3 from '../../assets/images/laminar/laf.webp'
// import art3 from '../../assets/images/biosafety.jpg'
import vector from '../../assets/images/Vector.svg'
import customer from '../../assets/images/customer.svg'
import truck from '../../assets/images/delivered.svg'
import industry from '../../assets/images/industry.svg'
import booking from '../../assets/images/booking.svg'
import usp1 from '../../assets/images/usp1.svg'
import usp2 from '../../assets/images/usp2.svg'
import usp3 from '../../assets/images/usp3.svg'
import usp4 from '../../assets/images/usp4.svg'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom'



const uspData = [
    {
        id: 1,
        title: 'Protection Solutions',
        icon: usp1, // Example icon, can use actual icon components
        description: 'Advanced filtration solutions designed to protect users samples, and the environment',
    },
    {
        id: 2,
        title: 'Contamination Control',
        icon: usp2,
        description: 'State-of-the-art technology built to minimize contamination risks across applications',
    },
    {
        id: 3,
        title: 'Trusted Safety',
        icon: usp3,
        description: 'Reliable safety systems trusted across laboratories, healthcare, and research sectors',
    },
    {
        id: 4,
        title: 'Sustainable Performance',
        icon: usp4,
        description: 'A perfect blend of performance, convenience, and environmental responsibility',
    },
];

const About = () => {
    return (
        <div>
            <div className='p-5 md:mt-12 flex flex-col md:flex justify-center items-center border-red-600'>
                <h1 className='text-center text-xl  md:hidden p-3 px-8 mb-5 border border-[#C0C0C0] rounded-full text-black font-[500px] inline-block mx-auto'>
                    About Airbio
                </h1>
                <div className='md:flex justify-between w-full max-w-7xl md:px-5 items-center border-black'>
                    <div className='my-5 md:w-[50%]'>
                        <img src={banner_one} className='w-[370px] md:w-[520px] h-auto md:h-auto rounded-xl' alt="" />
                    </div>
                    <div className='flex flex-col gap-10 md:w-[50%] border-blue-500'>
                        <h1 className='hidden md:inline-block text-[24px] p-[6px] font-urbanist px-4 border border-[#C0C0C0] rounded-full text-black font-[500px] w-fit'>About Airbio</h1>
                        <p className='text-justify md:text-lg md:text-start font-custom text-[#868686]'>At AirBio, we specialize in manufacturing innovative, high quality safety systems designed to protect people, systems and the environment. From ductless fume hoods to biological safety cabinets, our product range provides protection against hazardous materials, air pollution and hazardous vapors. <span className='text-black'>With the most advanced technology, our solutions are designed to meet global environmental standards and support green initiatives such as LEED compliance.</span></p>
                    </div>
                </div>
            </div>

            <div className='md:max-w-[80%] mx-auto flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 my-8 '>
                <div className=' flex flex-col justify-center items-center mx-5'>
                    <img src={customer} alt="" className='mb-4' />
                    <div className=' md:h-[100px]'>
                        <h1 className='font-bold text-center text-2xl mt-0 mb-2 tracking-wide'>

                            <CountUp start={0} end={100} delay={0} enableScrollSpy >
                                {({ countUpRef, start }) => (
                                    <div style={{ fontSize: '36px', color: '#1782C5', gap: '4px' }}>
                                        <span ref={countUpRef} />
                                        <button onClick={start} style={{ fontSize: '36px', color: '#1782C5', border: 'none', background: 'transparent', cursor: 'pointer' }}>%</button>
                                    </div>
                                )}
                            </CountUp></h1>
                        <p className='w-[150px] text-center text-[#1E1E1E] tracking-wider'>Equipment Quality</p>
                    </div>
                </div>

                <div className=' flex flex-col justify-center items-center mx-5'>
                    <img src={truck} alt="" className='mb-4' />
                    <div className=' h-[100px]'>
                        <h1 className='font-bold text-center text-2xl mt-0 mb-2 tracking-wide'>

                            <CountUp start={0} end={40} delay={0} enableScrollSpy >
                                {({ countUpRef, start }) => (
                                    <div style={{ fontSize: '36px', color: '#1782C5', gap: '4px' }}>
                                        <span ref={countUpRef} />
                                        <button onClick={start} style={{ fontSize: '36px', color: '#1782C5', border: 'none', background: 'transparent', cursor: 'pointer' }}>+</button>
                                    </div>
                                )}
                            </CountUp></h1>
                        <p className='text-center text-[#1E1E1E] tracking-wider'>Years Team Experience</p>
                    </div>
                </div>

                <div className=' flex flex-col justify-center items-center  w-auto mx-5'>
                    <img src={industry} alt="" className='mb-4' />
                    <div className=' md:h-[100px]'>
                        <h1 className='font-bold text-center text-2xl mt-0 mb-2 tracking-wide'>

                            <CountUp start={0} end={6} delay={0} enableScrollSpy >
                                {({ countUpRef, start }) => (
                                    <div style={{ fontSize: '36px', color: '#1782C5', gap: '4px' }}>
                                        <span ref={countUpRef} />
                                        <button onClick={start} style={{ fontSize: '36px', color: '#1782C5', border: 'none', background: 'transparent', cursor: 'pointer' }}>+</button>
                                    </div>
                                )}
                            </CountUp></h1>
                        <p className='w-[150px] text-center text-[#1E1E1E] tracking-wider'>Industries Served</p>
                    </div>
                </div>

                <div className=' flex flex-col justify-center items-center mx-5'>
                    <img src={booking} alt="" className='mb-4' />
                    <div className=' h-[100px]'>
                        <h1 className='font-bold text-center text-2xl mt-0 mb-2 tracking-wide'>

                            <CountUp start={0} end={54} delay={0} enableScrollSpy >
                                {({ countUpRef, start }) => (
                                    <div style={{ fontSize: '36px', color: '#1782C5', gap: '4px' }}>
                                        <span ref={countUpRef} />
                                        <button onClick={start} style={{ fontSize: '36px', color: '#1782C5', border: 'none', background: 'transparent', cursor: 'pointer' }}>+</button>
                                    </div>
                                )}
                            </CountUp></h1>
                        <p className='w-[150px] text-center text-[#1E1E1E] tracking-wider'>Country Reach</p>
                    </div>
                </div>
            </div>

            <div>
                <div id='product-section' className="flex justify-center items-center pt-10 mt-10 mb-10     ">
                    <h1 className="text-center text-xl md:text-2xl  p-3 px-8 border border-[#C0C0C0] rounded-full text-black">
                        Our Products
                    </h1>
                </div>
                <div>
                    <div className="flex md:justify-center items-center overflow-x-scroll md:overflow-x-hidden gap-4 p-4 max-w-screen-xl mx-auto scrollbar scrollbar-thumb-customBlue scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                        {/* Card 1 */}
                        <div className="min-w-[318px] h-[530px] md:w-[350px] md:h-[500px] flex flex-col justify-center items-center md:min-w-0 rounded-3xl p-4 border border-[#CDCDCD]">
                            <h2 className="p-[4px] py-2 px-4 mb-2 bg-[#1782C5] text-white rounded-[50px]">Biosafety Cabinets</h2>
                            <img src={art1} alt="Card 1" className="w-full h-[369px] md:w-[280px] object-cover mb-2" />
                            <Link to="/product/Biosafety">
                            <button className="px-4 py-2 flex bg-black hover:bg-[#1782C5] text-white justify-center items-center gap-2 rounded-[50px]  border-[#CDCDCD] hover:border-[#1782C5] group">View More
                                <img src={vector} alt="vector icon" className='text-white' />
                            </button>
                            </Link>
                        </div>


                        {/* Card 2 */}
                        <div className="min-w-[318px] h-[530px] md:w-[350px] md:h-[500px] flex flex-col justify-center items-center md:min-w-0 rounded-3xl p-4 border border-[#CDCDCD]">
                            <h2 className="p-[4px] py-2  px-4 mb-2 bg-[#1782C5] text-white  rounded-[50px]">Fume Hoods</h2>
                            <img src={art2} alt="Card 1" className="w-[254px] md:w-[280px] h-[369px] object-cover mb-2" />
                            <Link to="/product/FumeHoods">
                            <button className=" px-4 py-2 bg-black flex  justify-center items-center hover:bg-[#1782C5] text-white gap-2 rounded-[50px]  border-[#CDCDCD] hover:border-[#1782C5]">View More
                                <img src={vector} alt="vector icon" />
                            </button>
                            </Link>
                        </div>

                        {/* Card 3 */}

                        <div className="min-w-[318px] h-[530px] md:w-[350px] md:h-[500px] flex flex-col justify-center items-center md:min-w-0 rounded-3xl p-4 border border-[#CDCDCD]">
                            <h2 className="p-[4px] py-2  px-4 mb-2 bg-[#1782C5] text-white  rounded-[50px]">Laminar Flow Cabinets</h2>
                            <img src={art3} alt="Card 2" className="w-full h-[369px] md:w-[280px] object-cover mb-2" />
                            <Link to="/product/laminar">
                            <button className=" px-4 py-2 bg-black flex  justify-center items-center hover:bg-[#1782C5] text-white gap-2 rounded-[50px]  border-[#CDCDCD] hover:border-[#1782C5]">View More
                                <img src={vector} alt="vector icon" />
                            </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container mx-auto mt-14 p-2 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 lg:gap-0">
                    {uspData.map((card, index) => (
                        <div
                            key={card.id}
                            className="w-full max-w-[280px] mx-auto flex flex-col justify-between bg-gray-100 rounded-lg shadow-md"
                        >
                            {/* Title and Icon */}
                            <div
                                className={`flex flex-col justify-center items-center p-5 rounded-lg shadow-md ${index === 0 || index === 2 ? 'bg-[#1782C5] text-white' : 'bg-white text-black  '
                                    } min-h-[150px]`}
                            >
                                <div
                                    className={`w-[44px] h-[44px] md:w-[48px] md:h-[48px] mb-5 flex justify-center items-center border rounded-full ${index === 0 || index === 2 ? 'border-white bg-opacity-10' : 'border-black'
                                        }`}
                                >
                                    <img src={card.icon} className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] " alt="usp icon" />
                                </div>
                                <h2 className="md:text-lg text-center font-medium">
                                    {card.title}
                                </h2>
                            </div>

                            {/* Description */}
                            <div
                                className={`w-full p-5 flex justify-center items-center text-center shadow-md rounded-lg flex-grow ${index === 0 || index === 2 ? 'bg-[#1782C5] text-white' : 'bg-white text-black '
                                    } min-h-[150px]`}
                            >
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default About
