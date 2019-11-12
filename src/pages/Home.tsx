import { Component, h } from 'preact';

export class Home extends Component {
  // Lifecycle: Called whenever our component is created
  componentDidMount() {
    console.log('Home did mount');
  }

  state = {
    myName: ''
  };

  onInput = ev => {
    this.setState({
      myName: ev.target.value
    });
  };

  render() {
    return (
      <section>
        <h2>Home</h2>

        <input
          type="text"
          onInput={this.onInput}
          placeholder="Enter your name"
        />
        <p>Hallo {this.state.myName}!</p>
      </section>
    );
  }
}
