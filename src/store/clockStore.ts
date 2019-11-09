import { store } from 'z-preact-easy-state';

const clockStore = store({
  num: 0,
  clockIntervalIsRunning: false
});

export default clockStore;
