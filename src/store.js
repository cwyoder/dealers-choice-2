import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const SET_ITEMS = 'SET_ITEMS';
const CREATE_ITEM = 'CREATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
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

const _deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id
  }
}

export const deleteItem = (id) => {
  return async(dispatch) => {
    await axios.delete(`/api/items/${id}`);
    dispatch(_deleteItem(id));
  }
}

const _addItem = (item) => {
  return {
    type: CREATE_ITEM,
    item
  }
}

export const addItem = (item, history) => {
  return async(dispatch) => {
    const response = await axios.post('/api/items', item);
    dispatch(_addItem(response.data));
    history.push('/items');
  }
}

const _updateItem = (item) => {
  return {
    type: UPDATE_ITEM,
    item
  }
}

export const updateItem = (item, history) => {
  return async(dispatch) => {
    const response = await axios.put(`/api/items/${item.id}`, item);
    dispatch(_updateItem(response.data));
    history.push('/items');
  }
}

const reducer = (state = [], action) => {
  if (action.type === SET_ITEMS){
    state = action.items;
  }
  if (action.type === DELETE_ITEM){
    state = state.filter(item => item.id !== action.id*1)
  }
  if (action.type === CREATE_ITEM){
    state = [...state, action.item];
  }
  if (action.type === UPDATE_ITEM){
    state = state.map(item => item.id === action.item.id ? action.item : item);
  }
  return state;
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
