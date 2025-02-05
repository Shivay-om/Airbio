import React from 'react'
import img1 from '../../assets/images/iso.png'
import img2 from '../../assets/images/CDSO.png'
import img3 from '../../assets/images/medical.png'
import img4 from '../../assets/images/makeIn.png'
import usp1 from '../../assets/images/usp1.svg'
import usp2 from '../../assets/images/usp2.svg'
import usp3 from '../../assets/images/usp3.svg'
import usp4 from '../../assets/images/usp4.svg'

// const uspData = [
//     {
//         id: 1,
//         title: 'Protection Solutions',
//         icon: usp1, // Example icon, can use actual icon components
//         description: 'Advanced filtration solutions designed to protect users samples, and the environment',
//     },
//     {
//         id: 2,
//         title: 'Contamination Control',
//         icon: usp2,
//         description: 'State-of-the-art technology built to minimize contamination risks across applications',
//     },
//     {
//         id: 3,
//         title: 'Trusted Safety',
//         icon: usp3,
//         description: 'Reliable safety systems trusted across laboratories, healthcare, and research sectors',
//     },
//     {
//         id: 4,
//         title: 'Sustainable Performance',
//         icon: usp4,
//         description: 'A perfect blend of performance, convenience, and environmental responsibility',
//     },
// ];

const Certification = () => {
    return (
        <div>
            <div className=' md:flex justify-between items-center p-5 md:p-10 mt-8 border-blue-600'>
                <h1 className='text-2xl text-center font-[500px] md:w-[373px]  md:text-[40px] md:text-start my-2 '>Certifications</h1>
                <p className='text-[15px] text-center  py-2 md:py-0 md:w-[553px] text-[#7A7A7A] '>Proudly serving leading laboratories, hospitals, and research facilities.</p>
            </div>
            <div className="p-4  border-red-600">
                {/* Image Row */}
                <div className="w-auto  grid grid-cols-2 md:grid-cols-4 gap-4  border-black">
                    {/* Image 1 */}
                    <div className="flex flex-col items-center mb-5 md:mb-0">
                        <img src={img1} alt="Image 1" className="w-auto h-[72px] md:h-[68px] md:w-auto" />
                        {/* <hr className="w-full md:w-1/4 border-t-2 mt-2" /> */}
                    </div>

                    {/* Image 2 */}
                    <div className="flex flex-col items-center">
                        <img src={img2} alt="Image 2" className="w-auto h-[72px] md:w-auto md:h-[68px]" />
                        {/* <hr className="w-full md:w-1/4 border-t-2 mt-2" /> */}
                    </div>

                    {/* Image 3 */}
                    <div className="flex flex-col items-center mb-5 md:mb-0">
                        <img src={img3} alt="Image 3" className="w-auto h-[72px] md:w-auto md:h-[68px]" />
                        {/* <hr className="w-full md:w-1/4 border-t-2 mt-2" /> */}
                    </div>

                    {/* Image 4 */}
                    <div className="flex flex-col items-center justify-center">
                        <img src={img4} alt="Image 4" className="w-auto h-[72px] md:h-[68px] md:w-auto" />
                        {/* <hr className="w-full md:w-1/4 border-t-2 mt-2" /> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Certification
