import React from 'react'
import { Link } from 'react-router-dom';
import { addItem } from './store';
import { connect } from 'react-redux';


class SingleItem extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      price: '',
      description: ''
    };
    this.submit = this.submit.bind(this);
  }
  submit(event){
    event.preventDefault();
    this.props.addItem({name: this.state.name, price: this.state.price*1, description: this.state.description}, this.props.history);
  }
  render() {
    const { name, price, description } = this.state;
    const { submit } = this;
    return (
      <div class='form'>
        <h3>Add item to list</h3>
        <form onSubmit={ submit }>
          <label htmlFor='itemName'>Item name:</label>
          <input name='itemName' type='text' value={name} onChange={event => this.setState({ name: event.target.value })} />

          <label htmlFor='price'>Price:</label>
          <input name='price' type='number' value={price} onChange={event => this.setState({ price: event.target.value })} />

          <label htmlFor='description'>Notes:</label>
          <textarea name='description' value={description} onChange={event => this.setState({ description: event.target.value })} />
          <button type='submit'>Submit</button>
        </form>
        <Link to ='/items'>Cancel</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item, history) => {dispatch(addItem(item, history))},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
