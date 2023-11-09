import { Metadata } from "next";
import Footer from "../shared/footer";
import NavBar from "../shared/nav-bar";

export const metadata: Metadata = {
  title: "Hiari Settings | Juan Martin Cortez",
  openGraph: {
    url: "https://hiari.com/settings",
    title: "Hiari Settings | Juan Martin Cortez",
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
          <h1>Settings Page</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
