import React, {Component} from 'react';
import {connect} from 'react-redux';
import {displayName} from '../actions';
import {bindActionCreators} from 'redux';

class DisplayName extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: 'textval'
    // };
  }
  render() {
    return (
      <div className="container">
      <br />
        <form >
          <div className="field is-grouped">
            <div className="field">
              {/* <label className="label">Name</label> */}
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g., Ole Kristian"
                  onChange={event => {
                  //this.setState({value: event.target.value})
                  event.preventDefault();
                  this
                    .props
                    .dispatch(displayName(event.target.value))
                }}/>
                {/* <button
                  className="button is-primary"
                  type="onClick"
                  onClick={(e) => {
                  e.preventDefault();
                  this
                    .props
                    .dispatch(displayName(this.state.value))
                }}>Display Name</button> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(displayName, dispatch)
  }
}
export default connect(mapDispatchToProps)(DisplayName);
