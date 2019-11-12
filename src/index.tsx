import { h, render, Component } from 'preact';

import Router from 'preact-router';
import { Home } from './pages/Home.js';
import { Pizza } from './pages/Pizza.js';
import { NavBar } from './components/navbar.js';

const Test = props => (
  <section>
    <h2>TEST</h2>
  </section>
);
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
