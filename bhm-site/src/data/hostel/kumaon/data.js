import hero from './hero.jpg';
import house from './house.jpg';
import maint from './maint.jpg';
import cult from './cult.jpg';
import mess from './mess.jpg';
import sac from './sac.jpg';
import sports from './sports.jpg';
var data = {
    hero: hero,
    introduction: `Established in 1969, Kumaon House has always had a rich legacy in cultural and sports, evident through its remarkable achievements in BRCA, BSA, and BSP trophies over the years. It is famous on the campus that the RCA trophy had to be shut down temporarily due to the over domination of Kumaon. When it was reinstated, Kumaon won the RCA again, consecutively in 2019-20 and 2020-21. Further, Kumaon has won the GC consecutively five times, which is the longest streak in the trophy history. 

    All this is credited to the brilliant culture established in the hostel and passionately carried forward each year. The seniors mould the freshers and inspire them to emerge as winners in every field. Seniors and juniors all share a very close bond and are offered zealous support from the alumni of Kumaon. 
    
    Kumaon is not just a hostel. It is a very close-knit family, where everyone works hard to take themselves and the hostel to greater heights and have loads of fun along the way.
    `,
    insta: 'https://instagram.com/almora.kumaon?utm_medium=copy_link',
    complaint: 'https://forms.gle/rsRmYX9eK3mKWEtP7',
    vision: `To metamorphose cubs into tigers`,
    location:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6915328771984!2d77.1827705150071!3d28.54899008245085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1db3cd8bd1e7%3A0xab78a0dc09709345!2sKumaon%20Hostel%20Basketball%20Half%20Court!5e0!3m2!1sen!2sin!4v1640981037831!5m2!1sen!2sin',
    contact: [
        {   
            designation: 'Caretaker',
            name: 'Virendra Kumar Dubey',
            phone: '011 2659 6992',
            email: 'caretakerkumaon@admin.iitd.ac.in'
        },
        {
            designation: 'Warden',
            name: 'Prof. Harsha Kota',
            phone: '',
            email: 'harshakota@civil.iitd.ac.in'
        },
        {
            designation: 'Guard',
            name: '⠀',
            phone: '011 2659 6917',
            email: '⠀'
        }
    ],
    secys: [
        {
            designation: 'House Secretary',
            name: 'Jayesh Jawandhia',
            image: house
        },
        {
            designation: 'Maintenance Secretary',
            name: 'Shubham Jakhar',
            image: maint
        },
        {
            designation: 'Cultural Seceratary',
            name: 'Prem Khandelwal',
            image: cult
        },
        {
            designation: 'Mess Secretary',
            name: 'Abhishek Palway',
            image: mess
        },
        {
            designation: 'Secretary to SAC',
            name: 'Shashwat Garg',
            image: sac
        },
        {
            designation: 'Sports Secretary',
            name: 'Shubham S. Rathore',
            image: sports
        },
    ],
    mess:[
        {
            day:'Monday',
            menu: [{
                name: 'Breakfast',
                time: '12:30 PM - 2:30 PM',
                menu: 'ALOO KI SABZI, METHI PARANTHA, VEG UPMA, FRUIT'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:30 PM',
                menu: 'SUBZ MILONI, ,DAL MOONG MALKA, JEERA RICE, ROTI, BOONDI RAITA, SALAD'
            },
            {
                name: 'Dinner',
                time: '12:30 PM - 2:30 PM',
                menu: 'KADHAI PANEER, CHANA DAL, RICE, ROTI, IMARATI'
            }]
        },
        {
            day:'Tuesday',
            menu: [{
                name: 'Breakfast',
                time: '12:30 PM - 2:30 PM',
                menu: 'FRIED & PLAIN IDLI, SAMBHAR, COCONUT, TOMATO CHUTNEY, CORNFLAKES, FRUIT'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:30 PM',
                menu: 'KADHI PAKODA, AALU MATTAR, RICE, ROTI, PAPAD, SALAD'
            },
            {
                name: 'Dinner',
                time: '12:30 PM - 2:30 PM',
                menu: 'METHI MASHROOM MALAI MATTAR, DAL AFGANI (KALI MASOOR), RICE, ROTI, MILK BADAM'
            }]
        },
        {
            day:'Wednesday',
            menu: [{
                name: 'Breakfast',
                time: '12:30 PM - 2:30 PM',
                menu: 'POHA-SEV, JALEBI, 2 BOILED EGG, FRUITS'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:30 PM',
                menu: 'PANEER BUTTER MASALA, DAL URAD CHANA, RICE ROTI, SALAD'
            },
            {
                name: 'Dinner',
                time: '12:30 PM - 2:30 PM',
                menu: 'VEG BIRYANI, EGG BIRYANI, KALA CHANNA SABJI, CUCUMBER RAITA, ROTI, MOONG DAL HALWA'
            }]
        },
        {
            day:'Thursday',
            menu: [{
                name: 'Breakfast',
                time: '12:30 PM - 2:30 PM',
                menu: 'MIX VEG PARANTHA, TAMATAR PYAAZ CHUTNEY, SWEET SEVIAN, FRUIT'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:30 PM',
                menu: 'PINDI CHOLLE, BHATTURE, JEERA AALU, RICE ROTI, BOONDI RAITA, SALAD, ACHAAR'
            },
            {
                name: 'Dinner',
                time: '12:30 PM - 2:30 PM',
                menu: 'DHOKLA, PASTA MACRONI, PAO BHAJI, MOONG MALKA DAL, MATTAR PULAO, ROTI, CHOCOLATE TRUFFLE PASTRY'
            }]
        },
        {
            day:'Friday',
            menu: [{
                name: 'Breakfast',
                time: '12:30 PM - 2:30 PM',
                menu: 'DRY MATTAR SABJI, KULCHE, OMELLETTE DALIA, FRUIT'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:30 PM',
                menu: 'ALOO PALAK (SHREDDED), DRY DAL CHANA, JEERA RICE, ROTI, DAHI, SALAD'
            },
            {
                name: 'Dinner',
                time: '12:30 PM - 2:30 PM',
                menu: 'EGG CURRY/PANEER MAKHNI, DAL MAKHNI, PLAIN PARANTHA/ROTI, RASS MALAI'
            }]
        },
        {
            day:'Saturday',
            menu: [{
                name: 'Breakfast',
                time: '12:30 PM - 2:30 PM',
                menu: 'ALOO PYAAZ PARANTHA, TAMATAR CHUTNEY, NAMKEEN SEVIAN, FRUIT'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:30 PM',
                menu: 'AJWAINI ARBI MASALA, DAL ARHAR, RICE ROTI DAHI SALAD, PAPAD'
            },
            {
                name: 'Dinner',
                time: '12:30 PM - 2:30 PM',
                menu: 'LAUKI KOFTA, DAL PANCHRATNI, RICE, ROTI, STUFF GULAB JAMUN'
            }]
        },
        {
            day:'Sunday',
            menu: [{
                name: 'Breakfast',
                time: '12:30 PM - 2:30 PM',
                menu: 'PLAIN/MASALA DOSA/MEDU VADA, SAMBHAR, COCONUT CHUTNEY, DALIYA/FRUIT'
            },
            {
                name: 'Lunch',
                time: '12:30 PM - 2:30 PM',
                menu: 'PANEER MATTAR BHURJI, DAL SABUT MIX, RICE, ROTI, PLAIN LASSI, SALAD'
            },
            {
                name: 'Dinner',
                time: '12:30 PM - 2:30 PM',
                menu: 'SARSON SAAG, MISSI ROTI, DAL MOONG MALKA, RICE, KESAR PHIRNI'
            }]
        }
        
    ],
    mess_sheet: '2PACX-1vQJuh1ud4sNCBwaGKRomCKddzbskyhoFQkMYPzBWMSZURJJyV6U4kBjsqmcAmzYOPON_RYbFK4aBxqV'
}

export default data;