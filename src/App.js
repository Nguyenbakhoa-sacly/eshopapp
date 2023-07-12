
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//component
import { Header, Footer } from './components/index'
//pages
import { Home, Contact } from './pages/index'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/contact" element={ <Contact/> } />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
