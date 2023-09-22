import React from 'react';

function Child({ showModal, onButtonClick }) {
  return (
    <div className="child">
      <h2>Child Component</h2>
      <button onClick={onButtonClick}>Show Modal</button>
    </div>
  );
}

export default Child;
