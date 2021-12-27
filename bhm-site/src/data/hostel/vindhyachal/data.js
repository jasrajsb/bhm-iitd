import hero from './hero.jpg';
import house from './house.jpg';
import maint from './maint.jpg';
import cult from './cult.jpg';
import mess from './mess.jpg';
import sac from './sac.jpg';
import sports from './sports.jpg';
var data = {
    hero: hero,
    introduction: `One of the oldest hostels in IIT Delhi, Vindhyachal is characterized by wonderful architecture, airy rooms and impeccable maintenance. Add to that the appetizing mess food and you start to understand why living here is such a joy. Vindhyachal is also one of the smallest hostels which will mean that you know all your batch mates personally and have a much better interaction with your seniors. All in all, you will make friends and memories which will be with you for life`,
    vision: `It's up to you!`,
    insta: 'https://www.instagram.com/vindy.iitdelhi/?hl=en',
    complaint: 'https://docs.google.com/forms/d/e/1FAIpQLSeG93YBgKbgyVBxFXcxPGqZ4l5eAzGhlHylFg_XXY9eI8MC4g/viewform?usp=sf_link',
    location:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7290980810812!2d77.18735741500706!3d28.547861282451294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d98dda4842f%3A0xcd8630f3afcd57bb!2sVidhyanchal%20Hostel%20Garden!5e0!3m2!1sen!2sin!4v1640605396110!5m2!1sen!2sin',
    contact: [
        {
            designation: 'Caretaker',
            name: 'Ashish',
            phone: '9871576199',
            email: 'caretakervindhyachal@admin.iitd.ac.in'
        },
        {
            designation: 'Warden',
            name: 'Prasanth Vangla',
            phone: ' 9611189007',
            email: 'pvangla05@civil.iitd.ac.in'
        },
        {
            designation: 'Guard',
            name: '⠀',
            phone: '011-26596923',
            email: '⠀'
        }
    ],
    secys: [
        {
            designation: 'House Secretary',
            name: 'Ayush',
            image: house,
	    linkedin: 'https://in.linkedin.com/in/ayush-venkatesh-bindlish-12205b1a0',
            mail: 'ayushvenkatesh24@gmail.com',
            phone: '9711964311'
        },
        {
            designation: 'Maintenance Secretary',
            name: 'Vedansh Shankla',
            image: maint,
	    mail: 'me1191058@iitd.ac.in',
            phone: '9116683273'
        },
        {
            designation: 'Cultural Seceratary',
            name: 'Sagar',
            image: cult,
	    linkedin: 'https://www.linkedin.com/in/sagar-jaiswal-872822136',
            mail: 'sagar.jaiswal.iitd@gmail.com',
            phone: '7061590522'
        },
        {
            designation: 'Mess Secretary',
            name: 'Aviraj',
            image: mess,
	    
            mail: 'ce1190230@iitd.ac.in',
            phone: '8529167301'
        },
        {
            designation: 'Secretary to SAC',
            name: 'Shubham Shankar',
            image: sac,
	    mail: 'ce1190306@iitd.ac.in',
            phone: '7235089090'
        },
        {
            designation: 'Sports Secretary',
            name: 'Sameer',
            image: sports,
	    mail: 'ce1190294@iitd.ac.in',
            phone: '7827692594'
        },
    ],
    mess:[
        {
            day:'Monday',
            menu: [{
                name: 'Breakfast',
                time: '7:00 AM - 9:00 AM',
                menu: 'Omelette/Bonda, Suji Halwa, Cornflakes, Bread, Butter, Jam, Tea, Coffee, Milk Bournvita'
            },
            {
                name: 'Lunch',
                time: '12:00 PM - 2:00 PM',
                menu: 'Aloo Beans, Dal rajma, Boondi Raita, Rice, Roti, Salad'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'Matar Paneer/ Malai Kofta, Dal Tadka, Rice, Roti, Gulab Jamun'
            }]
        },
        {
            day:'Tuesday',
            menu: [{
                name: 'Breakfast',
                time: '7:00 AM - 9:00 AM',
                menu: 'Vadasambhar,Chirwa,Dalia, Bread, Butter/ Jam,Tea, Coffee, Milk Bournvita, Fruit'
            },
            {
                name: 'Lunch',
                time: '12:00 PM - 2:00 PM',
                menu: 'Paneer Bhurji, DalMoong+malka, Rice Roti, Salad,Dahi'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'Aloo Prantha, Dal Maoor Black, Peas Rice  Roti,Butter,Chatney, Achaar,Chamcham'
            }]
        },
        {
            day:'Wednesday',
            menu: [{
                name: 'Breakfast',
                time: '7:00 AM - 9:00 AM',
                menu: 'Sandwich,Macroni, Cornflakes, Sprouts, fruit,Bread,  Butter, Jam,Tea,Coffee,Milk, Bournvita'
            },
            {
                name: 'Lunch',
                time: '12:00 PM - 2:00 PM',
                menu: 'Chhole, Aloo subzi, Puri, Rice, Boondi raita, Salad'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'Kadhai paneer/Egg Curry, Dal Panchratni, Roti, Rice,Rasgulla'
            }]
        },
        {
            day:'Thursday',
            menu: [{
                name: 'Breakfast',
                time: '7:00 AM - 9:00 AM',
                menu: 'Bread Pakora,SweetSevien  Boiled Kala Chana Bread, Butter/Jam,Tea,Coffee, Milk Bournvita,Fruit'
            },
            {
                name: 'Lunch',
                time: '12:00 PM - 2:00 PM',
                menu: 'Sarson saag, DalTadka(Chana), Jaggery, Jeera Rice, Roti, Mix raita,Salad'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'Dal Makhni,Mix Veg, Rice, Roti,Rasmalai'
            }]
        },
        {
            day:'Friday',
            menu: [{
                name: 'Breakfast',
                time: '7:00 AM - 9:00 AM',
                menu: 'Boiled egg (2)/ Paneer Chilla, SweetDalia,  Namkeen sevien,Bread, Butter/ Jam,Tea, Coffee,Milk Bournvita'
            },
            {
                name: 'Lunch',
                time: '12:00 PM - 2:00 PM',
                menu: 'Aloo methi, Dal Arhar,Roti  Rice, Salad'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'Pav Bhaji,Chopped Onion, Dal Tadka Chana,Jeera Rice,Hot Milk'
            }]
        },
        {
            day:'Saturday',
            menu: [{name: 'Breakfast',
                time: '7:00 AM - 9:00 AM',
                menu: 'Mix prantha,Sprouts, Pudina Chatney,Achaar,Bread, Butter, Jam, Tea, Coffee,Milk, Bournvita'
            },
            {
                name: 'Lunch',
                time: '12:00 PM - 2:00 PM',
                menu: 'Kadhi Pakora,Mix Veg,Papad ,Rice, Roti, Salad'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'Veg. Biryani/Egg Biryani ,  Mix Raita, Aloo Subzi, Pudina chatney, Roti, Pastry Choc. Trufle Pie'
            }]
        },
        {
            day:'Sunday',
            menu: [{
                name: 'Breakfast',
                time: '7:00 AM - 9:00 AM',
                menu: ' Masala Dosa,Sambhar, Chatney, Boiled chana,Bread, Butter/Jam, Tea, Coffee, Milk, Bournvita, Fruit'
            },
            {
                name: 'Lunch',
                time: '12:00 PM - 2:00 PM',
                menu: 'Chhole, Bhature, Kulcha,Rice,Dahi, Salad'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'Shahi Paneer, Dal Moong malka, Rice, Roti,Moong Dal Halwa'
            }]
        }
        
    ]
}

export default data;