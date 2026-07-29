import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Sweets Shop</h1>
      <nav className={`flex flex-col`}>
        <Link to="/">Home page</Link>
        <Link to="/sets">Premade Sets</Link>
      </nav>
    </div>
  );
}

export default Home;
