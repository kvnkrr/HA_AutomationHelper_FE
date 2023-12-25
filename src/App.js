
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navigationbar } from './components/navigationbar';
import { Home } from './components/home';
import { Refuge } from './components/refuge';
import { Ookla } from './components/ookla';


/* main app function for home automation helper   */
function App() {
  return (
      <Router>
        <Navigationbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/refuge" element={<Refuge/>}/>
          <Route path="/ookla" element={<Ookla/>}/>
        </Routes>
      </Router>   
  );  
}
 
export default App;

