import Hero from '../components/hero/component';
import AboutUs from '../components/about-us/component';
import TeamStucture from '../components/team-structure/component';
import Notices from '../components/notices/component';
import Calendar from '../components/calendar/component';
import PopUp from '../components/pop-up/component';
import Chiefs from '../components/chiefs/component';

const Homepage = function () {
    return <div>
        <Hero />
        <AboutUs />
        <TeamStucture />
        <Notices />
        <Calendar />
        <Chiefs />
        <PopUp />
    </div>
}

export default Homepage;