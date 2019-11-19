import { h, Component } from 'preact';
import { customStore } from './../store/customStore.js';
import { view } from 'z-preact-easy-state';

class LazyPage extends Component {
  btnClick() {
    console.log('Click');
    customStore.btnClicked += 1;
  }
  render() {
    return (
      <section>
        <h2>Lazy</h2>
        <p>Your favorite food is: {customStore.favFood}</p>
        <p>Button clicked: {customStore.btnClicked}</p>
        <button onClick={this.btnClick}>Click me</button>
      </section>
    );
  }
}

export default view(LazyPage);
