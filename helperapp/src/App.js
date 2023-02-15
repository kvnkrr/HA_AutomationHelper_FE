
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navigationbar } from './components/navigationbar';
import { Home } from './components/home';
import { Refuge } from './components/refuge';



function App() {
  return (
      <Router>
        <Navigationbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/refuge" element={<Refuge/>}/>
        </Routes>
      </Router>  
  );
}

export default App;

