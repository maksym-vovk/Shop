import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import * as ATYPES from './constants.js';
// state for start
const initialState = {
  userData: {
    authorized: false
  },

  // Search
  search: {
    searchStatus: false,
    searchInput: ''
  },

  // Fetch
  products: {
    cards: []
  },

  // Shipping details status
  shippingDetailsStatus: {
    status: false
  },

  // Cart
  cart: {
    totalPrice: 0,
    totalItems: 0,
    deliveryPrice: 0,
    grandTotalPrice: 0,
    items: []
  },

  // Order
  order: {}
};

function userReducer(state = initialState.userData, action) {
  const {type, payload} = action;
  switch (type) {
    case ATYPES.SET_MESSAGE_USER:
      return {
        ...state,
        update_message: payload
      };
    case ATYPES.UPDATE_USER:
      return {
        ...state,
        update_message: payload.update_message,
        userData: payload.user ? payload.user : state.userData
      };
    case ATYPES.UPDATE_USER_PASSWORD:
      return {
        ...state,
        update_message: payload.update_message,
        userData: payload.user ? payload.user : state.userData
      };
    case ATYPES.SET_USER_ORDERS:
      return {
        ...state,
        userOrders: payload
      };
    case ATYPES.SET_USER:
      return {
        ...state,
        authorized: true,
        userData: payload
      };
    case ATYPES.LOGOUT_USER:
      return {
        ...state,
        authorized: false,
        userData: null
      };
    default:
      return state;
  }
}

// Search
function searchReducer(state = initialState.search, action) {
  const {type, payload} = action;
  switch (type) {
    case ATYPES.SET_SEARCH_STATUS:
      return {
        ...state,
        searchStatus: payload
      };
    case ATYPES.SET_INPUT_VALUE:
      return {
        ...state,
        searchInput: payload
      };
    default:
      return state;
  }
}

// Fetch
function fetchReducer(state = initialState.products, action) {
  const {type, payload} = action;
  switch (type) {
    case ATYPES.SET_CARDS:
      return {
        ...state,
        cards: payload
      };
    case ATYPES.SET_CARD:
      return {
        ...state,
        card: payload
      };
    default:
      return state;
  }
}

// Cart
/* eslint-disable */
function cartReducer(state = initialState.cart, action) {
    const {type, payload} = action;
    switch (type) {
        case ATYPES.ADD_TO_CART:
            return {
                ...state,
                totalPrice: state.totalPrice + payload.price,
                items: [
                    ...state.items,
                    payload
                ]
            };
        case ATYPES.CHANGE_QUANTITY:
            return {
                ...state,
                items: state.items.map(item => item.cartId === payload.id ? {
                        ...item,
                        quantity: payload.newQuantity,
                        totalItemPrice: payload.newTotalItemPrice
                    } : {...item}
                ),
            };
        case ATYPES.CHANGE_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: payload.totalPrice,
            };
        case ATYPES.CHANGE_TOTAL_ITEMS:
            return {
                ...state,
                totalItems: payload.totalItems,
            };
            //delivery price
        case ATYPES.DELIVERY_PRICE:
            return  {
              ...state,
              deliveryPrice: payload
            };
            //grandTotalPrice = total product price + delivery price
        case ATYPES.GRAND_TOTAL_PRICE:
            return {
            ...state,
                grandTotalPrice: state.deliveryPrice + state.totalPrice
            };

        case ATYPES.REMOVE_FROM_CART:
            // Rework?
            const item = state.items.find(el => el.cartId === payload)
            return {
                ...state,
                totalPrice: state.totalPrice - item.price * item.quantity,
                items: state.items.filter(el => el.cartId !== payload)
            };
            //clear the cart after the order has been sent to the DB
            case ATYPES.CLEAR_CART:
                return {
                    ...initialState.cart
                };
        default:
            return state;
    }
}

/* eslint-enable */

// Save the order
function saveOrderReducer(state = initialState.order, action) {
  const {type, payload} = action;
  switch (type) {
    case ATYPES.SET_ORDER:
      return {
        ...payload
      };
    case ATYPES.CLEAR_ORDER:
      return {};
    default:
      return state
  }
}

export const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  user: userReducer,
  search: searchReducer,
  products: fetchReducer,
  cart: cartReducer,
  order: saveOrderReducer
});
