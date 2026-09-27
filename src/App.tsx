import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import ProofInNumbers from "./sections/ProofInNumbers";
import WhoWillHoldTheBaby from "./sections/WhoWillHoldTheBaby";
import HowItWorks from "./sections/HowItWorks";
import Story from "./sections/Story";
import CoFounder from "./sections/CoFounder";
import ChildcarePriority from "./sections/ChildcarePriority";
import Partners from "./sections/Partners";
import WaysToJoin from "./sections/WaysToJoin";

import OurStory from "./sections/OurStory";
import About from "./pages/About";
import TeamGovernance from "./pages/TeamGovernance";
import WhoWeServe from "./pages/WhoWeServe";
import OurModel from "./pages/OurModel";
import WhatWeDo from "./pages/WhatWeDo";
import NewsStories from "./pages/NewsStories";
import PartnersSustainability from "./pages/PartnersSustainability";
import GetInvolved from "./pages/GetInvolved";

function Home() {
  return (
    <>
      <Hero />
      <ProofInNumbers />
      <WhoWillHoldTheBaby />
      <HowItWorks />
      <Story />
      <CoFounder />
      <ChildcarePriority />
      <Partners />
      <WaysToJoin />
    </>
  );
}



function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Home />} />

          {/* About Us */}
          <Route path="/about" element={<About />} />

          {/* About Us → Our Story */}
          <Route path="/about/our-story" element={<OurStory />} />

          {/* Temporary placeholders */}
          <Route
            path="/about/team"
            element={<TeamGovernance />}
          />

          <Route
            path="/about/who-we-serve"
            element={<WhoWeServe />}
          />

          <Route
            path="/model"
            element={<OurModel />}
          />

          <Route
            path="/what-we-do"
            element={<WhatWeDo />}
          />

          <Route
            path="/impact/news-stories"
            element={<NewsStories /> }
          />

          <Route
            path="/impact/partners-sustainability"
            element={<PartnersSustainability />}
          />

          <Route
            path="/get-involved"
            element={<GetInvolved />}
          />

          <Route
            path="/join-a-course"
            element={<div className="min-h-screen p-10">Join a Course</div>}
          />

          <Route
            path="/contact"
            element={<div className="min-h-screen p-10">Contact</div>}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;