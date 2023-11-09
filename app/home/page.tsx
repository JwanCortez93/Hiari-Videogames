import { Metadata } from "next";
import NavBar from "../shared/nav-bar";
import Menu from "./components/menu";
import Cards from "./components/cards";
import Footer from "../shared/footer";
import Poster from "./components/poster";

export const metadata: Metadata = {
  title: "Hiari Videogames | Juan Martin Cortez",
  openGraph: {
    url: "https://hiari.com",
    title: "Hiari Videogames | Juan Martin Cortez",
    description: "",
    type: "website",
  },
};

export default function page() {
  return (
    <>
      <NavBar />
      <main>
        <div className="container">
          <Poster />
          <Menu />
          <Cards />
        </div>
      </main>
      <Footer />
    </>
  );
}
