import { Metadata } from "next";
import Footer from "../shared/components/footer";
import NavBar from "../shared/components/nav-bar";

export const metadata: Metadata = {
  title: "Hiari Favorites | Juan Martin Cortez",
  openGraph: {
    url: "https://hiari.com/favorites",
    title: "Hiari Favorites | Juan Martin Cortez",
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
          <h1>Favorites Page</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
