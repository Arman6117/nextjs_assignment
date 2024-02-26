
import HomeContent from "@/components/HomeContent/HomeContent";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="homeSection">
        <HomeContent/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </main>
  );
}
