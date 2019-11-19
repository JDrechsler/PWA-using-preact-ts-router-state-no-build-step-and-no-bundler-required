import { Component, h } from 'preact';
import { Suspense, lazy } from 'preact/compat';

const LazyPizzaComp = lazy(() => import('./LazyPizzaComp.js'));

export default class Pizza extends Component {
  render() {
    return (
      <section>
        <h2>Pizza</h2>

        <Suspense fallback={<div>Loading...</div>}>
          <LazyPizzaComp />
        </Suspense>
      </section>
    );
  }
}
