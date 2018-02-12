import React from 'react';
import Counter from '../containers/Counter';
import Name from '../containers/Name';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';
import DoubleAddCounter from '../containers/DoubleAddCounter';
import DisplayName from '../containers/DisplayName';
import CounterApp from './CounterApp'
import NameApp from './NameApp'

const App = () => {
  return (

    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-3 is-vertical">
            <article className="tile is-child notification is-primary">
              <NameApp></NameApp>
            </article>
          </div>
          <div className="tile is-parent  is-3 is-vertical">
            <article className="tile is-child notification is-warning">
              <CounterApp></CounterApp>
            </article>
          </div>
        </div>
      </div>
    </div>

  )
}
export default App;
