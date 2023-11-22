import style from "./modules/page.module.css";
import Footer from "@/app/shared/components/footer";
import NavBar from "@/app/shared/components/nav-bar";
import { getVideogameById, getVideogameScreenshots } from "@/app/shared/videogames";
import { Metadata } from "next";
import DetailCard from "./components/detail-card";

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
  const screenshots = await getVideogameScreenshots(params.slug)
  const { main, container } = style;
  return (
    <>
      <NavBar />
      <main id={main}>
        <div className={container}>
        <h1>This is {videogame.name}'s page</h1>
        <DetailCard videogame={videogame} screenshots={screenshots}/>
      </div>
      </main>
      <Footer/>
    </>
  );
}
