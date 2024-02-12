import Hero from "./components/Hero";
import Container from '@mui/material/Container'; 
import Nav from './components/Nav';
import './index.css';

function App() {
  return (
    <>
      <Nav />

      <Container>
        <Hero />
      </Container>

    </>
    
  );
}

export default App;
