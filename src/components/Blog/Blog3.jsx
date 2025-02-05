import React from 'react'
import Header from '../Home/Header'
import logo from '../../assets/images/logo.svg'
import blog5 from '../../assets/images/blog5.png'
import blog6 from '../../assets/images/blog6.png'


const Blog3 = () => {
  return (
    <div>
      <Header />
      <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-screen-lg md:px-10 format format-sm sm:format-base lg:format-lg format-blue">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                Fume Hoods and the Future of Laboratory Safety: 5 Innovations to Watch
              </h1>
              <img
                src={blog5}
                alt=""
                className='mb-5 lg:w-full rounded-2xl'
              />
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 border px-2 rounded-full"
                    src={logo}
                    alt="Jese Leos"
                  />
                  <div>
                    <h1 className="text-xl font-medium text-gray-900">
                      Airbio Technologies
                    </h1>
                    <p className="text-base text-gray-500">
                      <time
                        pubdate=""
                        dateTime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        Jan 31, 2025.
                      </time>
                    </p>
                  </div>
                </div>
              </address>
            </header>

            <div className='text-justify'>
              <p className="lead">
                Laboratory safety is evolving, and fume hoods are no exception. From energy efficiency to advanced monitoring systems, modern innovations are setting new benchmarks for safety and performance. Here are five trends shaping the future of fume hoods:
              </p>
              <p>
                Before going digital, you might benefit from scribbling down some ideas
                in a sketchbook. This way, you can think things through before
                committing to an actual design project.
              </p>
            </div>

            <ol className='text-justify my-5'>
              <li>
                <strong className='text-xl font-semibold'>1. Energy-Efficient Blowers</strong>
                <p className='mt-5'>Today’s fume hoods prioritize sustainability. Variable speed blowers, like those used in AirBio’s systems, reduce energy consumption without compromising performance.</p>
              </li>
              <li className='mt-5'>
                <strong className='text-xl font-semibold'>2. Real-Time Contamination Alerts</strong>
                <p className='mt-5'>Advanced sensors now offer real-time contamination detection, enabling labs to respond instantly and mitigate risks.</p>
              </li>
              <li className='mt-5'>
                <strong className='text-xl font-semibold'>3. Ergonomic Designs</strong>
                <p className='mt-5'>User comfort is more than a luxury; it’s a necessity. New designs focus on reducing operator fatigue, ensuring efficiency during long lab hours.</p>
              </li>
              <li className='mt-5'>
                <strong className='text-xl font-semibold'>4. Automated Safety Compliance</strong>
                <p className='mt-5'>Integrated monitoring systems ensure your fume hood adheres to the latest safety regulations, taking the guesswork out of compliance.</p>
              </li>
              <li className='mt-5'>
                <strong className='text-xl font-semibold'>5. Durability and Easy Maintenance</strong>
                <p className='mt-5'>With seamless stainless steel construction, modern fume hoods are built for longevity and hassle-free cleaning.</p>
              </li>
            </ol>

            <img
              src={blog6}
              alt=""
              className='mb-5 lg:w-full rounded-2xl'
            />
            <h1 className='font-medium text-2xl md:text-3xl text-center md:text-start mt-10 my-5'>Why It Matters</h1>


            <div className='text-justify'>
              <p >
              Safety isn’t just about protecting your team; it’s about advancing your work without unnecessary interruptions. By staying ahead of these trends, you ensure your lab remains a leader in innovation.
              </p>
              <p className='my-5'>
              Future-proof your lab with AirBio’s cutting-edge fume hoods. Explore the possibilities today.
              </p>
            </div>
          </article>
        </div>
      </main>

    </div>
  )
}

export default Blog3
