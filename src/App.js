import "./App.css";
import React from "react";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

class App extends React.Component {
  state = { shoppingCart: [] };

  addProduct = (product) => {
    this.setState((prevState) => {
      return { shoppingCart: [...prevState.shoppingCart, product] };
    });
  };
  render() {
    const { shoppingCart } = this.state;
    let subtotal = 0;
    let tax = 0;
    let total = 0
    shoppingCart.forEach((product) => (subtotal += product.price));
    tax = subtotal * .05
    total = subtotal + tax;
    console.log(this.state.shoppingCart);
    return (
      <div className="appDiv">
        <Products addProduct={this.addProduct} />
        <Cart subtotal={subtotal} tax={tax} total={total} shoppingCart={shoppingCart} />
        <Checkout total={total}/>
      </div>
    );
  }
}

export default App;
