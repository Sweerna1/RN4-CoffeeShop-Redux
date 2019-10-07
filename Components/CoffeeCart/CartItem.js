import React, { Component } from "react";
import { connect } from "react-redux";

import { removeItemFromCart } from "../../store/actions/coffeeActions";
// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "white", marginLeft: 16 }}> {item.drink} </Text>
          <Text note style={{ marginLeft: 16 }}>
            {item.option}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "white" }}>{item.quantity}</Text>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => this.props.removeItemFromCart(item)}
          >
            <Icon name="trash" style={{ color: "white", fontSize: 21 }} />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: itemID => dispatch(removeItemFromCart(itemID))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
