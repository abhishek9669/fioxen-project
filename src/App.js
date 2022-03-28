
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './component/frontend/pages/AboutUs/AboutUs';
import Homepage from './component/frontend/pages/Homepage/Homepage';
import Listing from './component/frontend/pages/Listing/Listing';
import ListingDetailOne from './component/frontend/pages/Listing/ListingDetailOne';
import ListingDetailTwo from './component/frontend/pages/Listing/ListingDetailTwo';
import ListingGrid from './component/frontend/pages/Listing/ListingGrid';
import ListingMap from './component/frontend/pages/Listing/ListingMap';
import AddingList from './component/frontend/pages/PagesCategory/AddingList';
import HowWork from './component/frontend/pages/PagesCategory/HowWork';
import OurBlog from './component/frontend/pages/Article/OurBlog';
import OurProducts from './component/frontend/pages/PagesCategory/OurProducts';
import Pricing from './component/frontend/pages/PagesCategory/Pricing';
import ProductDetails from './component/frontend/pages/PagesCategory/ProductDetails';
import BlogDetails from './component/frontend/pages/Article/BlogDetails';
import Contact from './component/frontend/pages/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/listing' element={<Listing/>} />
      <Route path='/listing-grid' element={<ListingGrid/>} />
      <Route path='/listing-map' element={<ListingMap/>} />
      <Route path='/listing-detail-one' element={<ListingDetailOne/>} />
      <Route path='/listing-detail-two' element={<ListingDetailTwo/>} />
      <Route path='/add-listing' element={<AddingList/>} />
      <Route path='/our-products' element={<OurProducts/>} />
      <Route path='/products-details' element={<ProductDetails/>} />
      <Route path='/how-work' element={<HowWork/>} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path='/our-blog' element={<OurBlog/>} />
      <Route path='/blog-details' element={<BlogDetails/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  );
}

export default App;
