import hero from './hero.jpg';
import house from './house.jpg';
import maint from './maint.jpg';
import cult from './cult.jpg';
import mess from './mess.jpg';
import sac from './sac.jpg';
import sports from './sports.jpg';
var data = {
    hero: hero,
    introduction: `Established in 1965, Jwalamukhi hostel has been a Sports Powerhouse of the Institute for the longest. It has produced brilliant sportspersons who have shown their mettle in various high-stakes tournaments in and out of the institute. The hostel recently came off its four-year Sports General Championship winning streak. Apart from sports, Jwalamukhi hostel has also been one of the best hostels in terms of Cultural activities and has produced great talent in various areas like Drama, Performing Arts, Design, Dance, etc. This hostel also brags alumni in the ranks of billionaires and top-ranking officers of the country. All of this has been sustained by a supportive culture of mentorship that carefully cultivates the freshmen every year and introduces them to various aspects of college life. These bonds formed with seniors in freshmen years often last for a lifetime. All the residents of the Jwalamukhi hostel live together as a big community that works with the motto of- Fire and Victory.`,
    vision: `To create a great hostel experience that Students enjoy and find truly memorable.  This demands that we place Students’ satisfaction and safety at the heart of everything we do.`,
    location:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6688127231696!2d77.18196991500712!3d28.54967278245053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df286fdfa0d%3A0xfdc8077c0ae2f91d!2sJwalamukhi%20Hostel!5e0!3m2!1sen!2sin!4v1640604673117!5m2!1sen!2sin',
    contact: [
        {
            designation: 'Caretaker',
            name: 'Divakar Rathour',
            phone: '9560877294',
            email: 'caretakerjwalamukhi@admin.iitd.ac.in'
        },
        {
            designation: 'Warden',
            name: 'Ankush Agrawal',
            phone: '',
            email: 'wdnmjwa@admin.iitd.ac.in'
        },
        {
            designation: 'Reception',
            name: '⠀',
            phone: '1126596913',
            email: '⠀'
        }
    ],
    secys: [
        {
            designation: 'House Secretary',
            name: 'Darpan Kumar Yadav',
            image: house
            ,
            linkedin: '',
            mail: 'darpanyadav21@gmail.com',
            phone: '9412272056',
        },
        {
            designation: 'Maintenance Secretary',
            name: 'Gopal Sharma',
            image: maint
            ,
            linkedin: 'https://www.linkedin.com/in/gopal-sharma-12a51b200/',
            mail: 'sharmagopal1255@gmail.com',
            phone: '9783166354',
        },
        {
            designation: 'Cultural Seceratary',
            name: 'Nishant Bansal',
            image: cult
            ,
            linkedin: 'https://www.linkedin.com/in/nishant-bansal-88a50a19b/',
            mail: 'bansalnishant2110@gmail.com',
            phone: '7042345171',
        },
        {
            designation: 'Mess Secretary',
            name: 'Md Intaf Alam',
            image: mess
            ,
            linkedin: 'https://www.linkedin.com/in/md-intaf-alam-884184206/',
            mail: 'intafalam1@gmail.com',
            phone: '9749564386',
        },
        {
            designation: 'Secretary to SAC',
            name: 'Yash Vardhan Singh',
            image: sac
            ,
            linkedin: 'linkedin.com/in/yash-vardhan-singh-93022516b',
            mail: 'yashvardhan201001@gmail.com',
            phone: '8076712167',
        },
        {
            designation: 'Sports Secretary',
            name: 'Pritikey Maurya',
            image: sports
            ,
            linkedin: 'https://www.linkedin.com/in/pritikey-maurya-36347321b/',
            mail: 'pritikeym@gmail.com',
            phone: '8840984358',
        },
    ],
    mess:[
        {
            day:'Monday',
            menu: [{
                name: 'Breakfast',
                time: '7:30 AM - 9:30 PM',
                menu: 'ALOO KI SABZI,METHI PARANTHA ,VEG UPMA,FRUIT'
            },
            {
                name: 'Lunch',
                time: '12:00 PM - 2:00 PM',
                menu: 'SUBZ MILONI,DAL MOONG, MALKA,JEERA RICE,ROTI,BOONDI RAITA,SALAD'
            },
            {
                name: 'Dinner',
               time: '7:00 PM - 9:00 PM',
                menu: 'KADHAI PANEER, CHANA DAL,RICE,ROTI,IMARATI'
            }]
        },
        {
            day:'Tuesday',
            menu: [{
                name: 'Breakfast',
                time: '7:30 AM - 9:30 PM',
                menu: 'FRIED & PLAIN, IDLI,SAMBHAR,COCONUT & TOMATO CHUTNEY,CORNFLAKES,FRUIT'
            },
            {
                name: 'Lunch',
                time: '12:00 PM - 2:00 PM',
                menu: 'KADHI PAKODA,AALU MATTAR,RICE,ROTI,PAPAD,SALAD'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'METHI MASHROOM MALAI MATTAR,DAL AFGANI (KALI MASOOR),RICE,ROTI,MILK BADAM'
            }]
        },
        {
            day:'Wednesday',
            menu: [{
                name: 'Breakfast',
                 time: '7:30 AM - 9:30 PM',
                menu: 'POHA-SEV,JALEBI,2 BOILED EGG,FRUITS'
            },
            {
                name: 'Lunch',
                time: '12:00 PM - 2:00 PM',
                menu: 'PANEER BUTTER MASALA,DAL URAD CHANA,RICE ROTI,SALAD'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'VEG BIRYANI,EGG BIRYANI,KALA CHANNA SABJI,CUCUMBER RAITA,ROTI,MOONG DAL HALWA'
            }]
        },
        {
            day:'Thursday',
            menu: [{
                name: 'Breakfast',
                 time: '7:30 AM - 9:30 PM',
                menu: 'MIX VEG PARANTHA,TAMATAR PYAAZ CHUTNEY,SWEET SEVIAN,FRUIT'
            },
            {
                name: 'Lunch',
                time: '12:00 PM - 2:00 PM',
                menu: 'PINDI CHOLLE,BHATTURE,JEERA AALU,RICE ROTI,BOONDI RAITA,SALAD,ACHAAR'
            },
            {
                name: 'Dinner',
               time: '7:00 PM - 9:00 PM',
                menu: 'DHOKLA,PASTA MACRONI,PAO BHAJI,MOONG MALKA DAL,MATTAR PULAO,ROTI, CHOCOLATE TRUFFLE PASTRY'
            }]
        },
        {
            day:'Friday',
            menu: [{
                name: 'Breakfast',
                time: '7:30 AM - 9:30 PM',
                menu: 'DRY MATTAR SABJI,KULCHE,OMELLETTE DALIA,FRUIT'
            },
            {
                name: 'Lunch',
                time: '12:00 PM - 2:00 PM',
                menu: 'ALOO PALAK (SHREDDED) DRY,DAL CHANA,JEERA RICE,ROTI,DAHI,SALAD'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'EGG CURRY/PANEER MAKHNI,DAL MAKHNI,PLAIN PARANTHA/ROTI,RASS MALAI'
            }]
        },
        {
            day:'Saturday',
            menu: [{
                name: 'Breakfast',
                time: '7:30 AM - 9:30 PM',
                menu: 'ALOO PYAAZ PARANTHA,TAMATAR CHUTNEY,NAMKEEN SEVIAN,FRUIT'
            },
            {
                name: 'Lunch',
                time: '12:00 PM - 2:00 PM',
                menu: 'AJWAINI ARBI MASALA,DAL ARHAR,RICE ROTI, DAHI ,SALAD,PAPAD '
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'LAUKI KOFTA,DAL PANCHRATNI,RICE,ROTI,STUFF GULAB JAMUN'
            }]
        },
        {
            day:'Sunday',
            menu: [{
                name: 'Breakfast',
                time: '7:30 AM - 9:30 PM',
                menu: 'PLAIN DOSA ,DOSA MASALA/MEDU VADA, SAMBHAR, COCONUT CHUTNEY ,DALIYA/FRUIT'
            },
            {
                name: 'Lunch',
                time: '12:00 PM - 2:00 PM',
                menu: 'PANEER MATTAR BHURJI,DAL SABUT MIX,RICE,ROTI,PLAIN LASSI,SALAD'
            },
            {
                name: 'Dinner',
                time: '7:00 PM - 9:00 PM',
                menu: 'SARSON SAAG,MISSI ROTI,DAL MOONG MALKA,RICE,KESAR PHIRNI'
            }]
        }
    ],
    mess_sheet: '2PACX-1vR8WmxIP55mfVb7IoHzn3CUOK1_XMhNP2fHrypuL2L2p6P1lFa5CvGtagrlhh3-wwSbxoHl_Tlvg2NV'
}

export default data;