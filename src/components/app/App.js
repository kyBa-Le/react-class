import './App.css';
import { Header } from '../header/Header';
import { BreadSection } from '../bread_crumber/Bread';
import { ShopPage } from '../../pages/shop/ShopPage';
import { Partner } from '../partner/Partner';
import { Footer } from '../footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <BreadSection></BreadSection>
      <ShopPage></ShopPage>
      <Partner></Partner>
      <Footer></Footer>
    </>
  );
}

export default App;
