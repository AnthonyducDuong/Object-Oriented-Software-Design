import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header';
import TopBar from './components/header/TopBar';
import TopNav from './components/header/TopNav';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
