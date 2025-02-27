import React, {useEffect} from 'react'
import Header from '../../componets/CommonUtilities/Header/Header'
import Hero from '../../componets/Home/Hero/Hero'
import Products from '../../componets/Home/Products/Products'
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from '../../componets/Home/Products/TopProducts';
import AddBanner from '../../componets/Home/Banner/AddBanner';
import Notified from '../../componets/Home/Notified/Notified';
import Testimonials from '../../componets/Home/Testimonials/Testimonials';
import Footer from '../../componets/CommonUtilities/Footer/Footer';
import Popup from '../../componets/CommonUtilities/Popup/Popup';

function Index() {

  return (
    <div>
        <Header  />
        <Hero  />
        <Products />
        <TopProducts  />
        <AddBanner />
        <Notified />
        <Testimonials />
        <Footer />
        <Popup />
    </div>
  )
}

export default Index
