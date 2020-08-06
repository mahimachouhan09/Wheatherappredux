import React from 'react';

function History(history) {
  return <ul>
      { history.history.city.map(item =>
        <li>Searched data : {item}</li>)}
  </ul>
}

export default History