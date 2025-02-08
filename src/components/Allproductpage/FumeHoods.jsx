import React, { useState } from 'react'
import Header from '../Home/Header'
import img1 from '../../assets/images/fume/fumehoods.webp'
import art1 from '../../assets/images/fume/fume.webp'
import art2 from '../../assets/images/art2.webp'
import art3 from '../../assets/images/art3.webp'
import vector from '../../assets/images/Vector.svg'
import post2 from '../../assets/images/Post2.webp'
import post3 from '../../assets/images/Post3.webp'
import icon1 from '../../assets/images/fume/keyfeatures/features1.svg'
import icon2 from '../../assets/images/fume/keyfeatures/features2.svg'
import icon3 from '../../assets/images/fume/keyfeatures/features3.svg'
import icon4 from '../../assets/images/fume/keyfeatures/features4.svg'
import icon5 from '../../assets/images/fume/keyfeatures/features5.svg'
import icon6 from '../../assets/images/fume/keyfeatures/features6.svg'
import icon7 from '../../assets/images/fume/keyfeatures/features7.svg'
import icon8 from '../../assets/images/fume/keyfeatures/features8.svg'
import arrow from '../../assets/images/crossArrow.svg'


const features = [
    {
        icon: icon1,
        title: "Advanced Filtration System",
        description:
            "Options for carbon or HEPA filters to ensure precise air purification.",
    },
    {
        icon: icon2,
        title: "Aerodynamic Sash Design",
        description:
            "Reduces turbulence and enhances user protection.",
    },
    {
        icon: icon3,
        title: "Digital Touch Interface",
        description:
            "Accurate airflow monitoring and intuitive control.",
    },
    {
        icon: icon4,
        title: "Built-in Alarm System",
        description:
            " Alert users to airflow inconsistencies or filter changes.",
    },
    {
        icon: icon5,
        title: "Durable Work Surface",
        description:
            "Constructed from chemical-resistant materials for extended longevity.",
    },
    {
        icon: icon6,
        title: "Customizable Exhaust  Options",
        description:
            "recirculating or ducted installations.",
    },
    {
        icon: icon7,
        title: "Energy Efficient Design",
        description:
            "Provides excellent visibility with minimal energy consumption.",
    },
    {
        icon: icon8,
        title: "Ergonomic Sash Handles",
        description:
            "Designed for ease of use and operator comfort.",
    },
    // {
    //     icon: icon10,
    //     title: "Energy Efficient Design",
    //     description:
    //         "Optimized to consume minimal energy while providing maximum performance.",
    // },
];

const cardsData = [
    {
        title: "Falcon",
        image: art1,
        subtitle: "Air Fume Hood",
        description: "Designs to meet the specific needs of different laboratory and industrial applications",
        buttonText: "Visit Product",
    },
    // {
    //     title: "Velocity",
    //     image: art1,
    //     subtitle: "Class II, Main A2 Biosafety Cabinet",
    //     description: "Perfect for academic and laboratory settings",
    //     buttonText: "Visit Product",
    // },
    // {
    //     title: "Harmony",
    //     image: art3,
    //     subtitle: "Class II, Type B2 Biosafety Cabinet",
    //     description: "Ideal for safely handling minute quantities of volatile chemicals & trace amounts of radionuclides",
    //     buttonText: "Visit Product",
    // },
    // {
    //     title: "Infinity",
    //     image: art1,
    //     subtitle: "Class II, Main B2 Biosafety Cabinet",
    //     description: "Ideal for safely handling minute quantities of volatile chemicals & trace amounts of radionuclides",
    //     buttonText: "Visit Product",
    // },

];

const FumeHoods = () => {
    const [showAll, setShowAll] = useState(false);

    const handleReadMore = () => {
        setShowAll(true);
    };


    return (
        <div>
            <Header />
            <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

            <div className=''>
                <div className='p-5 md:w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center '>
                    <div className='mb-8 md:mb-10 lg:mb-0'>
                        <h1 className='text-3xl md:text-5xl font-medium text-center lg:text-start my-3 md:mb-8 text-[#1782C5] leading-10 md:leading-tight lg:w-[250px]'>AirBio Fume Hoods</h1>
                        <div className='flex flex-wrap items-center justify-center gap-3 md:gap-5'>
                            <p className='border border-black p-1 px-4 text-sm md:text-lg rounded-3xl'>Containment</p>
                            <p className='border border-black p-1 px-4 text-sm md:text-lg rounded-3xl'>Protection</p>
                            <p className='border border-black p-1 px-4 text-sm md:text-lg rounded-3xl'>Performance</p>
                        </div>
                    </div>
                    <div>
                        <img src={img1} alt="" className='md:h-[380px] md:w-auto object-cover' />
                    </div>
                </div>

                {/* all cabinets */}
                <div>
                    <div>
                        <div className="gap-3 p-5 flex flex-col my-5 items-center">
                            <h1 className="p-2 px-4 text-2xl mt-8 border border-[#C0C0C0] rounded-full font-medium inline-block text-center">
                                All Fume Hoods
                            </h1>
                            <p className=" text-sm text-[#1E1E1E] text-center">
                                AirBio Fume Hoods deliver unmatched reliability and protection for laboratory workflows.
                            </p>
                        </div>
                        <div className='pl-5 md:pl-10'>
                            <div className="flex md:justify-center overflow-x-scroll md:overflow-hidden scrollbar scrollbar-thumb-customBlue scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pr-5 gap-4 md:gap-10 py-4 mx-auto">
                                {cardsData.map((card, index) => (
                                    <div key={index}>
                                        {/* Card Content */}
                                        <div className="min-w-[318px] h-auto md:w-[300px] flex flex-col justify-center items-center md:min-w-0 rounded-3xl p-4 border border-[#CDCDCD]">
                                            {/* <h2 className="text-[16px] p-[4px] px-4 border-[#1782C5] text-[#1782C5] border rounded-[50px]">
                                                {card.title}
                                            </h2> */}
                                            <img
                                                src={card.image}
                                                alt={`Card ${index + 1}`}
                                                className="w-auto h-[302px] md:w-[221px] object-cover"
                                            />
                                        </div>

                                        {/* Card Details */}
                                        <div className="py-2 md:w-[300px] flex flex-col justify-center  items-center md:items-start">
                                            <h1 className="font-medium md:text-start text-lg">{card.subtitle}</h1>
                                            <p className="text-[#1782C5] text-center mb-3 md:text-start h-[50px]">{card.description}</p>
                                            <button className="px-4 py-1 bg-black hover:bg-[#1782C5] text-white flex justify-center items-center gap-2 rounded-[50px] mt-5 border-[#CDCDCD]">
                                                {card.buttonText}
                                                <img src={vector} alt="vector icon" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>

                {/* features */}
                <div className="my-10 p-5 md:my-16 md:py-5">
                    <h1 className="text-2xl font-medium text-center my-5 pb-5">
                        Key Features of <span className="text-[#1782C5]">AirBio Fume Hoods</span>
                    </h1>

                    <div className="grid grid-cols-1 md:max-w-[97%] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8 md:wp-5 ">
                        {features
                            .filter((_, index) => showAll || index < 6)
                            .map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex w-full max-w-[350px] md:max-w-[370px] bg-[#F8F8F8] py-5 rounded-xl mx-auto"
                                >
                                    <div className="pl-3 md:pl-4 w-[25%] py-1 px-2">
                                        <img src={feature.icon} alt={feature.title} className="w-14 h-14" />
                                    </div>
                                    <div className="pr-3 w-[75%] ">
                                        <h1 className="font-medium mb-4">{feature.title}</h1>
                                        <p className="text-sm text-[#1E1E1E] text-opacity-75">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                    {/* Show the button only on mobile screens */}
                    {!showAll && (
                        <div className="flex justify-center items-center mt-5">
                            <button className="bg-white flex justify-between items-center gap-3 hover:bg-black hover:text-white w-auto h-[38px] px-2 pl-3 bg-transparent border-[#1782C5] rounded-full border"
                                onClick={handleReadMore}>
                                Read more
                                <div className='bg-[#1782C5]  flex items-center justify-center text-white w-[28px] h-[28px] p-2 rounded-full'>
                                    <img src={arrow} className='' alt="Down arrow icon" />
                                </div>
                            </button>
                        </div>
                    )}

                </div>



                <div className='my-10 p-5'>
                    <div className='bg-[#F8F8F8] lg:w-[80%] mx-auto p-5 px-6 flex flex-col md:flex-row items-center gap-5 rounded-lg'>
                        <div className='md:w-[40%]'>
                            <img src={post3} alt="" className='w-[300px] h-auto  md:h-[300px] md:w-[318px] object-cover rounded-xl' />
                        </div>

                        <div className='md:w-[60%] md:px-5 lg:px-0 lg:mr-8 '>
                            <h1 className='text-xl text-center md:text-start md:text-3xl font-medium mb-5'>About <span className='text-[#1782C5]'>AirBio’s  Fume Hoods</span> </h1>
                            <p className='text-justify text-[14px] text-opacity-75'>AirBio fume hoods are engineered to provide a secure environment for handling hazardous chemicals and materials, ensuring the safety of both the user and the laboratory. By effectively capturing and containing fumes, vapors, and particulates, these hoods minimize exposure to potentially dangerous substances. AirBio fume hoods utilize advanced airflow systems to draw contaminated air through a robust filtration mechanism, channeling clean, filtered air back into the workspace or expelling it safely outside.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='my-10 p-5'>
                    <div className='bg-[#F8F8F8] lg:w-[80%] mx-auto p-5 px-6 flex flex-col md:flex-row items-center gap-5 rounded-lg'>
                        <div className='md:w-[40%]'>
                            <img src={post2} alt="" className='w-[300px] h-auto  md:h-[300px] md:w-auto object-cover rounded-xl' />
                        </div>

                        <div className='md:w-[60%] md:px-5 lg:px-0 lg:mr-8 '>
                            <h1 className='text-xl text-center md:text-start md:text-3xl font-medium mb-5'>Tailored to Meet <span className='text-[#1782C5]'>Fume Hoods</span> Needs</h1>

                            <p className='text-justify text-[14px] text-opacity-75'>
                                A trusted choice for laboratories worldwide, the Velocity fume hood blends state-of-the-art technology with ergonomic design to ensure optimal safety and performance. Available in various configurations, it offers a versatile and user-centric solution for diverse laboratory needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FumeHoods
