import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>Show Modal: {showModal ? 'true' : 'false'}</p>
      <Child showModal={showModal} onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Parent;
