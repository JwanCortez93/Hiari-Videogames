import { Metadata } from "next";
import Footer from "../shared/components/footer";
import NavBar from "../shared/components/nav-bar";

export const metadata: Metadata = {
  title: "Hiari About | Juan Martin Cortez",
  openGraph: {
    url: "https://hiari.com/about",
    title: "Hiari About | Juan Martin Cortez",
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
          <h1>About Page</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}