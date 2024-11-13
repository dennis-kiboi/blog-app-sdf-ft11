import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="blog-header">
      <h1>React Blog</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}