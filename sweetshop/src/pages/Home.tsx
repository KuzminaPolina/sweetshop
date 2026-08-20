import { useMediaQuery } from "../hooks/useMediaQuery";
import TopBanner from "../components/SwiperBanner";
import Hero from "../components/MainHero";
import Offers from "../components/Offers";
import Menu from "../components/Navigation";

function Home() {
  const isTabletUp = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <header>
        {isTabletUp && <TopBanner />}
        <h1 className="sr-only">Welcome to the Sweets Shop</h1>
        <Menu />
      </header>
      <main>
        <Hero />
        <Offers />
      </main>
    </>
  );
}

export default Home;
