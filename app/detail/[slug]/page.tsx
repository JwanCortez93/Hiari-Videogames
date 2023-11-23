import style from "./modules/page.module.css";
import Footer from "@/app/shared/components/footer";
import NavBar from "@/app/shared/components/nav-bar";
import {
  getVideogameById,
  getVideogameScreenshots,
} from "@/app/shared/videogames";
import { Metadata } from "next";
import DetailCard from "./components/detail-card";
import Test from "./components/test";

type Props = {
  params: { slug: string };
};

export const metadata: Metadata = {
  title: "Hiari Videogame Detail | Juan Martin Cortez",
  openGraph: {
    url: `https://hiari.com/detail/:id`,
    title: "Hiari Videogames Detail | Juan Martin Cortez",
    description: "",
    type: "website",
  },
};

export default async function page({ params }: Props) {
  const videogame = await getVideogameById(params.slug);
  const screenshots = await getVideogameScreenshots(params.slug);
  const { main, container, background } = style;
  return (
    <>
      <NavBar />
      <main id={main}>
        <div style={{backgroundColor:"black"}}>
          <img
          src={videogame.background_image}
          alt="Background"
          id={background}></img>
        </div>
        <div className={container}>
          <DetailCard videogame={videogame} screenshots={screenshots} />
          {/* <Test /> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
