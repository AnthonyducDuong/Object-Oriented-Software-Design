import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header';
import TopBar from './components/header/TopBar';
import TopNav from './components/header/TopNav';
import Content from './features/About/components/Content';
import Banner from './components/Banner'
import AccordionAbout from './features/About/components/Accordion';
import SliderAbout from './features/About/components/Slider';
import About from './features/About/pages/Main';
import SideBar from './components/SideBar';
import Contact from './features/Contact/pages/Main';
import HomePage from './features/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='aboutus' element={<About />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
