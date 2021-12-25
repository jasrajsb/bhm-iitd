import AboutUs from '../components/about-us/component';
// import TeamStucture from '../components/team-structure/component';
import Notices from '../components/notices/component';
import Calendar from '../components/calendar/component';
import Chiefs from '../components/chiefs/component';
import Gallery from '../components/gallery/component';
import _template_for_gallery from '../components/gallery/_template_for_gallery';
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
        <Gallery images_json={_template_for_gallery} />
    </div>
}

export default Homepage;
