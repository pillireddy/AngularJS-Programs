import React from 'react';
import ReactDOM from 'react-dom';

function ListComponent() {
  const fruits = ['Apple', 'Banana', 'Orange'];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<ListComponent />, document.getElementById('root'));

