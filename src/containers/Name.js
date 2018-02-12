import React, { Component } from 'react';
import { connect } from 'react-redux';

class Name extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="cotainer">
        <div className="title">
          <h1>
          {(this.props.name!='') ? 'Hello ' +this.props.name+'!':''}    <br />    
           </h1> 
        </div>
    </div>
    )
  }
}
function mapStateToProps(state){
  return {
    name: state.displayNameReducer,
  };
}
export default connect(mapStateToProps)(Name);