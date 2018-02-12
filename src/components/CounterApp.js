import React from 'react';
import Counter from '../containers/Counter';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';
import DoubleAddCounter from '../containers/DoubleAddCounter';

const CounterApp = () => {
  return (
    <div className="container">
      <Counter></Counter><br />
      <div className="columns">
        <div className="column is-1">
          <AddCounter></AddCounter>
        </div>
        <div className="column is-1">
          <DoubleAddCounter></DoubleAddCounter>
        </div>
        <div className="column is-1">
          <RemoveCounter></RemoveCounter>
        </div>      
      </div>
      </div>
  )
}
export default CounterApp;