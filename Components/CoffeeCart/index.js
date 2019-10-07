import React, { Component } from "react";
import { connect } from "react-redux";

import { checkoutCart } from "../../store/actions/coffeeActions";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

class CoffeeCart extends Component {
  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {cartItems}
        <Button full danger onPress={() => this.props.checkoutCart()}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});

const mapDispatchToProps = dispatch => {
  return {
    checkoutCart: () => dispatch(checkoutCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeCart);
