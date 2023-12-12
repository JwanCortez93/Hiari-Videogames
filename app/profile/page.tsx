import { Metadata } from "next";
import Footer from "../shared/components/footer";
import NavBar from "../shared/components/nav-bar";

export const metadata: Metadata = {
  title: "Hiari Profile | Juan Martin Cortez",
  openGraph: {
    url: "https://hiari.com/profile",
    title: "Hiari Profile | Juan Martin Cortez",
    description: "",
    type: "website",
  },
};

export default function page() {
  return (
    <>
      <div style={{ position: "fixed", zIndex: "10000", width: "100%" }}>
        <NavBar />
      </div>
      <main>
        <div className="container">
          <h1>Profile Page</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
