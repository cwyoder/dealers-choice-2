import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { deleteItem } from './store';

const ItemList = ({items, destroy}) => {
  console.log(items);
  return (
    <div class='item-list'>
      <ul>
        {
          items.map(item => {
            return (
              <li key={item.id}>
                <Link to={`/items/${item.id}`}>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{item.description}</p>
                </Link>
                <button onClick={ ()=> destroy(item.id) }>Delete</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    destroy: (item, history) => dispatch(deleteItem(item, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
