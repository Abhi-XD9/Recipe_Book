import logo from './logo.svg';
import './App.css';
import Mainpage from './Components/Mainpage';
import {Route,Routes} from 'react-router-dom';
import Mealinfo from './Components/Mealinfo';
import Mealcards from './Components/Mealcards';




function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Mainpage/>}></Route>
      <Route path='/:mealid' element={<Mealinfo/>}></Route>
      <Route path='/menu' element={<Mealcards/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
