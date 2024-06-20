export const initialState={
  cart:[],
  orders:[],
};

export const reducer=(state=initialState,action)=>{
  switch(action.type){
    case "ADD_TO_CART":{
      const {cart}=state;
      const updatedCart=[...cart,action.payload];
      return{ 
          ...state,
          cart:updatedCart,
      }
    }

    case "REMOVE_FROM_CART":{
      const productIdToBeRemove=action.payload.pid;
      const {cart}=state;

      const filteredCart=cart.filter(item => (item.id!==productIdToBeRemove))
      return{
        ...state,
        cart:filteredCart,
      }
    }

    case "PLACE_ORDER": {
  const newOrder = {
    id: new Date().toISOString(), 
    items: [...state.cart]
  };
  return {
    ...state,
    orders: [...state.orders, newOrder],
    cart: []
  };
}

    case "CANCEL_ORDER": {
  const orderIdToCancel = action.payload.orderId;
  const updatedOrders = state.orders.filter(order => order.id !== orderIdToCancel);
  return {
    ...state,
    orders: updatedOrders,
  };
}
    
    default:return state;
  }
}