import { Component, h } from 'preact';
import { Suspense, lazy } from 'preact/compat';

const LazyPizza = lazy(() => import('./LazyPizza.js'));

export class Pizza extends Component {
  render() {
    return (
      <section>
        <h2>Pizza</h2>

        <Suspense fallback={<div>Loading...</div>}>
          <LazyPizza />
        </Suspense>
      </section>
    );
  }
}
