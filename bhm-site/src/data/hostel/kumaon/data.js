import KumaonImages from "../../../components/gallery/KumaonImages";
import cult from "./cult.jpg";
import hero from "./hero.jpg";
import house from "./house.jpg";
import maint from "./maint.jpg";
import mess from "./mess.jpg";
import sac from "./sac.jpg";
import sports from "./sports.jpg";
var data = {
	hero: hero,
	introduction: `Established in 1969, Kumaon House has always had a rich legacy in cultural and sports, evident through its remarkable achievements in BRCA, BSA, and BSP trophies over the years. It is famous on the campus that the RCA trophy had to be shut down temporarily due to the over domination of Kumaon. When it was reinstated, Kumaon won the RCA again, consecutively in 2019-20 and 2020-21. Further, Kumaon has won the GC consecutively five times, which is the longest streak in the trophy history. 

    All this is credited to the brilliant culture established in the hostel and passionately carried forward each year. The seniors mould the freshers and inspire them to emerge as winners in every field. Seniors and juniors all share a very close bond and are offered zealous support from the alumni of Kumaon. 
    
    Kumaon is not just a hostel. It is a very close-knit family, where everyone works hard to take themselves and the hostel to greater heights and have loads of fun along the way.
    `,
	vision: `To metamorphose cubs into tigers`,
	gallery: KumaonImages,
	contact: [
		{
			designation: "Caretaker",
			name: "Virendra Kumar Dubey",
			phone: "011 2659 6992",
			email: "a26430@admin.iitd.ac.in",
		},
		{
			designation: "Warden",
			name: "Prof. Harsha Kota",
			phone: "",
			email: "harshakota@civil.iitd.ac.in",
		},
		{
			designation: "Guard",
			name: "⠀",
			phone: "011 2659 6917",
			email: "⠀",
		},
	],
	secys: [
		{
			designation: "House Secretary",
			name: "Jayesh Jawandhia",
			image: house,
		},
		{
			designation: "Maintenance Secretary",
			name: "Shubham Jakhar",
			image: maint,
		},
		{
			designation: "Cultural Seceratary",
			name: "Prem Khandelwal",
			image: cult,
		},
		{
			designation: "Mess Secretary",
			name: "Abhishek Palway",
			image: mess,
		},
		{
			designation: "Secretary to SAC",
			name: "Shashwat Garg",
			image: sac,
		},
		{
			designation: "Sports Secretary",
			name: "Shubham S. Rathore",
			image: sports,
		},
	],
};

export default data;
