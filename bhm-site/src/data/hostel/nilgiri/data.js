import hero from './hero.jpg';
import house from './house.jpg';
import maint from './maint.jpg';
import cult from './cult.jpg';
import mess from './mess.jpg';
import sac from './sac.jpg';
import sports from './sports.jpg';
var data = {
    hero: hero,
    introduction: `Nilgiri is part of our identity. We Nilbulls are one of the oldest hostels in IIT Delhi, with a rich and storied(probably the best) alumni history. Nilgiri has a legacy of academic, cultural and sporting excellence. It is the place where great minds are moulded, and champions are made.
    We Nil bois give our best in everything, and this has led to many intense rivalries, combined with the fact that the BRCA, BSW and BHM trophies are hotly contested.
     Despite being one of the oldest, Nilgiri is the newly renovated and one of the most well-maintained hostels on the campus. 
    The Young Bulls are forever participating in everything and earning laurels for Nilgiri while at the same time gaining respect and endearment from the seniors who help us with anything we want.
    `,
    vision: `We NilBulls focuses on providing best and memorable experience to all the students, while sharing knowledge, experiences and skills, making life lasting bonds and living the life to the fullest.`,
    vision: `To be a center of excellence in the provision of student accommodation services. To keep a check on facilities that students require to take this excellent hostel culture to another level.`,
    fb: '',
    insta: 'https://www.instagram.com/nilgiri.cultu/',
    complaint: 'https://docs.google.com/forms/d/e/1FAIpQLSdLVjpieSUCgByssFVMTrqtFYtrETk6gGz-BbwV8hmxukw86A/viewform',
    contact: [
        {
            designation: 'Caretaker',
            name: 'Praveen Kumar',
            phone: '01126596991',
            email: 'caretakernilgiri@admin.iitd.ac.in'
        },
        {
            designation: 'Warden',
            name: 'Pintu Das',
            phone: '9999328637',
            email: 'wdnmnil@admin.iitd.ac.in'
        },
        {
            designation: 'Guard',
            name: '⠀',
            phone: '01126596919',
            email: '⠀'
        }
    ],
    secys: [
        {
            designation: 'House Secretary',
            name: 'Asim Rajvanshi',
            image: house
            ,
            linkedin: 'https://www.linkedin.com/in/asim-rajvanshi-71b19a178/',
            mail: 'asimrajvanshi1@gmail.com',
            phone: '97172 24396',
        },
        {
            designation: 'Maintenance Secretary',
            name: 'Divyanshu Bujethia',
            image: maint
            ,
            linkedin: '',
            mail: 'dbujethia@gmail.com',
            phone: '81045 22581',
        },
        {
            designation: 'Cultural Seceratary',
            name: 'Aditya Vishal',
            image: cult
            ,
            linkedin: 'https://www.linkedin.com/in/aditya-vishal-48b4a91aa',
            mail: 'adityavishal100401@gmail.com',
            phone: '73399 06320',
        },
        {
            designation: 'Mess Secretary',
            name: 'Arunesh Singh',
            image: mess
            ,
            linkedin: '',
            mail: 'aruneshshayar@gmail.com',
            phone: '93191 27177',
        },
        {
            designation: 'Secretary to SAC',
            name: 'Hriday Gupta',
            image: sac
            ,
            linkedin: 'https://www.linkedin.com/in/hridaygupta01012002/',
            mail: 'hridayguota.iitd@gmail,com',
            phone: '98999 44350',
        },
        {
            designation: 'Sports Secretary',
            name: 'Shantanu Meena',
            image: sports
            ,
            linkedin: '',
            mail: 'shantanumiitd@gmail.com',
            phone: '95304 58499',
        },
    ],
    mess:[
        {
            day:'Monday',
            menu: [{
                name: 'Breakfast',
                time: '7:30 AM - 9:30 AM',
                menu: 'Bread, Butter,Milk, Milk, Jam, Tea, Coffee, Bournvita, Aloo Pyaz/Gobhi Parantha, Chutney, Sprouts, Sweet Semiya'
            },
            {
                name: 'Lunch',
                time: '12 PM - 2 PM',
                menu: 'Salad, Rice, Roti, Achar, Aloo Gobhi, Dal Tadka, Plain Lassi, Gur'
            },
            {
                name: 'Evening',
                time: '4:30 PM - 5:30 PM',
                menu: 'Tea'
            },
            {
                name: 'Dinner',
                time: '7 PM - 9 PM',
                menu: 'Rice, Roti, Achar, Malai Kofta/Paneer Makhani /Egg Curry, Mix Dal, Rasmalai'
            }]
        },
        {
            day:'Tuesday',
            menu: [{
                name: 'Breakfast',
                time: '7:30 AM - 9:30 AM',
                menu: 'Bread, Butter,Milk, Milk, Jam, Tea, Coffee, Bournvita, Mix Uttapam, Sambhar, Daliya Coconut & Red Chutney, Cornflakes, Fruit'
            },
            {
                name: 'Lunch',
                time: '12 PM - 2 PM',
                menu: 'Salad, Rice, Roti, Achar, Kala Chana, Poori, Sitaphal Sabji, Pulav, Mix Raita'
            },
            {
                name: 'Evening',
                time: '4:30 PM - 5:30 PM',
                menu: 'Coffee'
            },
            {
                name: 'Dinner',
                time: '7 PM - 9 PM',
                menu: 'Rice, Roti, Achar, Mix Veg, Chowmein/Pasta, Moong Malka, Badam Milk'
            }]
        },
        {
            day:'Wednesday',
            menu: [{
                name: 'Breakfast',
                time: '7:30 AM - 9:30 AM',
                menu: 'Bread, Butter,Milk, Milk, Jam, Tea, Coffee, Bournvita, Cutlet, Boiled Eggs, Sweet Corn Namkeen Semiya'
            },
            {
                name: 'Lunch',
                time: '12 PM - 2 PM',
                menu: 'Salad, Rice, Roti, Achar, Kadhi Pakoda, Dum Aloo/Aloo Soyabean (Dry)/Aloo Matar'
            },
            {
                name: 'Evening',
                time: '4:30 PM - 5:30 PM',
                menu: 'Tea'
            },
            {
                name: 'Dinner',
                time: '7 PM - 9 PM',
                menu: 'Rice, Roti, Achar, Soup, Urad Channa Dal, Palak Paneer/Kadhai Paneer, Gulab Jamun'
            }]
        },
        {
            day:'Thursday',
            menu: [{
                name: 'Breakfast',
                time: '7:30 AM - 9:30 AM',
                menu: 'Bread, Butter,Milk, Milk, Jam, Tea, Coffee, Bournvita, Poha + Sev, Kala chana, Daliya, Fruit'
            },
            {
                name: 'Lunch',
                time: '12 PM - 2 PM',
                menu: 'Salad, Rice, Roti, Achar, Paneer Bhurji/Egg Bhurji Black Masoor, Dahi'
            },
            {
                name: 'Evening',
                time: '4:30 PM - 5:30 PM',
                menu: 'Coffee'
            },
            {
                name: 'Dinner',
                time: '7 PM - 9 PM',
                menu: 'Rice, Roti, Achar, Mix Parantha, Chutney,  Chola Masala, Kheer'
            }]
        },
        {
            day:'Friday',
            menu: [{
                name: 'Breakfast',
                time: '7:30 AM - 9:30 AM',
                menu: 'Bread, Butter,Milk, Milk, Jam, Tea, Coffee, Bournvita, Vada/Idli & Fried Idli, Sambhar/Idli, Sandwich, Sprouts, Cornflakes'
            },
            {
                name: 'Lunch',
                time: '12 PM - 2 PM',
                menu: 'Salad, Rice, Roti, Achar, Rajma, Jeera Rice, Arbi, Plain Lassi, Gur'
            },
            {
                name: 'Evening',
                time: '4:30 PM - 5:30 PM',
                menu: 'Tea'
            },
            {
                name: 'Dinner',
                time: '7 PM - 9 PM',
                menu: 'Rice, Roti, Achar, Egg /Veg Biryani, Aloo Sabji, Mix Raita, Jalebi'
            }]
        },
        {
            day:'Saturday',
            menu: [{
                name: 'Breakfast',
                time: '7:30 AM - 9:30 AM',
                menu: 'Bread, Butter,Milk, Milk, Jam, Tea, Coffee, Bournvita, Aloo Poori, Kala Chana, Daliya'
            },
            {
                name: 'Lunch',
                time: '12 PM - 2 PM',
                menu: 'Salad, Rice, Roti, Achar, Khichdi, Aloo Semfali/Aloo Methi, Dahi, Papad, Butter, Dal'
            },
            {
                name: 'Evening',
                time: '4:30 PM - 5:30 PM',
                menu: 'Coffee'
            },
            {
                name: 'Dinner',
                time: '7 PM - 9 PM',
                menu: 'Rice, Roti, Achar, Matar Paneer/Sarso Ka Saag, Missi Roti, Gur, Dal Arhar, Samosa, Semiya'
            }]
        },
        {
            day:'Sunday',
            menu: [{
                name: 'Breakfast',
                time: '7:30 AM - 9:30 AM',
                menu: 'Bread, Butter,Milk, Milk, Jam, Tea, Coffee, Bournvita, Stuffed Chilla, Chutney, Masala Oats, Sprouts, Fruit'
            },
            {
                name: 'Lunch',
                time: '12 PM - 2 PM',
                menu: 'Salad, Rice, Roti, Achar, Choley, Lauki-Chana, Pulav, Boondi Raita'
            },
            {
                name: 'Evening',
                time: '4:30 PM - 5:30 PM',
                menu: 'Tea'
            },
            {
                name: 'Dinner',
                time: '7 PM - 9 PM',
                menu: 'Rice, Roti, Achar, Pav Bhaji/Aloo Kachori, Dal Makhani, Moong Dal Halwa/Ice Cream'
            }]
        }

    ]
}

export default data;