import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store, { getItems } from './store';

import ItemList from './ItemList';
import SingleItem from './SingleItem';
import CreateItem from './CreateItem';


class _App extends React.Component{
  constructor(){
    super();
  }
  componentDidMount(){
    this.props.load();
  }
  render(){
    return(
      <Router>
        <div id='main'>
          <header>
            <h1>Shopping List</h1>
            <ul className='links'>
              <li>
                <Link to ='/'>Home</Link>
              </li>
              <li>
                <Link to ='/items'>All items</Link>
              </li>
              <li>
                <Link to ='/create'>Add item to list</Link>
              </li>
            </ul>
          </header>
          <div id='content'>
            <div id='totalprice'>
              <p>Total price of items on list: ${this.props.total}</p>
            </div>
            <Route path='/items' exact component={ ItemList }/>
            <Route path='/create' exact component={ CreateItem }/>
            <Route path='/items/:id' component={ SingleItem }/>
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  const totalPrice = state.reduce((acc, item) => acc + item.price, 0);
  return {
    total: totalPrice
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(getItems());
    }
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(_App);

ReactDom.render(<Provider store = { store }><App /></Provider>, document.querySelector('#root'));
