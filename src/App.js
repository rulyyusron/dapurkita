import './App.css';
import Announcement from './component/Announcement/Announcement';
import Carousel from './component/Carousel/Carousel';
import Footer from './component/footer/footer';
import Kategori from './component/kategori/Kategori';
import Sale from './component/Sale/Sale';
import Produk from './component/slideProduk/produk';
import Special from './component/Special/special';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Home/>
      <Kategori/>
      <Special/>
       <Carousel/>
      <Produk/>
      <Sale/>
      <Announcement/>
      <Footer/>
    </div>
  );
}

export default App;
