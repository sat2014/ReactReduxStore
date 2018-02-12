import React from 'react';
import Counter from '../containers/Counter';
import Name from '../containers/Name';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';
import DoubleAddCounter from '../containers/DoubleAddCounter';
import DisplayName from '../containers/DisplayName';
import CounterApp from './CounterApp'
import NameApp from './NameApp'
import ItemList from '../containers/ItemList';

const App = () => {
  return (
    <div className="container">
      <div className="box">
        <h1 className="title is-1 is-spaced ">
          React-Redux-Store: A Demo
        </h1>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile">
            <div className="tile is-parent is-2 is-vertical">
              <article className="tile is-child notification is-primary">
                <NameApp></NameApp>
              </article>
            </div>
            <div className="tile is-parent  is-2 is-vertical">
              <article className="tile is-child notification is-warning">
                <CounterApp></CounterApp>
              </article>
            </div>
            <div className="tile is-parent  is-2 is-vertical">
              <article className="tile is-child notification is-success">
                <ItemList></ItemList>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default App;
