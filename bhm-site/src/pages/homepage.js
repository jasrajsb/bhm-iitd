import AboutUs from '../components/about-us/component';
import TeamStucture from '../components/team-structure/component';
import Chiefs from '../components/chiefs/component';
import Hero from '../components/hero/component';
import Notices from '../components/notices/component';

const Homepage = function () {
    return <div>
        <Hero />
        <AboutUs />
        <Notices />
        <TeamStucture/>
        <Chiefs />
    </div>
}

export default Homepage;
