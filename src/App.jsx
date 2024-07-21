import './App.css';
import Home from '../src/pages/Home/index'
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import SideMenuRough from './pages/Rough';

const App = () => {

  useEffect(() => {
    emailjs.init("NFOqHQfYuiXxV_GEW")
  }, []);

  return (
    <>
      <Home />
      {/* <SideMenuRough/> */}
    </>
  );
}

export default App;
