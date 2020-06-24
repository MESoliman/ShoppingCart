import {
  ADD_PRODUCT_CART,
  GET_ITEMS_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_ITEM,
} from "../actions/types";

const initialState = {
  itemsInCart: 0,
  cartCost: 0,
  products: {
    0: {
      id: 0,
      name: "woodley leather jacket",
      image: "/images/1.jpg",
      brand: "WULFUL",
      price: 199.0,
      quantity: 0,
      inCart: false,
    },
    1: {
      id: 1,
      name: "Slim Chino Pant",
      image: "/images/2.jpg",
      brand: "Volcom",
      price: 25.5,
      quantity: 0,
      inCart: false,
    },
    2: {
      id: 2,
      name: "Chelsea Boot",
      image: "/images/3.jpg",
      brand: "GIFENNSE",
      price: 88.0,
      quantity: 0,
      inCart: false,
    },
    3: {
      id: 3,
      name: "Polo Shirt",
      image: "/images/4.jpg",
      brand: "Polo Ralph Lauren",
      price: 30.0,
      quantity: 0,
      inCart: false,
    },
    4: {
      id: 4,
      name: "Grand Court Sneaker",
      image: "/images/5.jpg",
      brand: "Adidas",
      price: 41.0,
      quantity: 0,
      inCart: false,
    },
    5: {
      id: 5,
      name: "Pima Cotton Jersey",
      image: "/images/6.jpg",
      brand: "Lacoste",
      price: 30.0,
      quantity: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  let productSelected = "";
  switch (action.type) {
    case ADD_PRODUCT_CART:
      productSelected = { ...state.products[action.payload] };
      productSelected.quantity += 1;
      productSelected.inCart = true;
      return {
        ...state,
        itemsInCart: state.itemsInCart + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case GET_ITEMS_CART:
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.quantity += 1;
      return {
        ...state,
        itemsInCart: state.itemsInCart + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      let subTotal = 0;
      let updatedItemsInCart = 0;
      if (productSelected.quantity === 0) {
        productSelected.quantity = 0;
        subTotal = state.cartCost;
        updatedItemsInCart = state.itemsInCart;
      } else {
        productSelected.quantity -= 1;
        subTotal = state.cartCost - state.products[action.payload].price;
        updatedItemsInCart = state.itemsInCart - 1;
      }

      return {
        ...state,
        itemsInCart: updatedItemsInCart,
        cartCost: subTotal,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case REMOVE_ITEM:
      productSelected = { ...state.products[action.payload] };
      let itemNumber = productSelected.quantity;
      productSelected.quantity = 0;
      productSelected.inCart = false;
      return {
        ...state,
        itemsInCart: state.itemsInCart - itemNumber,
        cartCost: state.cartCost - itemNumber * productSelected.price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    default:
      return state;
  }
};
