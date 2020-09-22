import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const SET_ITEMS = 'SET_ITEMS';
const CREATE_ITEM = 'CREATE_ITEM';
const DESTROY_ITEM = 'DESTROY_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';

const setItems = (items) => {
  return  {
    type: SET_ITEMS,
    items
  }
}

export const getItems = () => {
  return async(dispatch) => {
    const response = await axios.get('/api/items');
    dispatch(setItems(response.data));
  }
}

const reducer = (state = [], action) => {
  if (action.type === SET_ITEMS){
    state = action.items;
  }
  return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
