import React from 'react';
import Name from '../containers/Name';
import DisplayName from '../containers/DisplayName';

const NameApp = () => {
  return (

    <div className="container">
      {/* <article className="tile is-8"> */}
      <Name></Name>
      {/* </article> */}
      
      <div className="row">
      {/* <article className="tile is-child notification is-warning"> */}
          <DisplayName></DisplayName>
        {/* </article> */}
      </div>
      </div>
     
  )
}
export default NameApp;
