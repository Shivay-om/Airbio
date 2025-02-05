import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Slider from './Slider'
import About from './About'
import Certification from './Certification'
import FAQ from './FAQ'
import Team from './Team.jsx'
import Footer from '../Footer/Footer.jsx'
import CardPost from './CardPost.jsx'
import Applications from './Applications.jsx'
import Products from '../products/Product.jsx'
import Instagram from './Instagram.jsx'
import Assistants from './Assistants.jsx'
import hero from '../../assets/images/Hero.webp'
import mobilebg from '../../assets/images/frame-mobilebg.png'
import Crousal from './Crousal.jsx'

const Home = () => {
    return (
        <>
            <div className="w-full relative">
                
                <Crousal/>

                {/* Slider Section */}
                <div className="w-full">
                    <Slider />
                </div>
                <About />
                <Products />
                {/* <Certification /> */}
                <Applications />
                <Team />
                <FAQ />
                {/* <Instagram /> */}
                <CardPost />
                <Assistants />
                {/* <Footer /> */}

            </div>


        </>

    )
}

export default Home
