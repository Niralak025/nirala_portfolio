// import { useMediaQuery } from 'react-responsive';
import './App.css';
// import Mobile from './components/Mobile';
// import Tablet from './components/Tablet';
// import Laptop from './components/Laptop';
// import Desktop from './components/Desktop';
// import BigScreen from './components/BigScreen';
import Home from '../src/pages/Home/index'
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    emailjs.init("NFOqHQfYuiXxV_GEW")
  }, []);

  // const isMobile = useMediaQuery({
  //   query: "(min-device-width:360px)",
  // });
  // const isTablet = useMediaQuery({
  //   query: "(min-device-width:712px)",
  // });
  // const isLaptop = useMediaQuery({
  //   query: "(min-device-width:1024px)",
  // });
  // const isDesktop = useMediaQuery({
  //   query: "(min-device-width:1200px)",
  // });
  // const isBigScreen = useMediaQuery({
  //   query: "(min-device-width:1201px)",
  // });

  return (
    <>
      <Home />
      {/* {isMobile && <Mobile /> } */}
      {/* {isTablet && <Tablet />} */}
      {/* {isLaptop && <Laptop />} */}
      {/* {isDesktop && <Desktop />} */}
      {/* {isBigScreen && <BigScreen />} */}
    </>
  );
}

export default App;
