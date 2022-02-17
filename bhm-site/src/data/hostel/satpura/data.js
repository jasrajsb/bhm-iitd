import hero from './hero.jpg';
import house from './house.jpg';
import maint from './maint.jpg';
import cult from './cult.jpg';
import mess from './mess.jpg';
import sac from './sac.jpg';
import sports from './sports.jpg';
var data = {
    hero: hero,
    instagram:'',
    introduction: `Since 2005, Satpura has been a powerhouse in Dance and Dramatics, producing some of the finest dancers and institute-level dramatists. Lately, there has also been a steep rise in Debating and PFC culture. It has also produced some of the best Institute level swimmers who represent IIT in various Inter-college competitions. Satpura is also famous for producing some of the best coders and developers in recent times, many of them reaching the finals of the best coding competitions. The hostel also boasts a large number of high CGPA students, Department Toppers, and Department changes.

    Satpura is known for one of the best Wall paintings among all Hostels. It also owns one of the finest gardens on Campus. Lush green and very well maintained, we were the second runners-up in Garden Trophy 2019. We also have one of the best messes on Campus, both in terms of food quality and cleanliness. Satpura night mess need no introduction, as one of the finest night mess campus have. Lately, in 2019-20, a new gym was built, and several new machines were bought. The volleyball court was also renovated with a new net where our players practiced a lot for the inter hostel tournament, ultimately resulting in a better position than last year.
    `,
    vision: `To be a center of excellence in provision of student accommodation services and best quality mess facilities. To create a memorable and joyful experience of their stay.
    `,
    insta: 'https://instagram.com/satpura_house?utm_medium=copy_link',
    complaint: 'https://docs.google.com/forms/d/e/1FAIpQLSemR1yE5eUd0TwPzptoVyxUJiRWO8jpcVzLVW3HeA7VRoIhmQ/viewform?usp=sf_link',
    location:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7196103997508!2d77.18513321500713!3d28.548146382451066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d7324a2a8c1%3A0x1a1533ecb8591a18!2sSatpura%20Hostel%20Garden!5e0!3m2!1sen!2sin!4v1640605134603!5m2!1sen!2sin',
    contact: [
        {
            designation: 'Caretaker',
            name: 'Nitish',
            phone: '9674290011',
            email: 'caretakersatpura@admin.iitd.ac.in'
        },
        {
            designation: 'Warden',
            name: 'Prof. Hariprasad Kodamana',
            phone: '',
            email: 'wdnmsat@admin.iitd.ac.in'
        },
        {
            designation: 'Guard',
            name: '⠀',
            phone: '011 2659 7066',
            email: '⠀'
        }
    ],
    secys: [
        {
            designation: 'House Secretary',
            name: 'Arvin Goyal',
            image: house,
            phone: '9517649345',
            linkedin: 'https://www.linkedin.com/in/arvin-goyal-9a3a62174/',
            mail: 'arving1908@gmail.com',
        },
        {
            designation: 'Maintenance Secretary',
            name: 'Aniket Vitthal',
            image: maint,
            phone: '9604036906',
            linkedin: 'https://www.linkedin.com/in/avbhandare',
            mail: 'avbhandare8201@gmail.com',
        },
        {
            designation: 'Cultural Seceratary',
            name: 'Ritik Yadav',
            image: cult,
            phone: '8882367230',
            linkedin: 'http://linkedin.com/in/ritik-yadav',
            mail: 'ritik05072001@gmail',
        },
        {
            designation: 'Mess Secretary',
            name: 'Rahul Narayan',
            image: mess,
            phone: '9643975507',
            linkedin: '',
            mail: '',
        },
        {
            designation: 'Secretary to SAC',
            name: 'Jasmeet Singh',
            image: sac,
            phone: '8447729835',
            linkedin: 'https://www.linkedin.com/in/jasmeet-singh-501282194/',
            mail: 'jasmeet3135@gmail.com',
        },
        {
            designation: 'Sports Secretary',
            name: 'Aryan Dixit',
            image: sports,
            phone: '7834817826',
            linkedin: 'https://www.linkedin.com/in/aryan-dixit-093399191',
            mail: 'aryandixit1729@gmail.com',
        },
    ],
    mess:[
        {
            day:'Monday',
            menu: [{
                name: 'Breakfast',
                time: '8:00 AM - 9:30 AM',
                menu: 'poha,daliya,sprouts,lemon,cornflakes'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:00 PM',
                menu: 'dal arhar,aloo gobhi,roti,rice,raitasalad'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'dal moong sabut, allo matar, toti,rice,elaichi milk'
            }]
        },
        {
            day:'Tuesday',
            menu: [{
                name: 'Breakfast',
                time: '8:00 AM - 9:30 AM',
                menu: 'vada sambhar chutney,banana,sprouts'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:00 PM',
                menu: 'kadhi(pakoda),aloo palak,dal rice,roti'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'dal makhani,kadhai paneer,roti,rice,custard'
            }]
        },
        {
            day:'Wednesday',
            menu: [{
                name: 'Breakfast',
                time: '8:00 AM - 9:30 AM',
                menu: 'namkeen seviyan,boiled egg/cutlet, sprouts'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:00 PM',
                menu: 'dal masoor,lauki sabji,rice,roti,mint raita,salad'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'dal arhar,sarso ka saag,rice,missi roti,gur,pineapple raita'
            }]
        },
        {
            day:'Thursday',
            menu: [{
                name: 'Breakfast',
                time: '8:00 AM - 9:30 AM',
                menu: 'aloo palak puri,kala chana,suji ka halwa,kinoo'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:00 PM',
                menu: 'dal urad channa,palak paneer,roti,rice,boondi raita,achar,salad'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'chowmin,paw bhaji,moong malka dal, rice zeera,fruit cream'
            }]
        },
        {
            day:'Friday',
            menu: [{
                name: 'Breakfast',
                time: '8:00 AM - 9:30 AM',
                menu: 'papita,boiled egg,besan ka chilla,cornflakes'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:00 PM',
                menu: 'dal rajma,aloo methi,roti,rice,lasssi,salad'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'veg biryani/egg biryani,mint raita,roti dal kala chana,gajar ka halwa/rasgulla'
            }]
        },
        {
            day:'Saturday',
            menu: [{
                name: 'Breakfast',
                time: '8:00 AM - 9:30 AM',
                menu: 'aloo/methi/gobi paratha,dahi,tomato chutney,sweet oats'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:00 PM',
                menu: 'aloo soyabean,veg khichdi,roti papad ,plain dahi,achar,salad'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'dal arhar,matar mashroom paneer,rice,missi roti,soup'
            }]
        },
        {
            day:'Sunday',
            menu: [{
                name: 'Breakfast',
                time: '8:00 AM - 9:30 AM',
                menu: 'uttapam/dosa,sambhar,cornflakes,coconut chutney'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:00 PM',
                menu: 'pindichole,bathure,kulche,rice,plain dahi,achar,salad'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'dal urad chana,paneer butter masala/egg curry,rice,roti,gulabjamun'
            }]
        }
        
    ],
    mess_sheet: '2PACX-1vQWqTJoh2cWfOgfSKhZIba5QB_iaMtTyqK9ReRX6NtqQOWIa1ZgqWDqBGwD6SgazRdzPRCw_Dxlh-Un'
}

export default data;