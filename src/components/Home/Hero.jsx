import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import product1 from '../../assets/images/frame2.png'
import product2 from '../../assets/images/frame2.png'
import product3 from '../../assets/images/frame3.png'
import product4 from '../../assets/images/frame4.png'


const Hero = () => {
    // Define an array of image and text data
    const slides = [
        {
            image: product1,
            text: 'Revolutionizing Safety Solutions Across Healthcare and Research Industry'
        },
        {
            image: product2,
            text: 'Text for Image 2'
        },
        {
            image: product3,
            text: 'Text for Image 3'
        },
        {
            image: product4,
            text: 'Text for Image 3'
        },
    ];

    // State to keep track of the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="carousel-container md:w-[90%] mx-auto flex flex-col justify-center items-center md:flex-row md:justify-between w-full overflow-hidden border border-red-400">
            {/* Text Section */}
            <div className="text-section w-1/2 p-4 flex items-center justify-center border md:ml-16">
                <p className="text-lg text-center font-bold">{slides[currentSlide].text}</p>
            </div>

            {/* Image Carousel */}
            <div className="image-carousel w-[243px] border  border-blue-500">
                <Swiper
                    modules={[Autoplay, Pagination]} // Use modules here
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    // pagination={{ clickable: true }}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-auto"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

// .carousel-container {
//     width: 100%; /* Take full width of the parent container */
//     max-width: 1200px; /* Or any desired max width */
//     overflow: hidden;  /* Hide any overflow to prevent extra width */
//     box-sizing: border-box; /* Include padding and border in the width */
//   }

export default Hero;
