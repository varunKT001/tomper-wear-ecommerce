import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer, Toast, ErrorBoundary } from './components';
import { useProductsContext } from './context/products_context';
import 'react-toastify/dist/ReactToastify.css';
import {
  Home,
  About,
  Products,
  Cart,
  SingleProduct,
  Checkout,
  Error,
  Login,
  Register,
  Forgot,
  Reset,
  OrdersPage,
  PrivateRoute,
  ProfilePage,
} from './pages';
import PrivateRoute2 from './pages/PrivateRoute/index2';

function App() {
  const { isSidebarOpen } = useProductsContext();
  const overflowPropertyToHideScroll =
    isSidebarOpen === true ? 'hidden' : 'scroll';

  return (
    <div style={{ maxHeight: '100vh', overflow: overflowPropertyToHideScroll }}>
      <Router>
        <Toast />
        <Navbar />
        <Sidebar />
        <ErrorBoundary>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/products' element={<Products />} />
            <Route exact path='/cart' element={<Cart />} />

            <Route element={<PrivateRoute />}>
              <Route element={<Login />} path='/login' />
              <Route element={<Register />} path='/register' />
              <Route element={<Forgot />} path='/forgot-password' />
              <Route element={<Reset />} path='/reset-password' />
            </Route>

            <Route element={<PrivateRoute2 />}>
              <Route element={<Checkout />} path='/checkout' />
              <Route element={<OrdersPage />} path='/orders' />
              <Route element={<ProfilePage />} path='/profile' />
            </Route>

            <Route exact path='/products/:id' element={<SingleProduct />} />
            <Route exact path='*' element={<Error />} />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
