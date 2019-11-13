import { h, Component } from 'preact';
import { customStore } from './../store/customStore.js';

export class Test extends Component {
  render() {
    return (
      <section>
        <h2>Test</h2>
        <p>Hello {customStore.name}</p>
        <p>Your favorite food is: {customStore.favFood}</p>
      </section>
    );
  }
}
