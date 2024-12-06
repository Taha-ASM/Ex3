import Mininav from "../components/Mininav";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Header from "../components/Header";
import Section from "../components/Section";
import Ads from "../components/Ads";
import Categorie from "../components/Categorie";
import Login from "../components/Login";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Mininav />
      <Navbar />
      <Search />
      <Header />
      <Section />
      <Ads />
      <Categorie />
      <Login />
      <Footer />
    </>
  );
}
