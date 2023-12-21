import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import "./Home.scss";

function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Features />
      <Footer />
    </>
  );
}

export default Home;
