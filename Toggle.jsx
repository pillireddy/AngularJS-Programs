import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ToggleMessage() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Message
      </button>
      {show && <p>This is a toggleable message.</p>}
    </div>
  );
}

ReactDOM.render(<ToggleMessage />, document.getElementById('root'));


