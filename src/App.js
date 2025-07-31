// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import AppRoutes from './AppRoutes.js'

function App() {
  const [isLogedInOrNot,setIsLogedInOrNot] = useState(false);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


    // specifying the routes to be navigate 

      <BrowserRouter>
        <AppRoutes isLogedInOrNot={isLogedInOrNot} setIsLogedInOrNot={setIsLogedInOrNot}/>
      </BrowserRouter>
  
  );
}

export default App;
