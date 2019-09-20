import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import * as ATYPES from './constants.js';
// state for start
const initialState = {
  userData: {
    authorized: false
  },

  // Search
  searchStatus: {
    status: false
  },

  // Fetch

  products: {
    cards: []
  },
  // Shipping details status
  shippingDetailsStatus: {
    status: false
  },

  // products in the cart
  cartItems: {
    totalItems: 3,
    totalPrice: function() {
      return this.items.reduce((acc, el) => acc += el.price)
    },
    grandTotalPrice: 2000,
    items: [
      {
        id: 1,
        name: 'Apple Watch Series 5',
        details: 'Aluminum Case with Alaskan Blue Sport Loop',
        image: '/static/img/watch/Apple_Watch_Series_5/Gold_Aluminum_Case_with_Sport_Band/Alaskan_Blue/1.jpg',
        quantity: 1,
        color: 'blue',
        // size: 40,
        // connectivity: 'GPS',
        price: 400
      },
      {
        id: 2,
        name: 'Apple Watch Series 5_1',
        details: 'Aluminum Case with Alaskan Blue Sport Loop',
        image: '/static/img/watch/Apple_Watch_Series_5/Gold_Aluminum_Case_with_Sport_Band/Alaskan_Blue/2.jpg',
        quantity: 1,
        color: 'red',
        // size: 40,
        // connectivity: 'GPS',
        price: 500
      },
      {
        id: 3,
        name: 'Apple Watch Series 5_2',
        details: 'Aluminum Case with Alaskan Blue Sport Loop',
        image: '/static/img/watch/Apple_Watch_Series_5/Gold_Aluminum_Case_with_Sport_Band/Alaskan_Blue/3.jpg',
        quantity: 1,
        color: 'yellow',
        // size: 40,
        // connectivity: 'GPS',
        price: 600
      }
    ]
  }
};

function userReducer(state = initialState.userData, action) {
  const { type, payload } = action;
  switch (type) {
    case ATYPES.SET_AUTHORIZED:
      return {
        ...state,
        authorized: payload
      };
    case ATYPES.SET_USER:
      return {
        ...state,
        userData: payload
      };
    default:
      return state;
  }
}

// Search
function searchReducer(state = initialState.searchStatus, action) {
  const {type, payload} = action;
  switch (type) {
    case ATYPES.SET_SEARCH_STATUS:
      return {
        ...state,
        status: payload
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

// Add_to_bag
function addToBagReducer(state = initialState.cartItems, action) {
  const {type, payload} = action;
  switch (type) {
    case ATYPES.ADD_TO_BAG:
      return {
        ...state,
        items: payload
      };
    case ATYPES.CHANGE_QUANTITY:
      state.items.forEach((element, index) => {
        if (element.id === payload.id) {
          element.quantity = payload.quantity
        }
      });
      return {
        ...state
      };
    default:
      return state
  }
}

// Shipping details status
function shippingDetailsReducer(state = initialState.shippingDetailsStatus, action) {
  const {type, payload} = action;
  switch (type) {
    case ATYPES.SET_SHIPPING_DETAILS_STATUS:
      return {
        ...state,
        status: payload
      };
    default:
      return state
  }
}

export const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  user: userReducer,
  searchStatus: searchReducer,
  products: fetchReducer,
  shippingDetailsStatus: shippingDetailsReducer,
  addToBag: addToBagReducer
});
