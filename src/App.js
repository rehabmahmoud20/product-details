

import './App.css';
import ProductDetails from './Components/ProductDetails';
import { Footer } from './Shared/Footer';
import Header from './Shared/Header';
import NavbarComponent from './Shared/NavbarComponent';

function App() {
 
  return (
  <>
  <NavbarComponent/>
  <Header />
  <div className='mb-10'>
  <ProductDetails/>
  </div>
 
  <Footer/>
  </>
 
  );
}

export default App;
