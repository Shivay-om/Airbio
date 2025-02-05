import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import product1 from '../../assets/images/desktop_banner_1.webp'
import product2 from '../../assets/images/desktop_banner_2.webp'
import product3 from '../../assets/images/desktop_banner_3.webp'
import mproduct1 from '../../assets/images/mobile_banner_1.png'
import mproduct2 from '../../assets/images/mobile_banner_2.png'
import mproduct3 from '../../assets/images/mobile_banner_3.png'
import Arrow from '../../assets/images/down-light.svg'
import Header from './Header';
import { Link } from 'react-scroll';
// import product2 from '../../assets/images/2nd.jpg'
// import product3 from '../../assets/images/Laminar.jpg'

const slides = [
    {
        image: product1,
        mImage: mproduct1,   //for mobile
        text: 'Revolutionizing Safety Solutions Across Healthcare and Research Industry',
        highlights: ["Revolutionizing", "Across", "and", "Industry"],
        italics: ["Safety", "Solutions"]
    },
    {
        image: product2,
        mImage: mproduct2,
        text: 'AirBio : Your Trusted Partner in Safety Solutions',
        highlights: ["Safety", "Solutions",],
        italics: ["AirBio", "Trusted",]
    },
    {
        image: product3,
        mImage: mproduct3,
        text: 'Minimize Risk, Maximize Safety with AirBio Technology',
        highlights: ["Minimize", "Safety", "AirBio",],
        italics: ["Maximize", "Risk,"]
    },
];

const Crousal = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div>
            <div className="relative hidden md:block w-full h-screen overflow-hidden">
                {/* Header */}
                <div className="absolute top-0 left-0 w-full z-10 bg-opacity-50">
                    <Header />
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                    className="w-full h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="relative">
                            {/* Image */}
                            <div className="w-full h-full">
                                <img
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover object-bottom"
                                />
                            </div>

                            {/* Text Overlay */}
                            <div className="absolute inset-0 w-[50%] flex md:flex-col justify-center gap-3 items-start">
                                <h1 className="text-5xl mb-3 ml-16">
                                    {slide.text.split(" ").map((word, idx) => (
                                        <span
                                            key={idx}
                                            className={`
                                    ${slide.highlights.includes(word) ? "text-[#1782C5]" : ""}
                                    ${slide.italics && slide.italics.includes(word) ? "italic font-[500px]" : ""}
                                `}
                                        >
                                            {word}{" "}
                                        </span>
                                    ))}
                                </h1>
                                <div className="hidden md:flex items-center  self-start ml-16">
                                    <Link
                                        to="product-section"
                                        smooth={true}
                                        duration={500}
                                    >
                                        <button className="bg-black w-auto h-[48px] text-white px-4 p-2 rounded-full">
                                            Explore More
                                        </button>
                                    </Link>
                                    <div className="bg-black flex items-center justify-center text-white w-[48px] h-[48px] p-1  rounded-full">
                                        <img src={Arrow} className="w-[24px] h-[24px]" alt="Down arrow icon" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>




            {/* for mobile */}
            <div className="relative md:hidden w-full h-auto border">
                {/* Header */}
                <div className="absolute top-0 left-0 w-full z-10 bg-opacity-50">
                    <Header />
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                    className="h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="relative">
                            {/* Image */}
                            <div className="">
                                <img
                                    src={slide.mImage}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover"  // Changed to object-cover for better image cropping
                                />
                            </div>

                            {/* Text Overlay for mobile */}
                            <div className="absolute h-[57%] inset-0 flex flex-col justify-center gap-5 mt-5  p-4 border-black">
                                <h1 className="text-2xl text-center w-60 self-center">
                                    {slide.text.split(" ").map((word, idx) => (
                                        <span
                                            key={idx}
                                            className={`
                                                ${slide.highlights.includes(word) ? "text-[#1782C5] " : ""}
                                                ${slide.italics && slide.italics.includes(word) ? "italic font-bold" : ""}
                                              `}
                                        >
                                            {word}{" "}
                                        </span>
                                    ))}
                                </h1>

                                {/* Buttons for mobile */}
                                <div className="flex justify-center items-center">
                                    <Link
                                        to="product-section"
                                        smooth={true}
                                        duration={500}
                                    >
                                        <button className="bg-black  w-auto h-[38px] text-white px-4 p-2 rounded-full">
                                            Explore More
                                        </button>
                                    </Link>
                                    <div className="bg-black flex items-center justify-center text-white w-[38px] h-[38px] p-1 rounded-full">
                                        <img src={Arrow} className="w-[20px] h-[20px]" alt="Down arrow icon" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </div>
    )
}

export default Crousal
