import { h, Component } from 'preact';
import { Link } from 'preact-router';

export const NavBar = () => (
  <header>
    <nav>
      <Link activeClassName="active" href="/">
        Home
      </Link>
      <Link activeClassName="active" href="/pizza">
        Pizza
      </Link>
      <Link activeClassName="active" href="/test">
        Test
      </Link>
    </nav>
  </header>
);
