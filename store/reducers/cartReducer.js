import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/types";

const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      //const newItem = action.payload;
      let newItem = state.items.find(
        item =>
          action.payload.drink === item.drink &&
          action.payload.option === item.option
      );
      if (newItem) {
        newItem.quantity += 1;
        return {
          ...state,
          items: [...state.items]
        };
      }
      newItem = action.payload;
      newItem.quantity = 1;

      return {
        ...state,
        items: [newItem].concat(state.items)
      };

    case REMOVE_ITEM:
      const itemID = action.payload;
      return {
        ...state,
        items: state.items.filter(item => item !== itemID)
      };

    case CHECKOUT:
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};

export default cartReducer;
