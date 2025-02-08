import React, { useState } from 'react'
import Header from '../Home/Header'
import whatsapp from '../../assets/images/Whatsapp1.svg'
import rightArrow from '../../assets/images/Chevron_Right.svg'
import Assistants from '../Home/Assistants'
import product1 from '../../assets/images/fume/fume.webp'
import product2 from '../../assets/images/fume/fume.webp'
import product3 from '../../assets/images/fume/fume.webp'



const AirFumeData = [
    {
        name: 'Fume Hood Cabinets',
        title: 'Air Fume Hood',
        //   highlighted: "(Agies)",
        title1: 'Containment',
        title2: 'Protection',
        title3: 'Performance',
        description1: 'AirBio Fume Hoods provide tailored solutions to meet the safety and operational requirements of diverse laboratory environments. Whether handling volatile chemicals, ensuring air quality, or maintaining safety for specialized substances, there’s an ideal fume hood for every application.',
        description2: 'Ideal for laboratories requiring superior containment, AirBio fume hoods adhere to stringent safety standards, making them indispensable for chemical handling, pharmaceutical research, and academic applications.',
        img1: product1,
        img2: product2,
        img3: product3,
        img4: product2,
    },
]


const AirFumeHood = () => {
    const [selectedImage, setSelectedImage] = useState(product1);

    return (
        <div>
            <Header />
            <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />
            <div className="p-6">
                {AirFumeData.map((product, index) => (
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
                <h1 className='text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium'>Meet AirBio’s  Fume Hood</h1>
                <p className='my-5 md:px-2 text-justify'>A trusted choice for laboratories worldwide, the Velocity fume hood blends state-of-the-art technology with ergonomic design to ensure optimal safety and performance. Available in various configurations, it offers a versatile and user-centric solution for diverse laboratory needs.
                </p>
            </div>

            <div className='p-6 md:w-[90%] mx-auto'>
                <h1 className='text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium'>Key Features of Fume Hood</h1>

                <div className='md:px-2'>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>Advanced Filtration System with options for carbon or HEPA filters to ensure precise air purification.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>Aerodynamic Sash Design that reduces turbulence and enhances user protection.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>Digital Touch Interface for accurate airflow monitoring and intuitive control.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>Built-in Alarm System to alert users to airflow inconsistencies or filter changes.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>Durable Work Surface constructed from chemical-resistant materials for extended longevity.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>Customizable Exhaust Options for recirculating or ducted installations.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>Energy-Efficient LED Lighting that provides excellent visibility with minimal energy consumption.</p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                        <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                        <p>Ergonomic Sash Handles designed for ease of use and operator comfort.</p>
                    </div>
                </div>
            </div>
            
            <div className='py-10'>
                <Assistants />
            </div>
        </div>
    )
}

export default AirFumeHood
