import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navigation/Navbar';
import CategoryDetail from './components/Category/CategoryDetail';
import PostDetail from './components/Posts/PostDetail';
import MainNavBar from './components/Mainmenu/Mainmenu';
import Header from './components/Navigation/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/record/:id/" exact component={PostDetail} />
          <Route path="/category/:id/" exact component={CategoryDetail} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
