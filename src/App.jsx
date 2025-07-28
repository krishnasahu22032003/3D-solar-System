import GalaxyScene from "./components/GalaxyScene";
import Navbar from "./components/Navbar"
import BackgroundMusic from "./components/BackgroundMusic";
import EnterGalaxy from "./components/EnterGalaxy";
import ExploreMissions from "./components/ExploreMissions";
import PlanetExplorer from "./components/PlanetExplorer";
import GalacticIntelligence from "./components/GalacticIntelligence";
import CTASection from "./components/CTASection ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative w-screen overflow-x-hidden bg-black text-white">
      {/* Background music always plays */}
      <BackgroundMusic/>

      {/* Fixed navbar on top */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Scrollable content starts here */}
      <div className="relative z-10">
        {/* Hero + GalaxyScene (full screen height) */}
        <section className="h-screen w-full relative z-0">
          <GalaxyScene />
        </section>

        {/* EnterGalaxy Section */}
        <section className="min-h-screen w-full relative z-10">
          <EnterGalaxy />
        </section>
        <ExploreMissions/>
        <PlanetExplorer/>
        <GalacticIntelligence/>
        <CTASection/>
        <Footer/>
      </div>
    </div>
  );
}
