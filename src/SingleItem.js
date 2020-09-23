import React from 'react'
import { connect } from 'react-redux';
import { updateItem } from './store';
import { Link } from 'react-router-dom';

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
  componentDidMount(){
    const item = this.props.items.find(it => {
      return it.id === this.props.match.params.id*1;
    })
    if (item){
      this.setState({name: item.name, price: item.price, description: item.description});
    }
  }
  submit(event){
    event.preventDefault();
    console.log(this.props.match.params.id);
    this.props.updateItem({name: this.state.name, id: this.props.match.params.id, price: this.state.price*1, description: this.state.description}, this.props.history);
  }
  render() {
    const { name, price, description } = this.state;
    const { submit } = this;
    console.log(this.props.history);
    return (
      <div class='form'>
        <h3>Edit item</h3>
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
    items: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateItem: (item, history) => {dispatch(updateItem(item, history))},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
