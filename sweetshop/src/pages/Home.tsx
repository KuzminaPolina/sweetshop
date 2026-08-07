import { useMediaQuery } from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import TopBanner from "../components/SwiperBanner";
import Hero from "../components/MainHero";

function Home() {
  const isTabletUp = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <header>
        {isTabletUp && <TopBanner />}
        <h1>Welcome to the Sweets Shop</h1>
        <nav className={`flex flex-col`}>
          <Link to="/">Home page</Link>
          <Link to="/sets">Premade Sets</Link>
        </nav>
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
}

export default Home;
