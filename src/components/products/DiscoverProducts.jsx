import React from 'react'
// import art1 from '../../assets/images/art1.webp'
// import art2 from '../../assets/images/art2.webp'
// import art3 from '../../assets/images/art3.webp'
import vector from '../../assets/images/Vector.svg'
import Header from '../Home/Header'
import art1 from '../../assets/images/biosafety/bsc.jpg'
import art2 from '../../assets/images/fume/fume.webp'
import art3 from '../../assets/images/laminar/laf.webp'

const cardData = [
    {
        title: "Biosafety Cabinets",
        image: art1,
        description: "Ensure contaminant free, precision tasks in research, healthcare and manufacturing",
    },
    {
        title: "Air Fume Hoods",
        image: art2,
        description: "Safe, efficient and eco-friendly protection from hazardous fumes and pollutants",
    },
    {
        title: "Laminar Flow Cabinets",
        image: art3,
        description: "Create a secure environment to handle biological samples with maximum safety and compliance",
    },
    // {
    //     title: "Biosafety Cabinets",
    //     image: art2,
    //     description: "Ensure contaminant free, precision tasks in research, healthcare and manufacturing",
    // },
];

const DiscoverProducts = () => {
    return (
        <div>
            <Header />
            <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

            <div className='my-10'>
                <div className=' md:flex justify-between px-5 pb-5 md:px-10 md:p-5 my-5 border-blue-600'>
                    <h1 className='text-3xl font-[500px] text-center md:w-[500px] md:text-[40px] '>Discover our products </h1>
                    {/* <p className='md:text-lg text-center py-2 md:py-0 md:w-[553px] md:h-[80px] text-[#7A7A7A]  '>Meet the clients of Airbio who has used our products.</p> */}
                </div>

                {/* <div className="flex justify-center items-center pb-5 ">
                    <h1 className="text-center text-xl md:text-2xl p-3 px-6 border border-[#C0C0C0] rounded-full text-black font-medium">
                        Discover Our Products
                    </h1>
                </div> */}
                <div className="flex overflow-x-scroll md:overflow-x-hidden md:grid md:grid-cols-3 gap-4 md:gap-10 p-4 mx-auto max-w-screen-lg scrollbar scrollbar-thumb-customBlue scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="min-w-[318px] h-[550px] md:w-[318px] md:h-[530px] flex flex-col justify-center items-center md:min-w-0 rounded-3xl p-4 border border-[#CDCDCD]"
                        >
                            <h2 className="text-[16px] p-[4px] px-4 mb-5 bg-[#1782C5] text-white rounded-[50px]">
                                {card.title}
                            </h2>
                            <img
                                src={card.image}
                                alt={`Card ${index + 1}`}
                                className="w-full md:w-[260px] md:h-[310px] mb-2 object-cover"
                            />
                            <p className="mb-4 text-center text-[#1782C5]">{card.description}</p>
                            <button className="px-4 py-1 bg-black hover:bg-[#1782C5] text-white flex justify-center items-center gap-2 rounded-[50px] border-[#CDCDCD] self-end">
                                View More
                                <img src={vector} alt="vector icon" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DiscoverProducts
