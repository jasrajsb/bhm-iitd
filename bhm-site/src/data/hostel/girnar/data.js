import hero from './hero.jpg';
import house from './house.jpg';
import maint from './maint.jpg';
import cult from './cult.jpg';
import mess from './mess.jpg';
import sac from './sac.jpg';
import sports from './sports.jpg';
var data = {
    hero: hero,
    introduction: `With your luggage on your shoulders, expectations in your mind, and dreams in your eyes, you enter this place called Girnar, which is one of the biggest hostels in IIT Delhi, with over 650 students and the newest hostel starting in 2010. Being a part of Girnar, you will find yourself in one of the most interactive places of IITD, whether it is the brotherhood with your wingmates or the seniors who are there to guide you every time. The night-outs together, inter wing culture, and the enthusiasm during the events has their own enigma. Even if it is the newest hostel, Girnar has established a remarkable legacy in recreational activities like debating, drama club, etc., and a great sports culture. Every pass-out takes with him the memories of this glory and heritage. Every fresher will feel the aura!`,
    vision: `To be a center of excellence in the provision of student accommodation services. To keep a check on facilities that students require to take this excellent hostel culture to another level.`,
    //fb: '',
    insta: 'https://www.instagram.com/girnar_hostel_/',
    complaint: 'https://forms.gle/t1mgUqt2UY6aec446',
    location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14019.99059001242!2d77.18436084581883!3d28.53979042707892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df3f5af532f%3A0x5737e3577f8531c8!2sGirnar%20House!5e0!3m2!1sen!2sin!4v1640604207202!5m2!1sen!2sin",
    contact: [
        {
            designation: 'Caretaker',
            name: 'Sanjeev ',
            phone: '9212915558',
            email: 'caretakergirnar@admin.iitd.ac.in'
        },
        {
            designation: 'Warden',
            name: 'N M Anoop Krishnan',
            phone: '99451 91019',
            email: 'wdnmgir@admin.iitd.ac.in'
        },
        {
            designation: 'Co ordinator',
            name: 'Santosh',
            phone: '9540015298',
            email: '⠀'
        },
        {
            designation: 'Guard Desk',
            name: '⠀',
            phone: '+911126596891',
            email: '⠀'
        }
    ],
    secys: [
        {
            designation: 'House Secretary',
            name: 'Shitij Malik',
            image: house,
            linkedin: 'https://www.linkedin.com/in/shitij-malik-042b0494/',
            mail: 'shitijmalik.iitd@gmail.com',
            phone: '9560053537',
        },
        {
            designation: 'Maintenance Secretary',
            name: 'Sayam Singla',
            image: maint,
            linkedin: 'https://www.linkedin.com/in/sayamsingla2000/',
            mail: 'Sayamsingla2000@gmail.com',
            phone: '9996881116',
        },
        {
            designation: 'Cultural Seceratary',
            name: 'Priyanshu',
            image: cult,
            linkedin: 'https://www.linkedin.com/in/priyanshu-j/',
            mail: 'priyanshu18j@gmail.com',
            phone: '8930072725',
        },
        {
            designation: 'Mess Secretary',
            name: 'Vikash Kulhari',
            image: mess,
            linkedin: 'https://www.linkedin.com/in/vikash-kulhari/',
            mail: 'thevikashkulhari@gmail.com',
            phone: '8875521648',
        },
        {
            designation: 'Secretary to SAC',
            name: 'Vishantan Kumar',
            image: sac,
            linkedin: 'https://www.linkedin.com/in/vishantan-kumar-a3346a1a2/',
            mail: 'kumarvishantan1009@gmail.com',
            phone: '7022004188',
        },
        {
            designation: 'Sports Secretary',
            name: 'Srijan Maurya',
            image: sports,
            linkedin: 'https://www.linkedin.com/in/srijanmaurya/',
            mail: 'srijan.maurya04@gmail.com',
            phone: '7510046004',
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
        
    ]
    
    
}

export default data;