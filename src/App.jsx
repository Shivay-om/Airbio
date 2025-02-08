
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import ProductPage from "./components/products/ProductPage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from './components/Home/Header';
import Footer from './components/Footer/Footer';
import AllProductPage from './components/Allproductpage/AllProductPage';
import DiscoverProducts from './components/products/DiscoverProducts';
import BlogPage from './components/Blog/BlogPage';
import ScrollToTop from './components/ScrollToTop';
import Blog from './components/Blog/Blog';
import Blog2 from './components/Blog/Blog2';
import Blog3 from './components/Blog/Blog3';
import FumeHoods from './components/Allproductpage/FumeHoods';
import LaminarFlow from './components/Allproductpage/LaminarFlow';
import A2Agies from './components/products/A2Agies';
import BSCA2 from './components/products/BSCA2';
import MainA2 from './components/products/MainA2';
import Airflow from './components/products/Airflow'
import AirflowVelocity from './components/products/AirflowVelocity';
import BAgies from './components/products/BAgies';
import AirFumeHood from './components/products/AirFumeHood';


function App() {


  return (
    <Router>
      {/* <Header/> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<DiscoverProducts />} />
        <Route path="/product/Biosafety" element={<AllProductPage />} />
        <Route path="/product/FumeHoods" element={<FumeHoods/>} />
        <Route path="/product/laminar" element={<LaminarFlow/>} />

        {/* //biosafety subpages// */}
        <Route path="/product/Biosafety/BscClassIIB2" element={<ProductPage />} />
        <Route path="/product/Biosafety/BscClassIIB2(Agies)" element={<BAgies />} />
        <Route path="/product/Biosafety/BscClassIIA2(Agies)" element={< A2Agies/>} />
        <Route path="/product/Biosafety/BscClassIIA2" element={<BSCA2 />} />
        <Route path="/product/Biosafety/BscMainClassIIA2" element={<MainA2 />} />

        {/* //Fume subpages// */}
        <Route path="/product/FumeHoods/FumeHood" element={<AirFumeHood />} />

        {/* //Laminar subpages// */}
        <Route path="/product/laminar/Airflow" element={<Airflow />} />
        <Route path="/product/laminar/Airflow(Velocity)" element={<AirflowVelocity />} />


        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/blog1" element={<Blog />} />
        <Route path="/blog/blog2" element={<Blog2 />} />
        <Route path="/blog/blog3" element={<Blog3 />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
