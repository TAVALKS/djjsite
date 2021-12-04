import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navigation/Navbar';
import CategoryDetail from './components/Category/CategoryDetail';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/category/:id" exact component={CategoryDetail}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
