import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header';
import TopBar from './components/header/TopBar';
import TopNav from './components/header/TopNav';
import Banner from './components/Banner'
import About from './features/Introduce/pages/About';
import SideBar from './components/SideBar';
import Contact from './features/Introduce/pages/Contact';
import HomePage from './features/Introduce/pages/Home';
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
