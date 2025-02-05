import React from 'react'
import Header from '../Home/Header'
import logo from '../../assets/images/logo.svg'
import blog1 from '../../assets/images/blog1 (1).png'
import blog2 from '../../assets/images/blog2 (1).png'


const Blog = () => {
  return (
    <div>
      <Header />
      <hr className="w-[95%] h-1 mt-6 border-t-1 border-[#C3C3C3] mx-auto" />

      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-screen-lg md:px-10 format format-sm sm:format-base lg:format-lg format-blue">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-medium leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                Beyond Clean Air: What to Look for in Your Next Biosafety Cabinet
              </h1>
              <img
                src={blog1}
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
                In the world of microbiology, safety isn’t optional—it’s essential. Whether you're managing a high-stakes research lab or a pharmaceutical testing facility, choosing the right biosafety cabinet (BSC) is a decision that directly impacts your work's accuracy and safety. But how do you separate a mediocre BSC from one that truly stands out?
              </p>
              <p>
                Before going digital, you might benefit from scribbling down some ideas
                in a sketchbook. This way, you can think things through before
                committing to an actual design project.
              </p>
            </div>

            <h1 className='font-medium text-center md:text-start md:text-3xl text-2xl mt-10 my-5'>Key Features That Matter</h1>

            <ol className='text-justify'>
              <li>
                <strong>Real-Time Data Management:</strong> A high-quality BSC should integrate with your Lab Information Management System (LIMS). With real-time data monitoring, you can ensure regulatory compliance and streamline lab processes.
              </li>
              <li className='my-5'>
                <strong>Stable Airflow Monitoring:</strong> Low airflow sensors with self-compensation technology provide stability, minimizing contamination risks.

              </li>
              <li className='mb-5'>
                <strong>Energy Efficiency:</strong> Energy-efficient blowers like DEC Star Variable Speed ECM save up to 70% energy while ensuring whisper-quiet operation—a win for both your budget and your team’s focus.
              </li>
            </ol>

            <img
              src={blog2}
              alt=""
              className='mb-5 lg:w-full rounded-2xl'
            />
            <h1 className='font-medium text-2xl md:text-3xl text-center md:text-start mt-10 my-5'>Why It Matters</h1>


            <div className='text-justify'>
              <p >
                Imagine working on groundbreaking research, only to have your results compromised by an unreliable cabinet. That’s the kind of risk you can’t afford. With advanced features like ergonomic sash designs, angular front grills for improved containment, and stainless steel work surfaces for easy cleaning, a reliable BSC doesn’t just safeguard your work—it enhances your workflow.
              </p>
              <p className='my-5'>
                Investing in the right equipment isn’t just a financial decision; it’s a professional one. After all, your lab deserves nothing but the best.
              </p>
              <p>
                Ready to elevate your lab’s safety and efficiency? Explore AirBio’s advanced biosafety cabinets today.
              </p>
            </div>
          </article>
        </div>
      </main>

    </div>
  )
}

export default Blog
