import { h } from 'preact';
import { Link } from 'preact-router';

export const NavBar = () => (
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/pizza">Pizza</a>
      <a href="/test">Test</a>
      <a href="/lazy">Lazy</a>
      <a href="/ai">AI</a>
    </nav>
  </header>
);
