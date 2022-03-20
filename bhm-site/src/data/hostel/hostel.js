import aravali from "./aravali/data";
import aravali_logo from "./aravali/logo.jpg";
import girnar from "./girnar/data";
import girnar_logo from "./girnar/logo.jpg";
import himadri from "./himadri/data";
import himadri_logo from "./himadri/logo.jpg";
import jwalamukhi from "./jwalamukhi/data";
import jwalamukhi_logo from "./jwalamukhi/logo.jpg";
import kailash from "./kailash/data";
import kailash_logo from "./kailash/logo.jpg";
import karakoram from "./karakoram/data";
import karakoram_logo from "./karakoram/logo.jpg";
// import new_kailash from './new_kailash/data';
import kumaon from "./kumaon/data";
// import new_kailash_logo from './new_kailash/logo.jpg';
import kumaon_logo from "./kumaon/logo.jpg";
import nilgiri from "./nilgiri/data";
import nilgiri_logo from "./nilgiri/logo.jpg";
import satpura from "./satpura/data";
import satpura_logo from "./satpura/logo.jpg";
import shivalik from "./shivalik/data";
import shivalik_logo from "./shivalik/logo.jpg";
import udaigiri from "./udaigiri/data";
import udaigiri_logo from "./udaigiri/logo.jpg";
import vindhyachal from "./vindhyachal/data";
import vindhyachal_logo from "./vindhyachal/logo.jpg";
import zanskar from "./zanskar/data";
import zanskar_logo from "./zanskar/logo.jpg";

var data = {};

data["aravali"] = aravali;
data["aravali"]["logo"] = aravali_logo;
// data["aravali"]["gallery"] = {
// 	1: { ...data["aravali"]["gallery"][1], cover_image: aravali_logo },
// };
data["girnar"] = girnar;
data["girnar"]["logo"] = girnar_logo;
// data["girnar"]["gallery"] = {
// 	1: { ...data["girnar"]["gallery"][1], cover_image: girnar_logo },
// };
data["jwalamukhi"] = jwalamukhi;
data["jwalamukhi"]["logo"] = jwalamukhi_logo;
// data["jwalamukhi"]["gallery"] = {
// 	1: { ...data["jwalamukhi"]["gallery"][1], cover_image: jwalamukhi_logo },
// };
data["karakoram"] = karakoram;
data["karakoram"]["logo"] = karakoram_logo;
// data["karakoram"]["gallery"] = {
// 	1: { ...data["karakoram"]["gallery"][1], cover_image: karakoram_logo },
// };
data["nilgiri"] = nilgiri;
data["nilgiri"]["logo"] = nilgiri_logo;
// data["nilgiri"]["gallery"] = {
// 	1: { ...data["nilgiri"]["gallery"][1], cover_image: nilgiri_logo },
// };
data["shivalik"] = shivalik;
data["shivalik"]["logo"] = shivalik_logo;
// data["shivalik"]["gallery"] = {
// 	1: { ...data["shivalik"]["gallery"][1], cover_image: shivalik_logo },
// };
data["satpura"] = satpura;
data["satpura"]["logo"] = satpura_logo;
// data["satpura"]["gallery"] = {
// 	1: { ...data["satpura"]["gallery"][1], cover_image: satpura_logo },
// };
data["udaigiri"] = udaigiri;
data["udaigiri"]["logo"] = udaigiri_logo;
// data["udaigiri"]["gallery"] = {
// 	1: { ...data["udaigiri"]["gallery"][1], cover_image: udaigiri_logo },
// };
data["vindhyachal"] = vindhyachal;
data["vindhyachal"]["logo"] = vindhyachal_logo;
// data["vindhyachal"]["gallery"] = {
// 	1: { ...data["vindhyachal"]["gallery"][1], cover_image: vindhyachal_logo },
// };
data["zanskar"] = zanskar;
data["zanskar"]["logo"] = zanskar_logo;
// data["zanskar"]["gallery"] = {
// 	1: { ...data["zanskar"]["gallery"][1], cover_image: zanskar_logo },
// };
data["kailash"] = kailash;
data["kailash"]["logo"] = kailash_logo;
// data["kailash"]["gallery"] = {
// 	1: { ...data["kailash"]["gallery"][1], cover_image: kailash_logo },
// };
data["himadri"] = himadri;
data["himadri"]["logo"] = himadri_logo;
// data["himadri"]["gallery"] = {
// 	1: { ...data["himadri"]["gallery"][1], cover_image: himadri_logo },
// };
// data['new_kailash'] = new_kailash;
// data['new_kailash']["logo"] = new_kailash_logo
data["kumaon"] = kumaon;
data["kumaon"]["logo"] = kumaon_logo;
// data["kumaon"]["gallery"] = {
// 	1: { ...data["kumaon"]["gallery"][1], cover_image: kumaon_logo },
// };

var hostel_list = [
	"aravali",
	"girnar",
	"jwalamukhi",
	"karakoram",
	"nilgiri",
	"shivalik",
	"satpura",
	"udaigiri",
	"vindhyachal",
	"zanskar",
	"kailash",
	"himadri",
	/*'new_kailash',*/ "kumaon",
];
var hostels = {};

hostel_list.forEach(hostel => {
	hostels[hostel] = data[hostel];
});

console.log("hostels", hostels);
export default hostels;
