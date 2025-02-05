import React from 'react'
import rightArrow from '../../assets/images/Chevron_Right.svg'

const KeyFeatures = () => {
     return (
          <div className='p-6 md:w-[90%] mx-auto'>
               <h1 className='text-center md:text-start text-xl md:text-2xl text-[#1782C5] p-1 px-2 py-3 rounded-lg bg-[#F5F5F5] font-medium'>Key Features of Velocity</h1>

               <div className='md:px-2'>
                    <div className='flex items-start gap-3  mt-5'>
                         <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                         <p>Hinged Front Panel with self-support brackets for effortless maintenance and accessibility. </p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                         <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                         <p>Intuitive Touch Interface for precise control and monitoring. </p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                         <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                         <p>Dual Rear Cable Managers to keep your workspace tidy and organized. </p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                         <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                         <p>Stainless Steel Work Surface, offering durability and easy cleaning. </p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                         <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                         <p>Front-Loading HEPA Filter for superior filtration and straightforward replacement. </p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                         <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                         <p>Trace Odor Pre-Filter, enhancing air purity. </p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                         <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                         <p>10° Angled Safety Glass for ergonomic visibility and comfort. </p>
                    </div>
                    <div className='flex items-start gap-3  mt-5'>
                         <img src={rightArrow} alt="Right Arrow" className="w-4 h-4 mt-1" />
                         <p>Glass Side Walls, providing enhanced illumination and visibility during operations. </p>
                    </div>
               </div>
          </div>
     )
}

export default KeyFeatures
