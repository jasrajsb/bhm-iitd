import { Suspense,lazy } from 'react';
import Hero from '../components/hero/component';

const AboutUs = lazy(()=>import('../components/about-us/component'));
const Notices = lazy(()=>import('../components/notices/component'));
const TeamStucture= lazy(()=>import('../components/team-structure/component'));
const Chiefs = lazy(()=>import('../components/chiefs/component'));

const Homepage = function () {
    return <>
        <Hero />
        <Suspense fallback={<div/>}>
            <AboutUs />
            <Notices />
            <TeamStucture/>
            <Chiefs />
        </Suspense>
    </>
}

export default Homepage;
