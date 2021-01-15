import React from 'react';
import { Link, BrowserRouter, Switch } from 'react-router-dom';
import ProductsContextProvider from './contexts/ProductsContext';
import HomePage from './container/HomePage/HomePage';
import NewsDetailPage from './container/NewsDetailPage/NewsDetailPage';
import NewsPage from './container/NewsPage/NewsPage';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';

const Routes = () => {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <Switch>
          <Link exact path="/" component={HomePage} />
          <Link exact path="/details:id" component={NewsDetailPage} />
          <Link exact path="/all-news" component={NewsPage} />
        </Switch>
      </ProductsContextProvider>
    </BrowserRouter>
  );
};

export default Routes;