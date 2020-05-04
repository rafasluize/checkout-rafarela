import { callApi } from "../utils/callApi";

export function fetchPayment(data) {
  return function(dispatch) {
    return callApi('POST', '/pagar', data, dispatch)
    .then( res => {
      return dispatch({
        type: 'FETCH_PAYMENT',
        data: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}