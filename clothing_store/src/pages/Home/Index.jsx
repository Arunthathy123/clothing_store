import React, {useEffect} from 'react'
import Header from '../../componets/Header/Header'
import Hero from '../../componets/Carousel/Hero'
import Products from '../../componets/Products/Products'
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from '../../componets/Products/TopProducts';
import AddBanner from '../../componets/Banner/AddBanner';
import Notified from '../../componets/Notified/Notified';
import Testimonials from '../../componets/Testimonials/Testimonials';
import Footer from '../../componets/Footer/Footer';
import Popup from '../../componets/Popup/Popup';

function Index() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
        <Header handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Products />
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <AddBanner />
        <Notified />
        <Products />
        <Testimonials />
        <Footer />
        <Popup  orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default Index
