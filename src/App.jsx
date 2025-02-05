
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

function App() {


  return (
    <Router>
      {/* <Header/> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<DiscoverProducts />} />
        <Route path="/product/:category" element={<AllProductPage />} />
        <Route path="/product/category2" element={<FumeHoods/>} />
        <Route path="/product/category3" element={<LaminarFlow/>} />
        <Route path="/product/:category/:subcategory" element={<ProductPage />} />
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
