import React from "react";
import post1 from '../../assets/images/linkedin1.jpeg'
import post2 from '../../assets/images/linkedin2.jpeg'
import post3 from '../../assets/images/linkedin3.jpeg'
import post4 from '../../assets/images/linkedin4.jpeg'
import post5 from '../../assets/images/linkedin5.jpeg'
import post6 from '../../assets/images/linkedin6.jpeg'
import Arrow from '../../assets/images/down-light.svg'

const postsData = [
    {
        img: post1,
        link: "https://www.linkedin.com/posts/airbiotechnologies_activity-7229730250597756929-_D73?utm_source=share&utm_medium=member_desktop",
    },
    {
        img: post2,
        link: "https://www.linkedin.com/posts/airbiotechnologies_airbiotechnologies-laminarairflow-biosafetycabinets-activity-7171138941637578754-Kdsn?utm_source=share&utm_medium=member_desktop",
    },
    {
        img: post3,
        link: "https://www.linkedin.com/posts/airbiotechnologies_airbiotechnologies-laminarairflow-biosafetycabinets-activity-7171138941637578754-Kdsn?utm_source=share&utm_medium=member_desktop",
    },
    {
        img: post4,
        link: "https://www.linkedin.com/posts/airbiotechnologies_airbiotechnologies-laminarairflow-biosafetycabinets-activity-7171138941637578754-Kdsn?utm_source=share&utm_medium=member_desktop",
    },
    {
        img: post5,
        link: "https://www.linkedin.com/posts/airbiotechnologies_airbiotechnologies-laminarairflow-biosafetycabinets-activity-7171138941637578754-Kdsn?utm_source=share&utm_medium=member_desktop",
    },
    {
        img: post6,
        link: "https://www.linkedin.com/posts/airbiotechnologies_airbiotechnologies-laminarairflow-biosafetycabinets-activity-7171138941637578754-Kdsn?utm_source=share&utm_medium=member_desktop",
    },
];



const Instagram = () => {
    return (
        <div className="container mx-auto px-4">
            <div className=' md:flex justify-between items-center p-5 md:p-10  mt-8 border-blue-600'>
                <h1 className='text-2xl font-semibold text-center md:w-[373px]  md:text-4xl md:text-left my-2 '>What’s going on at Airbio</h1>
                <p className='text-[15px] hidden md:flex py-2 md:py-0 md:w-[553px] text-[#7A7A7A]'>We know that selecting the right product can feel overwhelming, which is why we’ve thoughtfully curated a comprehensive FAQ section to guide you through the decision-making process with ease and confidence.</p>
            </div>
            {/* Card Wrapper */}
            <div className="grid grid-cols-3 md:w-[80%] mx-auto md:grid-cols-3 gap-6">
                {postsData.map((post, index) => (
                    <div
                        key={index}
                        className="bg-white border w-auto h-[118px] md:h-[321px] border-gray-200 rounded-lg shadow-md overflow-hidden"
                    >
                        <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={post.img}
                                alt={post.title}
                                className="h-[118px] md:w-full md:h-auto w-auto object-cover"
                            />
                        </a>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center p-5 my-5">
                <a
                    href="https://www.linkedin.com/company/airbiotechnologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-[#0A66C2] w-auto h-[48px] text-white px-4 p-2 rounded-full">
                        Visit LinkedIn
                    </button>
                </a>
                {/* <div className='bg-black md:hidden flex items-center justify-center text-white w-[48px] h-[48px] p-1 px-4 rounded-full'>
                    <img src={Arrow} className='w-[40px] h-[80px]' alt="Down arrow icon" />
                </div> */}
            </div>
        </div>
    );
};



export default Instagram;

