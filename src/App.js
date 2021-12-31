import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  About,
  Products,
  Cart,
  SingleProduct,
  Checkout,
  login,
  Error,
  Login,
  Register,
  Forgot,
  Reset,
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
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
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/forgot-password'>
          <Forgot />
        </Route>
        <Route exact path='/reset-password'>
          <Reset />
        </Route>
        <Route exact path='/products/:id' children={<SingleProduct />} />
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route exact path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
