
import HomeContent from "@/components/HomeContent/HomeContent";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="homeSection">
        <HomeContent/>
      </section>
    </main>
  );
}
