import { h, render, Component } from 'preact';
import Router from 'preact-router';
import { Home } from './pages/Home.js';
import { NavBar } from './components/navbar.js';
import { Pizza } from './pages/Pizza.js';
import { Test } from './pages/Test.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Home path="/" />
          <Pizza path="/pizza" />
          <Test path="/test" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.body);
