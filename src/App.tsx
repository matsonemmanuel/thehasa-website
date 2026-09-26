import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ProofInNumbers from "./sections/ProofInNumbers";
import WhoWillHoldTheBaby from "./sections/WhoWillHoldTheBaby";
import HowItWorks from "./sections/HowItWorks";
import Story from "./sections/Story";
import CoFounder from "./sections/CoFounder";
import ChildcarePriority from "./sections/ChildcarePriority";
import Partners from "./sections/Partners";
import WaysToJoin from "./sections/WaysToJoin";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <ProofInNumbers />
        <WhoWillHoldTheBaby />
        <HowItWorks />
        <Story />
        <CoFounder />
        <ChildcarePriority />
        <Partners />
        <WaysToJoin />
      </main>

      <Footer />
      
    </div>
  );
}

export default App;