import './App.css';
import AboutUs from './components/about-us/component';
import Calendar from './components/calendar/component';
import Chiefs from './components/chiefs/component';
import Footer from './components/footer/component';
import Gallery from './components/gallery/component';
import Hero from './components/hero/component.js';
import Navbar from './components/navbar/component.js';
import Notices from './components/notices/component.js';
import PopUp from './components/pop-up/component';
import TeamStucture from './components/team-structure/component';
function App() {
  return (
    <div className="App" id="container">
      <Navbar />
      <Hero />
      <AboutUs />
      <TeamStucture />
      <Notices />
      <Calendar />
      <Chiefs />
      <Gallery hostel={"Zanskar"} />
      <Footer />
      <PopUp />
    </div>
  );
}



export default App;
