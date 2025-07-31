// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import AppRoutes from './AppRoutes.js'

function App() {
  const [isLogedInOrNot,setIsLogedInOrNot] = useState(false);
  return (
    // specifying the routes to be navigate 

      <BrowserRouter>
        <AppRoutes isLogedInOrNot={isLogedInOrNot} setIsLogedInOrNot={setIsLogedInOrNot}/>
      </BrowserRouter>
  
  );
}

export default App;
