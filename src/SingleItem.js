import React from 'react'
import {connect} from 'react-redux';

class SingleItem extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  render() {
    return (
      <p>SingleItem</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
