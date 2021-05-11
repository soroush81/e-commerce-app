import './App.css';
import React, { useState, useEffect } from 'react';
import { Products, Navbar, Cart, Checkout } from './components'
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
    console.log(cart);
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }

  const handleUpdateCartQuantity = async (productId, quantity) => {
    const item = await commerce.cart.update(productId, {quantity});
    setCart(item.cart);
  }
  
const handleRemoveFromCart = async (productId) => {
  const item = await commerce.cart.remove(productId)
  setCart(item.cart)
}

const handleEmptyCart = async () => {
  console.log('test')
  const item = await commerce.cart.empty();
  console.log(item)
  setCart(item.cart)
}

  

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart}
            handleUpdateCartQuantity={handleUpdateCartQuantity}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout cart={cart} />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
