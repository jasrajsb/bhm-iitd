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
    //fb: '',
    insta: 'https://www.instagram.com/udyam_/',
    complaint: 'https://docs.google.com/spreadsheets/d/1l2N-C_Zi-N0R0HTjSiagqD6fs6C45EV2ZCvRW85M_vU/edit?usp=drivesdk',
    location:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7290980810812!2d77.18735741500706!3d28.547861282451294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d32e65bad7f%3A0xf3bf2fd5785f5277!2sUdaigiri%20Hostel%20Lawn!5e0!3m2!1sen!2sin!4v1640605313739!5m2!1sen!2sin',
    contact: [
        {
            designation: 'Caretaker',
            name: 'Ajay Bhola',
            phone: '+91 8800449525',
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
            image: house,
            linkedin: 'https://www.linkedin.com/in/shikhar-anand-iit/',
            mail: 'anandshikhar99@gmail.com',
            phone: '7000680741',
        },
        {
            designation: 'Maintenance Secretary',
            name: 'Harsh Agarwal',
            image: maint,
            linkedin: '',
            mail: ' ce1170108@civil.iitd.ac.in',
            phone: '7584832538',
        },
        {
            designation: 'Cultural Seceratary',
            name: 'Somya Maheshwari',
            image: cult,
            linkedin: 'https://www.linkedin.com/in/somya-maheshwari-123b401b1',
            mail: ' ch1190057@chemical.iitd.ac.in',
            phone: '7073428707',
        },
        {
            designation: 'Mess Secretary',
            name: 'Adarsh Vrindam',
            image: mess,
            linkedin: 'https://www.linkedin.com/in/adarsh-vrindam-561183178/',
            mail: ' bb1180002@dbeb.iitd.ac.in',
            phone: '6296782727',
        },
        {
            designation: 'Secretary to SAC',
            name: 'Shashwat Saxena',
            image: sac,
            linkedin: 'https://www.linkedin.com/in/shashwat-saxena-2475841a2/',
            mail: '',
            phone: '8859014204',
        },
        {
            designation: 'Sports Secretary',
            name: 'Ishan Dingra',
            image: sports,
            linkedin: 'https://www.linkedin.com/in/ishan-digra-8a3a89214/',
            mail: 'ee1190485@ee.iitd.ac.in',
            phone: '8360063357',
        },
    ],
    mess:[
        {
            day:'Monday',
            menu: [{
                name: 'Breakfast',
                time: '12:30 PM - 2:30 PM',
                menu: 'Poha, Veg Sandwich , Kala chana boiled, Jalebi, '
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:30 PM',
                menu: 'Dal Moong Malka, Veg kohlapuri, Curd, Rice, Roti'
            },
            {
                name: 'Dinner',
                time: '12:30 PM - 2:30 PM',
                menu: 'Daal chana, Cheese chilli, Fried rice, Roti , Rasmalai'
            }]
        },
        {
            day:'Tuesday',
            menu: [{
                name: 'Breakfast',
                time: '12:30 PM - 2:30 PM',
                menu: 'Aloo Parantha, Dalia, Sprout boiled, Fruit'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:30 PM',
                menu: 'Aloo gobhi, Dal afghani, Curd, Rice, Roti'
            },
            {
                name: 'Dinner',
                time: '12:30 PM - 2:30 PM',
                menu: 'Cholley(Paneer), Sitafal Sabji, Rice, Poori, Kheer'
            }]
        },
        {
            day:'Wednesday',
            menu: [{
                name: 'Breakfast',
                time: '12:30 PM - 2:30 PM',
                menu: 'Bread Pakora/Bread Roll, Omelette, Sweet oats, Sprouts, Fruit'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:30 PM',
                menu: 'Dal Sabut mix, Kadhai Paneer, Meethi lassi/Chachh, Rice, Roti'
            },
            {
                name: 'Dinner',
                time: '12:30 PM - 2:30 PM',
                menu: 'Dal Makhani, Mix Veg Sabji, Rice, Roti, Gulab Jamun'
            }]
        },
        {
            day:'Thursday',
            menu: [{
                name: 'Breakfast',
                time: '12:30 PM - 2:30 PM',
                menu: 'Idli, Sambhar, Coconut chatni, Sandwich, Fruit'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:30 PM',
                menu: 'Cabbage/Aloo/Matar, Rajma Masala, Raita, Rice, Roti'
            },
            {
                name: 'Dinner',
                time: '12:30 PM - 2:30 PM',
                menu: 'Sarso ka Saag, Dal Arhar, Rice, Roti, Badaam Milk'
            }]
        },
        {
            day:'Friday',
            menu: [{
                name: 'Breakfast',
                time: '12:30 PM - 2:30 PM',
                menu: 'Mix Parantha, Cornflakes, Sprouts, Fruit'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:30 PM',
                menu: 'Kadi Pakoda, Mathhi/Gajar/Matar, Rice, Roti'
            },
            {
                name: 'Dinner',
                time: '12:30 PM - 2:30 PM',
                menu: 'Veg Biryani, Egg biryani, Rajmah, Raita Mix, Roti '
            }]
        },
        {
            day:'Saturday',
            menu: [{
                name: 'Breakfast',
                time: '12:30 PM - 2:30 PM',
                menu: 'Poori Aloo Sabji, Desi Ghee Suji Halwa,Boiled Egg, Fruit'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:30 PM',
                menu: 'Kala Chana, Pav Bhaji, Dahi, Achaar, Roti'
            },
            {
                name: 'Dinner',
                time: '12:30 PM - 2:30 PM',
                menu: 'Lauki Kofta, Dal Urad Chana, Veg pulao, Roti, Moong Dal Halwa'
            }]
        },
        {
            day:'Sunday',
            menu: [{
                name: 'Breakfast',
                time: '12:30 PM - 2:30 PM',
                menu: 'Dosa, Sambhar, Coconut Chutney, Tomato Chutney, Sweet Seviyan'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:30 PM',
                menu: 'Pindi Chole, Dhaniya Aloo, Bhatura/Roti, Rice/Achaar/Chilli Fry, Dahi Bhalla'
            },
            {
                name: 'Dinner',
                time: '12:30 PM - 2:30 PM',
                menu: 'Matar Paneer/Egg Curry, Dal Moong Lobia, Onion Rice, Roti, Gulab Jamun'
            }]
        }
        
    ],
    mess_sheet: '2PACX-1vT-rb9SR7w2J_Dkq2kZLbCnuLOPtYc2buVJN5dfMlQRWMr5sC__n0gJPtLc2w79tPm5NsxeuVHvQyR2'
    
}

export default data;