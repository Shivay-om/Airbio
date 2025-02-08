import React, { useState } from 'react';
import productData from './ProductsData';
import SVG from '../../assets/images/downloadSVG.svg'
import logo from '../../assets/images/teamSvg.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { Link } from 'react-router-dom';

const Products = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-5 relative border-red-500">
      {/* Centered Title */}


      <div className=' md:flex justify-between p-5 md:p-10 mt-8 border-blue-600 '>
        <h1 className='text-3xl font-[500px] text-center md:text-start md:w-[373px] md:h-[96px] md:text-[40px] leading-10 my-2 '>State-of-the-art manufacturing</h1>
        <p className='md:text-lg text-center md:text-start py-2 md:py-0 md:w-[553px] md:h-[80px] text-[#7A7A7A] '>From engineering and manufacturing to installation and technical support, the entire process is managed by the integrated team to ensure the best customer experience.</p>
      </div>

      <div className="swiper-button-prev custom-prev absolute left-0 top-[65%] translate-y-[-50%] z-10 cursor-pointer ">
        <span className="material-icons"><GoChevronLeft className="text-[#1782C5] w-auto h-11 md:w-auto md:h-16" /></span>
      </div>
      <div className="swiper-button-next custom-next absolute right-0 top-[65%] translate-y-[-50%] z-10 cursor-pointer ">
        <span className="material-icons"><GoChevronRight className="text-[#1782C5] w-auto h-11 md:w-auto md:h-16 " /></span>
      </div>

      {/* Swiper Container */}
      <Swiper
        spaceBetween={20} // Adjust spacing between slides
        slidesPerView={1} // Show part of the next/previous slides
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{
          nextEl: '.custom-next', // Link to your custom next button
          prevEl: '.custom-prev', // Link to your custom prev button
        }}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay, Pagination]}
        className="pb-16"
      >
        {productData.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#F7F7F7] relative md:w-[80%] mx-auto md:flex justify-between items-center px-4 pt-2 rounded-lg pb-5 md:pb-0 border-[#1782C5]">
              <img
                src={logo}
                alt="logo"
                className="hidden md:flex absolute w-[48px] h-[34px] top-4 right-5"
              />
              <div className="order-2 md:w-1/2 md:p-8 md:py-10 ">
                {/* 1st Div: Name & Title */}
                <div className="mb-4 text-center md:text-start">
                  <h2 className="text-2xl m-2 py-2 md:m-0 md:text-4xl font-[500px]">{product.name}</h2>
                  <h3 className="text-md text-gray-600 ">
                    {product.title.split(' ').map((word, index) => (
                      <span
                        key={index}
                        className={`${product.italics && product.italics.includes(word) ? "" : ""}`}
                      >
                        {word}{' '}
                      </span>
                    ))}
                  </h3>
                </div>
                <div className="hidden  md:flex flex-row items-center gap-6 mb-3">
                  <img
                    src={product.img2}
                    alt="Product Image 2"
                    className="w-[69px] h-[69px] p-1 bg-white object-cover rounded-lg border"
                  />
                  <img
                    src={product.img3}
                    alt="Product Image 2"
                    className="w-[69px] h-[69px] p-1 bg-white object-cover rounded-lg border"
                  />
                  <img
                    src={product.img4}
                    alt="Product Image 2"
                    className="w-[69px] h-[69px] p-1 bg-white object-cover rounded-lg border"
                  />
                </div>

                {/* 2nd Div: Description */}
                <div className="mb-4">
                  <p className={`text-center mb-2 md:text-sm md:text-start ${!isExpanded && "line-clamp-2"}`}>
                    {product.description1}
                  </p>
                  <p className={`text-center md:text-sm md:text-start ${!isExpanded && "line-clamp-2"}`}>
                    {product.description2}
                  </p>
                  <button
                    onClick={toggleReadMore}
                    className="text-[#1782C5] text-sm  mt-2 block mx-auto md:mx-0"
                  >
                    {isExpanded ? "Read Less" : "Read More..."}
                  </button>
                </div>

                {/* 3rd Div: Buttons */}
                <div className="mb-4 flex flex-col justify-center items-center gap-3 md:flex-row md:justify-start space-x-4">
                  <Link to={product.route}>
                    <button className="bg-[#1782C5] text-white px-4 py-2 rounded-full hover:bg-black">
                      Explore More
                    </button>
                  </Link>
                  <a href="https://drive.google.com/file/d/1OuRF-sKbGLIDmblAKsgwa7sBvxB1DoyX/view" target='_blank'>
                  <button className="px-4 py-2 bg-black text-white flex items-center gap-2 rounded-full border hover:border-[#1782C5] border-[#7A7A7A] hover:bg-[#1782C5] hover:text-white">
                    Download Brochure
                    <img src={SVG} alt="" className='' />
                  </button>
                  </a>
                </div>
              </div>

              {/* 4th Div: Images */}
              <div className="flex flex-col justify-center items-center order-1  border-black mb-5">
                <div className="md:w-full h-full flex justify-center items-center">
                  <img
                    src={product.img1}
                    alt="Product Image 1"
                    className="w-[220px] h-[250px] md:w-[400px] md:h-[420px] p-2 md:p-3 object-cover rounded-lg  border-green-600"
                  />
                </div>
                <div className=" h-auto md:hidden pl-2 flex justify-between items-center gap-5 mb-5">
                  <img
                    src={product.img2}
                    alt="Product Image 2"
                    className="w-[69px] h-[69px] object-cover rounded-lg border"
                  />
                  <img
                    src={product.img3}
                    alt="Product Image 2"
                    className="w-[69px] h-[69px]  object-cover rounded-lg border"
                  />
                  <img
                    src={product.img2}
                    alt="Product Image 2"
                    className="w-[69px] h-[69px] object-cover rounded-lg border"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
