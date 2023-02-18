import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users/ronaldo">Ronaldo7</Link>
      <Link to="/users/messi">Messi10</Link>
    </nav>
  );
}

export default Nav
