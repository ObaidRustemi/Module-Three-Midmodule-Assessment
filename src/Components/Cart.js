import React from "react";
import "./products.css"

const Cart = ({ shoppingCart, subtotal, tax, total}) => {
  return (
    <section className="ShoppingCart">
      <h2>Cart</h2>
      <ul >
        {shoppingCart.map((product) => {
            // debugger
          const { id, name, price } = product;
          return (
            <li key={id}>
              {name}: ${price.toFixed(2)}
            </li>
          );
        })}
      </ul>
      <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
      <h3>Tax: ${tax.toFixed(2)}</h3>
      <h3>Total: ${total.toFixed(2)}</h3>
    </section>
  );
};

export default Cart;