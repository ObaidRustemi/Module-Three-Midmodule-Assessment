import React, { Component } from "react";

class Checkout extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    creditCard: "",
    zipCode: "",
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { total } = this.props;
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    if (!firstName || !lastName || !email) {
      window.alert("Input is not valid");
    } else if (creditCard.length !== 16) {
      window.alert("Credit card number is not valid");
    } else if (zipCode.length !== 5) {
      window.alert("Zip code is not valid");
    } else {
      window.alert(
        `Purchase complete! You will be charged $${total.toFixed(2)}`
      );
    }
  };

  render() {
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    return (
      <section onSubmit={this.handleSubmit} className="Checkout">
        <h3>Checkout</h3>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            onChange={this.handleInput}
            value={firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            onChange={this.handleInput}
            value={lastName}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            onChange={this.handleInput}
            value={email}
          />
          <label htmlFor="creditCard">Credit Card</label>
          <input
            id="creditCard"
            name="creditCard"
            onChange={this.handleInput}
            value={creditCard}
          />
          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            name="zipCode"
            onChange={this.handleInput}
            value={zipCode}
          />
          <button>Buy Now</button>
        </form>
      </section>
    );
  }
}

export default Checkout;
