import React from 'react'
import Header from '../Home/Header'
import about from '../../assets/images/about.png'
import card1 from '../../assets/images/card1.webp'
import card2 from '../../assets/images/card2.webp'
import card3 from '../../assets/images/card3.webp'
import customer from '../../assets/images/customer.svg'
import truck from '../../assets/images/delivered.svg'
import industry from '../../assets/images/industry.svg'
import booking from '../../assets/images/booking.svg'
import TeamData from '../Home/TeamData';
import mission from '../../assets/images/mission.webp'
import vision from '../../assets/images/vision.webp'
import values from '../../assets/images/values.webp'
import WhyChoose from './WhyChoose'
import CountUp from 'react-countup';

const cards = [
  {
    id: 1,
    img: card1,
    name: "Our Commitment to You",
    description: "To deliver innovative, reliable, and precision-engineered biosafety solutions that empower scientific progress and ensure the highest standards of safety and performance.",
  },
  {
    id: 2,
    img: card2,
    name: "Global Reach, Local Care",
    description: "To be the global leader in biosafety technology, setting new benchmarks for safety, efficiency, and innovation while supporting advancements in science and healthcare.",
  },
  {
    id: 3,
    img: card3,
    name: "Join the Future of Laboratory Safety",
    description: "We understand the high-stakes nature of your work, which is why we focus on more than just delivering equipment. We deliver peace of mind. AirBio is your partner in achieving breakthroughs, ensuring your team’s safety, and adhering to the highest industry standards.",
  },
];

const About = () => {
  return (
    <div>
      <Header />
      <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

      <div className='p-5'>
        <div className=' text-center md:max-w-[85%] mx-auto'>
          <h1 className='text-3xl font-medium'>Get to Know Us</h1>
          <p className='mt-1 text-[#7A7A7A]'>Driving innovation and excellence to craft products that transform ideas into reality.</p>
          <img src={about} alt="" className='my-8 lg:w-full h-auto' />
          <p className='text-justify px-2'>At AirBio, we don’t just manufacture biosafety solutions; we craft an ecosystem of trust, performance, and reliability. Since our inception, AirBio has been driven by a singular mission—to empower laboratories worldwide with cutting-edge equipment that combines scientific precision with robust safety measures. Whether you're safeguarding research or enhancing operational efficiency, AirBio ensures you’re equipped with the best.</p>
          <p className='text-justify px-2 mt-5'>The AirBio Journey In just six years, AirBio has transformed from a bold idea into a trusted partner for laboratories across the globe. Inspired by the vision to redefine MedTech equipment, our team of scientists, engineers, and innovators continually pushes boundaries, delivering solutions that meet international standards. From biosafety cabinets to laminar flow hoods and fume hoods, every AirBio product is a testament to our relentless commitment to quality and innovation.</p>
        </div>

        <div className='md:max-w-[80%] mx-auto flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 my-8 '>
          <div className=' flex flex-col justify-center items-center mx-5' >
            <img src={customer} alt="" className='mb-4' />
            <div className=' md:h-[100px]'>
              <h1 className='font-bold text-center text-2xl mt-0 mb-2 tracking-wide'>
                <CountUp start={0} end={100} delay={0} enableScrollSpy >
                  {({ countUpRef, start }) => (
                    <div style={{ fontSize: '36px', color: '#1782C5', gap: '4px' }}>
                      <span ref={countUpRef} />
                      <button onClick={start} style={{ fontSize: '36px', color: '#1782C5', border: 'none', background: 'transparent', cursor: 'pointer' }}>%</button>
                    </div>
                  )}
                </CountUp></h1>
              <p className='w-[150px] text-center text-[#1E1E1E] tracking-wider'>Equipment Quality</p>
            </div>
          </div>

          <div className=' flex flex-col justify-center items-center mx-5'>
            <img src={truck} alt="" className='mb-4' />
            <div className=' h-[100px]'>
              <h1 className='font-bold text-center text-2xl mt-0 mb-2 tracking-wide'>
                <CountUp start={0} end={40} delay={0} enableScrollSpy >
                  {({ countUpRef, start }) => (
                    <div style={{ fontSize: '36px', color: '#1782C5', gap: '4px' }}>
                      <span ref={countUpRef} />
                      <button onClick={start} style={{ fontSize: '36px', color: '#1782C5', border: 'none', background: 'transparent', cursor: 'pointer' }}>+</button>
                    </div>
                  )}
                </CountUp></h1>
              <p className='text-center text-[#1E1E1E] tracking-wider'>Years Team Experience</p>
            </div>
          </div>
          <div className=' flex flex-col justify-center items-center  w-auto mx-5'>
            <img src={industry} alt="" className='mb-4' />
            <div className=' md:h-[100px]'>
              <h1 className='font-bold text-center text-2xl mt-0 mb-2 tracking-wide'>

                <CountUp start={0} end={6} delay={0} enableScrollSpy >
                  {({ countUpRef, start }) => (
                    <div style={{ fontSize: '36px', color: '#1782C5', gap: '4px' }}>
                      <span ref={countUpRef} />
                      <button onClick={start} style={{ fontSize: '36px', color: '#1782C5', border: 'none', background: 'transparent', cursor: 'pointer' }}>+</button>
                    </div>
                  )}
                </CountUp></h1>
              <p className='w-[150px] text-center text-[#1E1E1E] tracking-wider'>Industries Served</p>
            </div>
          </div>
          <div className=' flex flex-col justify-center items-center mx-5'>
            <img src={booking} alt="" className='mb-4' />
            <div className=' h-[100px]'>
              <h1 className='font-bold text-center text-2xl mt-0 mb-2 tracking-wide'>

                <CountUp start={0} end={54} delay={0} enableScrollSpy >
                  {({ countUpRef, start }) => (
                    <div style={{ fontSize: '36px', color: '#1782C5', gap: '4px' }}>
                      <span ref={countUpRef} />
                      <button onClick={start} style={{ fontSize: '36px', color: '#1782C5', border: 'none', background: 'transparent', cursor: 'pointer' }}>+</button>
                    </div>
                  )}
                </CountUp></h1>
              <p className='w-[150px] text-center text-[#1E1E1E] tracking-wider'>Country Reach</p>
            </div>
          </div>
        </div>

        <div className='md:max-w-[85%] mx-auto'>
          <div className='lg:flex'>
            <div className='lg:w-[50%]'>
              <img src={mission} alt="" className='lg:w-auto lg:h-[350px]' />
            </div>
            <div className='lg:w-[50%] lg:flex flex-col justify-center items-end'>
              <div className='lg:w-[408px]'>
                <h1 className='text-2xl md:text-3xl text-center lg:text-start my-5'>Mission</h1>
                <p className='text-[#404040] text-justify mb-5'>To deliver innovative, reliable, and precision-engineered biosafety solutions that empower scientific progress and ensure the highest standards of safety and performance.</p>
              </div>
            </div>
          </div>

          <div className='lg:flex lg:my-10'>
            <div className='lg:w-[50%] lg:order-2 flex justify-end'>
              <img src={vision} alt="" className='lg:w-auto lg:h-[350px]' />
            </div>
            <div className='lg:w-[50%] lg:flex lg:order-1 flex-col justify-center'>
              <h1 className='text-2xl md:text-3xl text-center lg:text-start my-5'>Vision</h1>
              <p className='text-[#404040] lg:w-[408px] text-justify mb-5'>To be the global leader in biosafety technology, setting new benchmarks for safety, efficiency, and innovation while supporting advancements in science and healthcare.</p>
            </div>
          </div>

          <div className='lg:flex'>
            <div className='lg:w-[50%]'>
              <img src={values} alt="" className='lg:w-auto lg:h-[350px]' />
            </div>

            <div className='lg:w-[50%] lg:flex flex-col justify-center items-end'>
              <div className=' lg:w-[408px]'>
                <h1 className='text-2xl md:text-3xl text-center lg:text-start my-5'>Values</h1>
                <div className=" lg:mb-5">
                  <ul className="text-[#404040]">
                    <li className="flex items-start">
                      <p>
                        <span className="font-semibold text-black mr-2">1. Innovation:</span> Driving excellence through cutting-edge technology.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <p>
                        <span className="font-semibold text-black mr-2">2. Safety:</span>Ensuring uncompromising protection for people and processes.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <p className='text-[#404040]'>
                        <span className="font-semibold text-black mr-2">3. Integrity:</span> Building trust through transparency and reliability.

                      </p>
                    </li>
                    <li className="flex items-start">
                      <p>
                        <span className="font-semibold text-black mr-2">4. Sustainability:</span> Creating eco-friendly solutions for a better future.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <p>
                        <span className="font-semibold text-black mr-2">5. Collaboration:</span> Partnering with clients to advance scientific discovery.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WhyChoose />

        <div className=" my-10 md:py-10">
          <div className="flex md:max-w-[85%] mx-auto overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-8 scrollbar-hide scrollbar scrollbar-thumb-customBlue scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-[90%] min-w-[250px] md:w-auto bg-white pb-5 md:pb-0 border-green-500 rounded-lg scrollbar scrollbar-thumb-customBlue scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
              >
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-auto h-[297px] md:w-full object-cover rounded-xl"
                />
                <h3 className="mt-2 text-xl font-medium">{card.name}</h3>
                <p className="mt-1 mb-2 text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=' my-10 pt-5'>
          <div className='text-center md:text-start md:max-w-[85%] mx-auto md:flex justify-between items-center pt-5 border-blue-600'>
            <h1 className='text-3xl font-medium md:w-[373px]  md:text-[40px] md:text-left my-2 '>Our
              Expert Team</h1>
            <p className='text-[15px] py-2 md:py-0 md:w-[283px] text-[#7A7A7A] '>Driving innovation and excellence to craft products that transform ideas into reality.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 md:max-w-[85%] h-auto my-10 mx-auto gap-4">
            {TeamData.map((card) => (
              <div
                key={card.id}
                className="bg-white border border-[#CDCDCD] border-g md:mb-5 rounded-lg "
              >
                <div className=' border-red-600 flex items-end h-[160px] md:h-[210px]'>
                  <img
                    src={card.imgSrc}
                    alt={card.name}
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>

                <div className="pt-2 bg-[#f8f8f8] rounded-b-lg">
                  <h3 className="text-lg text-center font-medium">{card.name}</h3>
                  <p className="mt-1 text-center pb-2 text-[#1782C5]">{card.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
