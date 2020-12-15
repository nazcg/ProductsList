  
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Inventory from './Components/Inventory';
import InventoryDescription from './Components/InventoryDescription';
import './App.css';

function App() {
  return (
    <Router>
       
       
    <div className="container pt-4">

       <Route exact path ='/'   component = {Inventory} />
       <Route exact path ='/InventoryDescription'   component = {InventoryDescription} />
   </div>

 </Router>
  );
}

export default App;
