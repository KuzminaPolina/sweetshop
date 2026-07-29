import { Link } from "react-router-dom";

function Sets() {
  return (
    <div>
      <h1>Welcome to the Premade Sets Page</h1>
      <nav className={`flex flex-col`}>
        <Link to="/">Home page</Link>
        <Link to="/sets">Premade Sets</Link>
      </nav>
    </div>
  );
}

export default Sets;
