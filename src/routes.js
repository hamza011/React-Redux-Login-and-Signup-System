import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './routes.css';
import {Home} from './Components/Home/home';
import Login from './Components/Login/login';
import Signup from './Components/Signup/signup';
import Dashboard from './Components/Dashboard/dashboard';

const BasicExample = () => (
  <Router>
    <div>
      <ul className="tabs">
        <div className="tab-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/sign-up">SignUp</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
        </div>
      </ul>

      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/sign-up" component={Signup}/>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </Router>
)
export default BasicExample;