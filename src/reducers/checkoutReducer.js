export function checkoutReducer(state = [], action) {

    if(action.type === 'FETCH_PAYMENT') {
      return { ...state, fetchPayment: action.data }
    } 

  
    return state;
  }