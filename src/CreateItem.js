import React from 'react'
import {connect} from 'react-redux';

class CreateItem extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  render() {
    return (
      <p>CreateItem</p>
    )
  }
}


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
