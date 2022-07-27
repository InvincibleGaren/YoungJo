import React, { useState } from "react";

function App() {

  const [qty, setQty] = useState(0);

  const handleAdd = () => {
    setQty(qty+1)
    // console.log(qty)
  }

  const handleDec = () => {
    setQty(qty-1)
    // console.log(qty)
  }

  return (
    <div>
      <p>QTY : {qty}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
}

export default App;
