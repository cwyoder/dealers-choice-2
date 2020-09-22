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
          <div id='header'>
            <h1>Shopping List</h1>
            <ul className='links'>
              <li>
                <Link to ='/'>Home</Link>
              </li>
              <li>
                <Link to ='/items'>All items</Link>
              </li>
              <li>
                <Link to ='/items/create'>Add item to list</Link>
              </li>
            </ul>
          </div>
          <div id='content'>
            <Route path='/items' exact component= { ItemList }/>
            <Route path='/items/:id' component= { SingleItem }/>
            <Route path='/create' component= { CreateItem }/>
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      console.log('load!');
    }
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(_App);

ReactDom.render(<Provider store = { store }><App /></Provider>, document.querySelector('#root'));
