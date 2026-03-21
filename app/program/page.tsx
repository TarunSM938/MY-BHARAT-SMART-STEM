import ProgramsHero from "../../components/programs/ProgramsHero";
import ChooseYourProgram from "../../components/programs/ChooseYourProgram";
import StemLabSetup from "../../components/programs/StemLabSetup";
import ProgramsCTA from "../../components/programs/ProgramsCTA";
import Footer from "../../components/Footer";

export default function ProgramPage() {
  return (
    <main>
      <ProgramsHero />
      <ChooseYourProgram />
      <StemLabSetup />
      <ProgramsCTA />
      <Footer />
    </main>
  );
}