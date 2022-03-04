import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header';
import TopBar from './components/header/TopBar';
import TopNav from './components/header/TopNav';

function App() {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
}

export default App;
