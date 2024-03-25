import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobsListings from "./components/JobsListings";
import ViewJobs from "./components/ViewJobs";
import Jobs from "./components/Jobs";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobsListings isHome={true} />
      <ViewJobs />
    </div>
  );
};

export default App;
