import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route} from "react-router-dom";
import SignIn from "./components/auth/SignIn"
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <h3 className="text-primary">TodoQu</h3>
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/" component={Dashboard}/>
    
    </BrowserRouter>
   
  );
}

export default App;
