import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import TeamData from './TeamData';
import { GoChevronRight, GoChevronLeft } from "react-icons/go";

const Team = () => {


  return (
    <>
      <div className='text-center md:text-start md:flex justify-between items-center p-5 md:p-10  mt-8 border-blue-600'>
        <h1 className='text-3xl font-[500px] md:w-[373px]  md:text-[40px] md:text-left my-2 '>Our
          Expert Team</h1>
        <p className='md:text-[18px] py-2 md:py-0 md:w-[553px] text-[#7A7A7A] '>Meet the passionate team behind Airbio—experts in biosafety, engineering, and innovation—driven by a commitment to delivering cutting-edge air and safety solutions tailored to your needs.</p>
      </div>


      <div className="relative py-8 px-4 md:px-0 md:pl-10 mb-10">
        {/* Navigation Buttons */}
        <div className="swiper-button-prev custom-prev absolute left-9 md:left-[38%] bottom-[15px] md:bottom-0 translate-y-[-50%] z-10 cursor-pointer ">
          <span className="material-icons"><GoChevronLeft className="text-[#1782C5] w-auto h-9 md:w-auto md:h-12"/></span>
        </div>
        <div className="swiper-button-next custom-next absolute right-9 md:right-[35%] bottom-[15px] md:bottom-0 translate-y-[-50%] z-10 cursor-pointer ">
          <span className="material-icons"><GoChevronRight className="text-[#1782C5] w-auto h-9 md:w-auto md:h-12 "/></span>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4.5 },
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={{
            nextEl: '.custom-next', // Link to your custom next button
            prevEl: '.custom-prev', // Link to your custom prev button
          }}
          pagination={{ clickable: true }}
          className="md:w-[100%] overflow-x-auto md:h-auto mx-auto"
        >
          {TeamData.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="bg-white md:w-[250px] relative rounded-lg mb-28 md:mb-36 p-2 md:py-4 flex flex-col justify-center items-center text-center md:mx-auto  border border-[#CDCDCD]">
                <img
                  className="self-start md:w-[32px] md:h-[20px]"
                  src={member.icon}
                  alt=""
                />
                <img
                  src={member.imgSrc}
                  alt={`${member.name} Icon`}
                  className="w-auto h-[150px] md:h-[211px] md:w-auto"
                />

                {/* Name and Role */}
                <div className="absolute p-1 top-full translate-y-[-50%] min-w-[90%] md:mb-5 bg-white flex flex-col items-center rounded-lg border border-[#CDCDCD]">
                  <div className="px-2 md:mb-1">{member.name}</div>
                  <div className="text-gray-500 text-sm md:text-base">
                    {member.role}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>

  );
};

export default Team;
