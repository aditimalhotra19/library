import React from 'react';
import Login from './components/molecules/Login';
import Search from './components/molecules/Search';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          Library management
        </header>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
