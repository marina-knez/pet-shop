import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';

import { GlobalStyle } from '../src/global.style';
import Button, { BUTTON_TYPE_CLASSES } from './components/button/button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Success from './routes/success/success.component';

const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const Home = lazy(() => import('./routes/home/home.component'));
const Shop = lazy(() => import('./routes/shop/shop.component'));
const Guide = lazy(() => import('./routes/guide/guide.component'));
const About = lazy(() => import('./routes/about/about.component'));
const Contact = lazy(() => import('./routes/contact/contact.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));

const App = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <Suspense fallback={<Spinner />}>
    <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='guide' element={<Guide />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='success' element={<Success />} />
        </Route>
      </Routes>
      {showScrollToTop && 
        <Button buttonType={BUTTON_TYPE_CLASSES.scroll} onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} className='arrow-up'/>
        </Button>
      }
    </Suspense>
  );
}

export default App;
