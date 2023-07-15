
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//component
import { Header, Footer } from './components/index'
//pages
import { Home, Contact, OrderHistory, Login, Register,Reset } from './pages/index'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/contact" element={ <Contact/> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/order-history" element={ <OrderHistory/> } />
            <Route path="/register" element={ <Register/> } />
            <Route path="/reset" element={ <Reset/> } />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
