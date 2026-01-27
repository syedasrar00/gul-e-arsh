import React from 'react';
import data from './data/data.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-amber-200">
      <Navbar companyName={data.company_info.name} />
      <main>
        <Hero data={data.hero_section} stats={data.stats} />
        <Destinations destinations={data.destinations} />
        <Packages packages={data.packages} />
        <Team team={data.team} />
      </main>
      <Footer info={data.company_info} />
    </div>
  );
}

export default App;
