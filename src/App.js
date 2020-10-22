import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SignIn from "./components/auth/SignIn"
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <h3 className="text-primary">TodoQu</h3>
    <Switch>
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/" component={Dashboard}/>
    
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;
