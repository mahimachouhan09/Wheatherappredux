import React from 'react';

function PrintWheater({ wheather }) {
  const name = wheather.wheather.name;
  const main=wheather.wheather.main;

  return wheather.loading ? (
    <h2>loading Page</h2>) : wheather.error ? (<h2> {wheather.error}</h2>) :
      (<ul>
        {console.log(main)}

        <li>City : {name} </li>
        {/* <li> Id : {wheather.wheather.id}</li> */}
          
      </ul>
      )
};

export default PrintWheater