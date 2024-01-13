import './App.css';
import Home from '../src/pages/Home/index'
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    emailjs.init("NFOqHQfYuiXxV_GEW")
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
