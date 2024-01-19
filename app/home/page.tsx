import style from "./modules/page.module.css";
import { Metadata } from "next";
import NavBar from "../shared/components/nav-bar";
import Menu from "./components/menu";
import Cards from "./components/cards";
import Footer from "../shared/components/footer";
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
  const { container } = style;
  return (
    <>
      <div style={{ position: "fixed", zIndex: "10000", width: "100%" }}>
        <NavBar />
      </div>
      <main>
        <Poster />
        <div className={container}>
          <Menu />
          <Cards />
        </div>
      </main>
      <Footer />
    </>
  );
}
