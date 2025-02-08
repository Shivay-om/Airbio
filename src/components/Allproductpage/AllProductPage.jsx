import React, { useState } from 'react'
import Header from '../Home/Header'
import img1 from '../../assets/images/contact1.png'
import art1 from '../../assets/images/biosafety/bsc class_B2 (Falcon)/BSC CLASS _ B2 (Falcon)-FRONT.webp'
import art2 from '../../assets/images/biosafety/bsc class 2 B2 (Agies)/BSC CLASS II B2 (Agies)-FRONT.webp'
import art3 from '../../assets/images/biosafety/bsc class 2 A2/BSC CLASS II A2-FRONT.webp'
import art4 from '../../assets/images/biosafety/bsc class 2 A2 (Agies)/BSC CLASS II A2 (Agies)-FRONT.webp'
import art5 from '../../assets/images/biosafety/Main bsc class 2 A2/MAIN BSC CLASS II A2-FRONT.webp'
import vector from '../../assets/images/Vector.svg'
import post2 from '../../assets/images/Post2.webp'
import post3 from '../../assets/images/Post3.webp'
import icon1 from '../../assets/images/filtration.svg'
import icon2 from '../../assets/images/biosafety/keyfeatures/features2.svg'
import icon3 from '../../assets/images/biosafety/keyfeatures/features3.svg'
import icon4 from '../../assets/images/biosafety/keyfeatures/features4.svg'
import icon5 from '../../assets/images/biosafety/keyfeatures/features5.svg'
import icon6 from '../../assets/images/biosafety/keyfeatures/features6.svg'
import icon7 from '../../assets/images/biosafety/keyfeatures/features7.svg'
import icon8 from '../../assets/images/biosafety/keyfeatures/features8.svg'
import icon9 from '../../assets/images/biosafety/keyfeatures/features9.svg'
import icon10 from '../../assets/images/biosafety/keyfeatures/features10.svg'
import arrow from '../../assets/images/crossArrow.svg'


const features = [
    {
        icon: icon1,
        title: "HEPEX™ Zero Leak Airflow System",
        description:
            "Ensures uniform air distribution, prevents leaks with negative pressure chambers, and minimizes vibration transfer.",
    },
    {
        icon: icon2,
        title: "Advanced Filtration Technology",
        description:
            "Utilizes high-efficiency particulate air (HEPA) filters to ensure 99.99% particle capture.",
    },
    {
        icon: icon3,
        title: "Energy Efficient Design",
        description:
            "Optimized to consume minimal energy while providing maximum performance.",
    },
    {
        icon: icon4,
        title: "HEPEX™ Zero Leak Airflow System",
        description:
            "Ensures uniform air distribution, prevents leaks with negative pressure chambers, and minimizes vibration transfer.",
    },
    {
        icon: icon5,
        title: "Advanced Filtration Technology",
        description:
            "Utilizes high-efficiency particulate air (HEPA) filters to ensure 99.99% particle capture.",
    },
    {
        icon: icon6,
        title: "Energy Efficient Design",
        description:
            "Optimized to consume minimal energy while providing maximum performance.",
    },
    {
        icon: icon7,
        title: "Energy Efficient Design",
        description:
            "Optimized to consume minimal energy while providing maximum performance.",
    },
    {
        icon: icon8,
        title: "Advanced Filtration Technology",
        description:
            "Utilizes high-efficiency particulate air (HEPA) filters to ensure 99.99% particle capture.",
    },
    {
        icon: icon9,
        title: "Energy Efficient Design",
        description:
            "Optimized to consume minimal energy while providing maximum performance.",
    },
    {
        icon: icon10,
        title: "Energy Efficient Design",
        description:
            "Optimized to consume minimal energy while providing maximum performance.",
    },
];

const cardsData = [
    {
        title: "Falcon",
        image: art1,
        subtitle: "Bsc Class II, B2 (Falcon)",
        description: "A benchtop model with a 100% exhaust system for volatile chemicals and radionuclides.",
        buttonText: "Visit Product",
        showTitle: true,
    },
    {
        title: "Agies",
        image: art2,
        subtitle: "Bsc Class II, B2 (Agies)",
        description: "It ensures reliable containment with a dynamic air barrier and robust engineering control.",
        buttonText: "Visit Product",
        showTitle: true,
    },
    {
        title: "Harmony",
        image: art3,
        subtitle: "Bsc Class II, A2",
        description: "A compact, energy-efficient tabletop model ideal for labs and academia.",
        buttonText: "Visit Product",
    },
    {
        title: "Agies",
        image: art4,
        subtitle: "Bsc Class II, A2 (Agies)",
        description: "Equipped with a high-efficiency DC ECM motor, it reduces energy use and extends filter life.",
        buttonText: "Visit Product",
        showTitle: true,
    },
    {
        image: art5,
        subtitle: "Main BSC Class II A2",
        description: "Its durable stainless steel design simplifies cleaning and offers flexible airflow options for safety.",
        buttonText: "Visit Product",
    },

];

const AllProductPage = () => {
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
                    <div className=''>
                        <h1 className='text-3xl md:text-5xl font-medium text-center lg:text-start my-3 md:mb-8 text-[#1782C5] leading-10 md:leading-tight lg:w-[250px]'>Airbio Biosafety Cabinets</h1>
                        <div className='flex items-center justify-center gap-3 md:gap-5'>
                            <p className='border border-black p-1 px-4 text-sm md:text-lg rounded-3xl'>Precision</p>
                            <p className='border border-black p-1 px-4 text-sm md:text-lg rounded-3xl'>Sterility</p>
                            <p className='border border-black p-1 px-4 text-sm md:text-lg rounded-3xl'>Standard</p>
                        </div>
                    </div>
                    <div>
                        <img src={img1} alt="" className='md:h-[404px] md:w-auto object-cover' />
                    </div>
                </div>

                {/* all cabinets */}
                <div>
                    <div>
                        <div className="gap-3 p-5 flex flex-col my-5 items-center">
                            <h1 className="p-2 px-4 text-2xl mt-8 border border-[#C0C0C0] rounded-full font-medium inline-block text-center">
                                All Biosafety Cabinets
                            </h1>
                            <p className=" text-sm text-[#1E1E1E] text-center">
                                AirBio Biosafety Cabinets deliver unmatched reliability and protection for laboratory workflows.
                            </p>
                        </div>
                        <div className='pl-5 md:pl-10'>
                            <div className="flex overflow-x-scroll scrollbar scrollbar-thumb-customBlue scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pr-5 gap-4 md:gap-10 py-4 mx-auto">
                                {cardsData.map((card, index) => (
                                    <div key={index}>
                                        {/* Card Content */}
                                        <div className="min-w-[318px] h-auto md:w-[300px] md:h-[370px] flex flex-col justify-center items-center md:min-w-0 rounded-3xl p-4 border border-[#CDCDCD]">
                                            {card.showTitle && (
                                                <h2 className="text-[16px] p-[4px] px-4 border-[#1782C5] text-[#1782C5] border rounded-[50px]">
                                                    {card.title}
                                                </h2>
                                            )}
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
                        Key Features of <span className="text-[#1782C5]">AirBio Biosafety Cabinets</span>
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
                            <h1 className='text-xl text-center md:text-start md:text-3xl font-medium mb-5'>About <span className='text-[#1782C5]'>AirBio Biosafety Cabinets</span> </h1>
                            <p className='text-justify text-[14px] text-opacity-75'><span className='font-medium'>AirBio Biosafety Cabinets (BSCs)</span> are precision-engineered laboratory workspaces designed for the safe handling of potentially hazardous or contaminated materials. By combining unidirectional airflow from the top with air inflow from the surrounding room, these cabinets create a dynamic air barrier that protects both users and their materials from contamination. <br />They are available in two variants - <span className='font-medium'>Class II A2</span >and <span className='font-medium'>Class II B2</span>.</p>
                        </div>
                    </div>
                </div>

                <div className='my-10 p-5'>
                    <div className='bg-[#F8F8F8] lg:w-[80%] mx-auto p-5 px-6 flex flex-col md:flex-row items-center gap-5 rounded-lg'>
                        <div className='md:w-[40%]'>
                            <img src={post2} alt="" className='w-[300px] h-auto  md:h-[300px] md:w-auto object-cover rounded-xl' />
                        </div>

                        <div className='md:w-[60%] md:px-5 lg:px-0 lg:mr-8 '>
                            <h1 className='text-xl text-center md:text-start md:text-3xl font-medium mb-5'>Tailored to Meet <span className='text-[#1782C5]'>Biosafety</span> Needs</h1>

                            <p className='text-justify text-[14px] text-opacity-75'>Biosafety Cabinets come in various classes, each catering to specific bio-containment requirements. Within these classes, the cabinets differ based on how air is recirculated or exhausted. Regardless of the type, all AirBio BSCs leverage <span className='font-medium'>High Efficiency Particulate Air (HEPA)</span> or <span className='font-medium'>Ultra Low Particulate Air (ULPA)</span> filters to maintain a sterile workspace.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProductPage
