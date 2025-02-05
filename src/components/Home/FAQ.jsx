import React, { useState } from 'react';

const FAQ = () => {
  // Sample FAQ data
  const faqData = [
    {
      question: 'What products does AirBio Technologies offer?',
      answer: 'AirBio specializes in biosafety cabinets,ductless fume hoods, laminar flow solutions, and customized safety solutions for laboratories, healthcare facilities, and industrial environments.',
    },
    {
      question: 'What makes AirBio’s biosafety cabinets unique?',
      answer: 'You can track your order by visiting the "Order History" section in your account.',
    },
    {
      question: 'Do your products meet industry standards?',
      answer: ' Yes, all AirBio products comply with global safety and quality standards, including ISO and EN certifications, ensuring reliable performance.',
    },
    {
      question: 'Can AirBio provide custom solutions?',
      answer: '  Absolutely! We tailor solutions based on specific requirements, whether it’s for laboratory environments or specialized industrial needs.',
    },
    {
      question: 'Does AirBio offer installation and maintenance support?',
      answer: ' Yes, we provide end-to-end support, including installation, calibration, training, and ongoing maintenance services.',
    },
    {
      question: 'How often should biosafety cabinets be serviced?',
      answer: 'We recommend servicing every 6-12 months to maintain optimal performance and ensure compliance with safety standards.',
    },
  ];

  // State to track which question is currently open
  const [openIndex, setOpenIndex] = useState(null);
  const [clickedQuestion, setClickedQuestion] = useState(null);

  // Toggle the open/close state of the answer
  const handleToggle = (index) => {
    setClickedQuestion(clickedQuestion === index ? null : index);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);  // Toggle clicked state
  };  

  return (
    <>
    <div id='faq' className='hidden text-center md:text-start md:flex justify-between items-center p-5 md:p-10  mt-8 border-blue-600'>
        <h1 className='text-2xl font-[500px] md:w-[373px]  md:text-[40px] leading-[44px] md:text-left my-2 '>FAQs <br /> 
        AirBio Technologies</h1>
        {/* <p className='md:text-lg py-2 md:py-0 md:w-[553px] text-[#7A7A7A] '>comprehensive FAQ section to guide you through the decision-making process with ease and confidence.</p> */}
      </div>
    <div className="max-w-2xl mx-auto p-4">
      <h1 className='md:hidden text-3xl font-[500px] leading-10 text-center mb-8'>FAQs AirBio Technologies</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className=" bg-[#F5F5F5] rounded-lg p-2 px-4 border-gray-300 pb-3">
            {/* Question Section */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h2 onClick={() => handleClick(index)} className={`text-lg font-[500px] ${
              clickedQuestion === index ? 'text-[#1782C5]' : 'text-black'
            } cursor-pointer`}>{faq.question}</h2>
              <button
                className="text-xl font-[500px] focus:outline-none"
                aria-label="Toggle Answer"
              >
                {openIndex === index ? '×' : '+'}
              </button>
            </div>
            {/* Answer Section */}
            {clickedQuestion === index && (
              <div className="mt-2 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FAQ;
