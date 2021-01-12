import { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Products from './components/Products/Products';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Basket from './components/Basket/Basket';


const App = () => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState({})

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  const fetchBasketData = async () => {
    const response = await commerce.cart.retrieve();
    setBasket(response)
  }

  const addProduct = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setBasket(response.cart)
  }

  useEffect(() => {
    fetchProducts();
    fetchBasketData();
  }, []);

  const updateProduct = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, {quantity});
    setBasket(response.cart)
  }

  const handleEmptyBasket = async () => {
    const response = await commerce.cart.empty();
    setBasket(response.cart);
  }

  const removeItemFromBasket = async (itemId) => {
    const response = await commerce.cart.remove(itemId)
    setBasket(response.cart);
  }


  return <Router>
    <div>
      <Navbar basketItems={basket.total_items}/>
      <Switch>
        <Route exact path="/">
          <Products products={products} addProduct={addProduct}/>
        </Route>
        <Route exact path="/basket">
          <Basket
            basket={basket}
            updateProduct={updateProduct}
            handleEmptyBasket={handleEmptyBasket}
            removeItemFromBasket={removeItemFromBasket}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>
}

export default App;
