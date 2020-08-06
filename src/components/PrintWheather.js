import React from 'react';

function PrintWheather({ wheather }) {
  const wheatherData = wheather.wheather
  if(wheatherData && wheatherData.main){
    // const name = wheatherData.name;
    // const main = wheatherData.main;
    const {name , main ,id} = wheatherData
    const {temp} = main
    //  const temp = (wheatherData && wheatherData.main && wheatherData.main.temp) || '';
  
    return wheather.loading ? (
      <h2>loading Page</h2>) : wheather.error ? (<h2> {wheather.error}</h2>) :
        (
          <ul>  
            <li>City : {name} </li>
            <li> Id : {id}</li>
            <li> temp : {temp}</li>
          </ul>
        )
  }
  else { return null }

};

export default PrintWheather
