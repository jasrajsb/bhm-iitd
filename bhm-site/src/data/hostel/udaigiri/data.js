import hero from './hero.jpg';
import house from './house.jpg';
import maint from './maint.jpg';
import cult from './cult.jpg';
import mess from './mess.jpg';
import sac from './sac.jpg';
import sports from './sports.jpg';
var data = {
    hero: hero,
    introduction: `Inaugurated in 2012, Udaigiri is the youngest hostel of IIT Delhi. Enabled with elevators, gym and known for its delicious Monday mess dinners, it's one of the largest hostels in the campus. In a short span of 9 remarkable years, we developed a strong culture in recreational activities like dance, art, debating, photography and many more. With all its facilities and friendly staff, Udaigiri will make you feel at home.`,
    vision: `To create an interactive, fun and educational environment, accepting of all, where creativity flourishes.`,
    contact: [
        {
            designation: 'Caretaker',
            name: 'Gopal',
            phone: '+91 84476 14214',
            email: 'caretakerudaigiri@iitd.ac.in'
        },
        {
            designation: 'Warden',
            name: 'Jayant Jain',
            phone: '(91)-11-2659 1246',
            email: 'jayantj@am.iitd.ac.in'
        },
        {
            designation: 'Guard',
            name: '⠀',
            phone: '',
            email: '⠀'
        }
    ],
    secys: [
        {
            designation: 'House Secretary',
            name: 'Shikhar Anand',
            image: house
        },
        {
            designation: 'Maintenance Secretary',
            name: 'Harsh Agarwal',
            image: maint
        },
        {
            designation: 'Cultural Seceratary',
            name: 'Somya Maheshwari',
            image: cult
        },
        {
            designation: 'Mess Secretary',
            name: 'Adarsh Vrindam',
            image: mess
        },
        {
            designation: 'Secretary to SAC',
            name: 'Shashwat Saxena',
            image: sac
        },
        {
            designation: 'Sports Secretary',
            name: 'Ishan Dingra',
            image: sports
        },
    ]
}

export default data;