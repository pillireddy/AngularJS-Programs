import React from 'react';
import ReactDOM from 'react-dom';

function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

