import React from 'react';
import Navigation from "./componets/Navigation"
import RussianBooks from "./componets/RussianBooks"
import RussianGifts from "./componets/RussianGifts"
import './App.css';


function App() {
  return (
    <div className="App">
<Navigation />
<RussianBooks />
<RussianGifts />
    </div>
  );
}

export default App;
