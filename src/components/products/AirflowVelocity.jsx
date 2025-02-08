import React, { useState } from 'react'
import Header from '../Home/Header'
import whatsapp from '../../assets/images/Whatsapp1.svg'
import rightArrow from '../../assets/images/Chevron_Right.svg'
import Assistants from '../Home/Assistants'
import product1 from '../../assets/images/laminar/Vertical Laminar Flow (Velocity)/Vertical Laminar Flow (Velocity)-FRONT.webp'
import product2 from '../../assets/images/laminar/Vertical Laminar Flow (Velocity)/Vertical Laminar Flow (Velocity)-CROSS.webp'
import product3 from '../../assets/images/laminar/Vertical Laminar Flow (Velocity)/Vertical Laminar Flow (Velocity)-SIDE.webp'
import VelocityQR from './VelocityQR'



const VelocityData = [
    {
        name: 'Laminar Cabinets',
        title: 'Verticle Laminar Airflow',
        highlighted: "(Velocity)",
        title1: 'Precision',
        title2: 'Sterlity',
        title3: 'Efficiency',
        description1: 'Laminar air flow cabinets, also known as laminar clean benches, flow hoods, or air flow benches, create a controlled sterile environment to safeguard samples and products from contaminants like microorganisms and airborne particles. These cabinets operate by drawing air through a high-efficiency HEPA filter and channeling it in a consistent, streamlined airflow towards the user – the hallmark of "laminar flow."',
        description2: 'Essential for applications requiring stringent cleanliness, these cabinets protect sensitive samples by directing airflow outward to prevent contamination. For handling hazardous chemicals or infectious materials, a biological safety cabinet is recommended to ensure both sample integrity and user safety.',
        img1: product1,
        img2: product2,
        img3: product3,
        img4: product2,
    },
]


const AirflowVelocity = () => {
    const [selectedImage, setSelectedImage] = useState(product1);

    return (
        <div>
            <Header />
            <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />
            <div className="p-6">
                {VelocityData.map((product, index) => (
                    <div
                        key={index}
                        className="relative md:w-[90%] mx-auto md:flex justify-between items-center md:gap-8 pt-2 rounded-lg  border-[#1782C5]"
                    >
                        <div className="mb-4 text-center md:hidden">
                            <h2 className="m-2 mb-3 py-2 px-4 md:m-0 border border-black inline-block font-medium rounded-full">
                                {product.name}
                            </h2>
                            <h3 className="text-2xl md:text-3xl text-[#1E1E1E]">
                                {product.title.split(product.highlighted)[0]}
                                <span className="text-[#1782C5]">{product.highlighted}</span>
                                {product.title.split(product.highlighted)[1]}
                            </h3>
                        </div>
                        {/* 1st Div: Images */}
                        <div className="flex flex-col  md:flex-row justify-center items-center  border-[#1782C5] mb-5">
                            {/* Main Image Display */}
                            <div className="w-[80%] md:w-full flex justify-center items-center">
                                <img
                                    src={selectedImage}
                                    alt="Selected Product Image"
                                    className="w-[229px] h-[335px] p-4 px-4  lg:w-[423px] lg:h-[458px] object-cover rounded-lg mb-5 md:m-0 border border-[#1782C5]"
                                />
                            </div>

                            {/* Thumbnail Images */}
                            <div className="h-auto pl-2 mb-5 flex md:flex-col justify-between items-center gap-5">
                                <img
                                    src={product.img1}
                                    alt="Product Image 1"
                                    onClick={() => setSelectedImage(product.img1)}
                                    className={`w-[75px] h-[75px] md:w-[107px] md:h-[107px] bg-[#F7F7F7] object-cover p-1 rounded-lg cursor-pointer  ${selectedImage === product.img1 ? "border-[#1782C5] border" : ""
                                        }`}
                                />
                                <img
                                    src={product.img2}
                                    alt="Product Image 2"
                                    onClick={() => setSelectedImage(product.img2)}
                                    className={`w-[75px] h-[75px] md:w-[107px] md:h-[107px] bg-[#F7F7F7] object-cover p-1 rounded-lg cursor-pointer ${selectedImage === product.img2 ? "border-[#1782C5] border" : ""
                                        }`}
                                />
                                <img
                                    src={product.img3}
                                    alt="Product Image 3"
                                    onClick={() => setSelectedImage(product.img3)}
                                    className={`w-[75px] h-[75px] md:w-[107px] md:h-[107px] bg-[#F7F7F7] object-cover p-1 rounded-lg cursor-pointer ${selectedImage === product.img3 ? "border-[#1782C5] border" : ""
                                        }`}
                                />
                            </div>
                        </div>
                        <div className="md:w-[60%] ">
                            {/* 1st Div: Name & Title */}
                            <div className="hidden md:block mb-4 text-center md:text-start">
                                <h2 className=" m-2 py-2 px-4 md:m-0 border border-black inline-block rounded-full font-medium">
                                    {product.name}
                                </h2>
                                <h3 className="md:text-3xl text-[#1E1E1E] pt-4">
                                    {product.title.split(product.highlighted)[0]}
                                    <span className="text-[#1782C5]">{product.highlighted}</span>
                                    {product.title.split(product.highlighted)[1]}
                                </h3>
                            </div>
                            <div className="mb-4 flex justify-between items-center md:justify-start gap-3 text-center md:text-start">
                                <h3 className="text-md text-[#1782C5] p-1 px-4 border border-[#1782C5] rounded-full">{product.title1}</h3>
                                <h3 className="text-md text-[#1782C5] p-1 px-4 border border-[#1782C5] rounded-full">{product.title2}</h3>
                                <h3 className="text-md text-[#1782C5] p-1 px-4 border border-[#1782C5] rounded-full">{product.title3}</h3>
                            </div>


                            {/* 2nd Div: Description */}
                            <div className="mb-4 text-justify ">
                                <p className="mb-2 md:text-sm ">
                                    {product.description1}
                                </p>
                                <p className="md:text-sm">
                                    {product.description2}
                                </p>
                            </div>

                            {/* 3rd Div: Buttons */}
                            <div className="mb-4 flex flex-col md:flex-row justify-center md:justify-start md:items-start md:flex-wrap items-center gap-5 mt-8 ">
                                <div className='flex justify-between gap-2'>
                                    <a href="https://api.whatsapp.com/send?phone=9899829299" target="_blank" rel="noopener noreferrer">
                                        <button className="bg-[#1E1E1E] text-white w-[193px] px-4 py-2 rounded-full hover:bg-[#1782C5]">
                                            Get a Quote
                                        </button>
                                    </a>
                                    {/* <button className="px-4 py-2 bg-[#1E1E1E] text-white flex items-center gap-2 rounded-full border border-[#7A7A7A]">
                                        Request a Demo
                                    </button> */}
                                </div>
                                <div className='px-4 py-2 flex justify-between items-center gap-4 rounded-full border border-[#7A7A7A] hover:text-[#1782C5] hover:border-[#1782C5]'>
                                    <a href="https://api.whatsapp.com/send?phone=9899829299" target="_blank" rel="noopener noreferrer">
                                        <button className='flex justify-center items-center gap-2'>
                                            <img src={whatsapp} alt="" />Speak With Expert
                                        </button>
                                    </a>
                                    {/* <img src={arrow} alt="" className='bg-[#55AE36] p-1 rounded-full' /> */}
                                </div>
                            </div>

                        </div>


                    </div>
                ))}
            </div>

            <div className='p-6 md:w-[90%] mx-auto'>
                <h1 className='text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium'>Meet AirBio’s Velocity Laminar Air Flow Cabinet</h1>
                <p className='my-5 md:px-2 text-justify'>A trusted solution in laboratories worldwide, the Velocity vertical laminar air flow cabinet combines advanced technology with user-friendly features to elevate safety and efficiency. Available in multiple sizes, it boasts a modern touch-screen interface for seamless operation.</p>
            </div>

            <div className='p-6 md:w-[90%] mx-auto'>
                <h1 className='text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium'>Key Features of Velocity</h1>
                <div className='md:px-2'>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>Hinged Front Panel with self-support brackets for effortless maintenance and accessibility.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>Intuitive Touch Interface for precise control and monitoring.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>Dual Rear Cable Managers to keep your workspace tidy and organized.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>Stainless Steel Work Surface, offering durability and easy cleaning.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>Front-Loading HEPA Filter for superior filtration and straightforward replacement.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>Trace Odor Pre-Filter, enhancing air purity.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>10° Angled Safety Glass for ergonomic visibility and comfort.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>Glass Side Walls, providing enhanced illumination and visibility during operations.</p>
                    </div>
                </div>
            </div>

            <VelocityQR/>

            <div className='py-10'>
                <Assistants />
            </div>
        </div>
    )
}

export default AirflowVelocity
