import React from 'react';
import Navigation from "./componets/Navigation"
import RussianBooks from "./componets/RussianBooks"
import RussianGifts from "./componets/RussianGifts"
import AdminsPages from "./componets/AdminsPage"
import './App.css';


function App() {
  return (
    <div className="App">
<Navigation />
{/* <RussianBooks />
<RussianGifts /> */}
<AdminsPages />
    </div>
  );
}

export default App;
