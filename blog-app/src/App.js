//import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import AllBlogs from "./Components/AllBlogs";
import { BrowserRouter, Route, Switch } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/allblogs' component={AllBlogs} />

          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
