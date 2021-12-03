import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navigation/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
