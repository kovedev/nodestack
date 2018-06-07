import { FETCH_CUSTOMERS, NEW_CUSTOMER } from '../actions/types';

const initialState = {
  customers: []
}

export default function(state = initialState, action){
  switch(action.type) {
    case FETCH_CUSTOMERS:
      return {
        ...state,
        customers: action.payload
      }
    case NEW_CUSTOMER:
      return {
        ...state,
        customers: action.payload
      }
    default:
      return state;
  }
}