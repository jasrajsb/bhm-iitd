import AboutUs from '../components/about-us/component';
// import TeamStucture from '../components/team-structure/component';
// import Notices from '../components/notices/component';
import Calendar from '../components/calendar/component';
import Chiefs from '../components/chiefs/component';
import Hero from '../components/hero/component';
import Notices from '../components/notices/component';
import PopUp from '../components/pop-up/component';

const Homepage = function () {
    return <div>
        <Hero />
        <AboutUs />
        {/* <TeamStucture /> */}
        <Notices />
        <Calendar />
        <Chiefs />
        <PopUp />
    </div>
}

export default Homepage;
