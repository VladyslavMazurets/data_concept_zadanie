import React, { useState } from "react";

import './App.scss';
import Weblayer from "./Weblayer/Weblayer";

function App() {
  const [btnClick, setBtnClick] = useState(false);

  return (
    <>
     <div className="home">
            <button type="button" className="home__btn"
          onClick={() => setBtnClick(prevState => !prevState)}>
            Click on me
          </button>
          {btnClick && <Weblayer setBtnClick={setBtnClick} />}
     </div>
    </>
  );
}

export default App;
