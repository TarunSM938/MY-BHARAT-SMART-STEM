import StemLabHero from "../../components/stemlab/StemLabHero";
import WhatIsIncluded from "../../components/stemlab/WhatIsIncluded";
import Packages from "../../components/stemlab/Packages";
import ImplementationProcess from "../../components/stemlab/ImplementationProcess";
import Footer from "../../components/Footer";

export default function StemLabPage() {
  return (
    <main>
      <StemLabHero />
      <WhatIsIncluded />
      <Packages />
      <ImplementationProcess />
      <Footer />
    </main>
  );
}