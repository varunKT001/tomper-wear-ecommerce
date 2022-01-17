import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer, Toast, ErrorBoundry } from './components';
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

function App() {
  return (
    <Router>
      <Toast />
      <Navbar />
      <Sidebar />
      <ErrorBoundry>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <PrivateRoute exact path='/login'>
            <Login />
          </PrivateRoute>
          <PrivateRoute exact path='/register'>
            <Register />
          </PrivateRoute>
          <PrivateRoute exact path='/forgot-password'>
            <Forgot />
          </PrivateRoute>
          <PrivateRoute exact path='/reset-password'>
            <Reset />
          </PrivateRoute>
          <Route exact path='/products/:id' children={<SingleProduct />} />
          <PrivateRoute exact path='/checkout'>
            <Checkout />
          </PrivateRoute>
          <PrivateRoute exact path='/orders'>
            <OrdersPage />
          </PrivateRoute>
          <PrivateRoute exact path='/profile'>
            <ProfilePage />
          </PrivateRoute>
          <Route exact path='*'>
            <Error />
          </Route>
        </Switch>
      </ErrorBoundry>
      <Footer />
    </Router>
  );
}

export default App;
