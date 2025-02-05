import React from 'react'
// import image from '../../assets/images/Client logo.svg'
import image from '../../assets/images/client_logo.png'
// import image2 from '../../assets/images/Slider-Horizontal1.jpg'
import image1 from '../../assets/images/certification1.png'
import image2 from '../../assets/images/certification2.png'
import image3 from '../../assets/images/certification3.png'
import image4 from '../../assets/images/certification4.png'
import image5 from '../../assets/images/certification5.png'


const Slider = () => {
    return (
        <div className="slider-container relative overflow-hidden w-full my-8">
            <div className=' md:flex justify-between px-5 pb-5 md:px-10 md:p-5  my-5 border-blue-600'>
                <h1 className='text-3xl font-[500px] text-center md:text-start md:w-[500px] md:text-[40px] '>Trusted by great teams </h1>
                <p className='md:text-lg text-center py-2 md:py-0 md:w-[553px] md:h-[80px] text-[#7A7A7A]  '>Chosen by leaders in science.</p>
            </div>

            {/* Image wrapper that will slide */}
            <div className="slider-left flex gap-5 animate-slide mb-3">
                <img src={image} alt="" className='h-16 md:h-20 w-auto object-cover'/>
                <img src={image} alt="" className='h-16 md:h-20 w-auto object-cover'/>
                <img src={image} alt="" className='h-16 md:h-20 w-auto object-cover'/>
            </div>
        </div>
    )
}

export default Slider
