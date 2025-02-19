import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return <>{children}</>;
}

export default AOSProvider;
