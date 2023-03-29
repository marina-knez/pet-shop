import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';

import {GlobalStyle} from '../src/global.style';

const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const Home = lazy(() => import('./routes/home/home.component'));
const Shop = lazy(() => import('./routes/shop/shop.component'));
const Guide = lazy(() => import('./routes/guide/guide.component'));
const About = lazy(() => import('./routes/about/about.component'));
const Contact = lazy(() => import('./routes/contact/contact.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));

const App = () => {

  return (
    <Suspense fallback={<Spinner />}>
    <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='guide' element={<Guide />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
