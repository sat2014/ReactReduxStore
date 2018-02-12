import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doubleAddCounter } from '../actions';
import { bindActionCreators } from 'redux';

class DoubleAddCounter extends Component {
  constructor(props) {
        super(props);
      }
   render() {
     return (
           <div className="container">
            <form>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" onClick={(e) => {e.preventDefault();this.props.dispatch(doubleAddCounter())}}>Add 2</button>
                </div>
              </div>
            </form>
            </div>
     )
   }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(doubleAddCounter, dispatch) }
}
export default connect(mapDispatchToProps)(DoubleAddCounter);