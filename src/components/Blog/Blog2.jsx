import React from 'react'
import Header from '../Home/Header'
import logo from '../../assets/images/logo.svg'
import blog3 from '../../assets/images/blog3.png'
import blog4 from '../../assets/images/blog4.png'

const Blog2 = () => {
  return (
    <div>
      <Header />
      <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-screen-lg md:px-10 format format-sm sm:format-base lg:format-lg format-blue">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
              Laminar Flow Hoods: Are You Sacrificing Safety for Cost?
              </h1>
              <img
                src={blog3}
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
              When it comes to laminar flow hoods, the adage “you get what you pay for” couldn’t be more true. While cost is always a consideration, compromising on quality can lead to safety hazards and operational inefficiencies—risks no microbiologist can afford to take.
              </p>
              <p className='mt-5'>
                Before going digital, you might benefit from scribbling down some ideas
                in a sketchbook. This way, you can think things through before
                committing to an actual design project.
              </p>
            </div>

            <h1 className='font-medium text-center md:text-start md:text-3xl text-2xl mt-10 my-5'>The Hidden Costs of Cheap Equipment</h1>

            <p className='mb-5'>Budget-friendly laminar flow hoods often lack the advanced features required to maintain sterility. Without stable airflow and robust filtration systems, these hoods can jeopardize both your samples and your team’s safety. Over time, maintenance costs and the risk of contamination far outweigh the initial savings.</p>

            <img
                src={blog4}
                alt=""
                className='mb-5 lg:w-full rounded-2xl'
            />

            <h1 className='font-medium text-2xl md:text-3xl text-center md:text-start mt-10 my-5'>What Sets Premium Hoods Apart </h1>


            <div className='text-justify'>
              <p >
              High-end laminar flow hoods, like those by AirBio, are engineered for performance and reliability. Features like energy-efficient blowers and seamless stainless steel work surfaces reduce long-term costs while ensuring optimal lab conditions.
              </p>
              <h1 className='font-medium text-2xl md:text-3xl text-center md:text-start mt-10 my-5'>A Safety Investment</h1>
              <p className='my-5'>
              Think of a laminar flow hood as an investment in your lab’s future. The right choice not only protects your work but also boosts productivity and peace of mind.
              </p>
              <p>
              Don’t let cost-cutting compromise your safety. Discover AirBio’s precision-engineered laminar flow hoods.
              </p>
            </div>
          </article>
        </div>
      </main>

    </div>
  )
}

export default Blog2
