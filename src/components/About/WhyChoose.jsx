import React, { useState } from 'react'
import icon1 from '../../assets/images/data-management.svg'
import icon2 from '../../assets/images/touch.svg'
import icon3 from '../../assets/images/technology.svg'
import icon4 from '../../assets/images/ergonomic.svg'
import icon5 from '../../assets/images/data-flow.svg'
import arrow from '../../assets/images/crossArrow.svg'


const features = [
    {
        icon: icon1,
        title: "Real-Time Data Management",
        description:
            "Seamless integration with Lab Information Management Systems (LIMS) ensures compliance and data accuracy.",
    },
    {
        icon: icon2,
        title: "Advanced Airflow Technology",
        description:
            "Stabilized airflow with low-energy sensors for maximum reliability.",
    },
    {
        icon: icon3,
        title: "Energy Efficiency",
        description:
            "Save up to 70% on energy costs with our DEC Star Variable Speed ECM blowers.",
    },
    {
        icon: icon4,
        title: "Ergonomic Designs",
        description:
            "Engineered for comfort and ease, from sash designs to stainless steel work surfaces.",
    },
    {
        icon: icon5,
        title: "Robust Safety Features",
        description:
            "Double-wall construction and angular grill designs enhance containment and protection.",
    },

];

const WhyChoose = () => {
    const [showAll, setShowAll] = useState(false);

    const handleReadMore = () => {
        setShowAll(true);
    };

    return (
        <div>
            <div className="my-10 md:my-16 md:p-5">
                <div className='my-5 pb-5 md:w-[85%] mx-auto'>
                    <h1 className="text-2xl md:text-3xl font-medium text-center pb-5">
                        Why Choose <span className="text-[#1782C5]">AirBio?</span>
                    </h1>
                    <p className='text-justify text-[#7A7A7A]'>When you choose AirBio, you choose more than a product; you choose a legacy of excellence. Our solutions are built to address the unique challenges of microbiologists, biomedical researchers, and pharmaceutical professionals, offering features that redefine safety and performance:</p>
                </div>

                <div className="grid grid-cols-1 md:max-w-[97%] mx-auto md:grid-cols-3 gap-8">
                    {features
                        .filter((_, index) => showAll || index < 6)
                        .map((feature, index) => (
                            <div
                                key={index}
                                className="flex w-full max-w-[350px] md:max-w-[370px] bg-[#F8F8F8] py-5 rounded-xl mx-auto"
                            >
                                <div className="pl-3 md:pl-4 w-[25%] py-1 px-2">
                                    <img src={feature.icon} alt={feature.title} className="w-14 h-14" />
                                </div>
                                <div className="pr-3 w-[75%] ">
                                    <h1 className="font-medium mb-4">{feature.title}</h1>
                                    <p className="text-sm text-[#1E1E1E] text-opacity-75">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
                {/* Show the button only on mobile screens */}
                {/* {!showAll && (
                    <div className="flex justify-center items-center mt-5">
                        <button className="bg-white flex justify-between items-center gap-3 hover:bg-black hover:text-white w-auto h-[38px] px-2 pl-3 bg-transparent border-[#1782C5] rounded-full border"
                            onClick={handleReadMore}>
                            Read more
                            <div className='bg-[#1782C5]  flex items-center justify-center text-white w-[28px] h-[28px] p-2 rounded-full'>
                                <img src={arrow} className='' alt="Down arrow icon" />
                            </div>
                        </button>
                    </div>
                )} */}

            </div>

        </div>
    )
}

export default WhyChoose
