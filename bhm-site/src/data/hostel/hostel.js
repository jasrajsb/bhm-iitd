import aravali from './aravali/data';
import girnar from './girnar/data';
import jwalamukhi from './jwalamukhi/data';
import karakoram from './karakoram/data';
import nilgiri from './nilgiri/data';
import shivalik from './shivalik/data';
import satpura from './satpura/data';
import udaigiri from './udaigiri/data';
import vindhyachal from './vindhyachal/data';
import zanskar from './zanskar/data';
import kailash from './kailash/data';
import himadri from './himadri/data';
// import new_kailash from './new_kailash/data';
import kumaon from './kumaon/data';



import aravali_logo from './aravali/logo.webp';
import girnar_logo from './girnar/logo.webp';
import jwalamukhi_logo from './jwalamukhi/logo.webp';
import karakoram_logo from './karakoram/logo.webp';
import nilgiri_logo from './nilgiri/logo.webp';
import shivalik_logo from './shivalik/logo.webp';
import satpura_logo from './satpura/logo.webp';
import udaigiri_logo from './udaigiri/logo.webp';
import vindhyachal_logo from './vindhyachal/logo.webp';
import zanskar_logo from './zanskar/logo.webp';
import kailash_logo from './kailash/logo.webp';
import himadri_logo from './himadri/logo.webp';
// import new_kailash_logo from './new_kailash/logo.jpg';
import kumaon_logo from './kumaon/logo.webp';


var data = {};

data['aravali'] = aravali;
data['aravali']["logo"] = aravali_logo
data['girnar'] = girnar;
data['girnar']["logo"] = girnar_logo
data['jwalamukhi'] = jwalamukhi;
data['jwalamukhi']["logo"] = jwalamukhi_logo
data['karakoram'] = karakoram;
data['karakoram']["logo"] = karakoram_logo
data['nilgiri'] = nilgiri;
data['nilgiri']["logo"] = nilgiri_logo
data['shivalik'] = shivalik;
data['shivalik']["logo"] = shivalik_logo
data['satpura'] = satpura;
data['satpura']["logo"] = satpura_logo
data['udaigiri'] = udaigiri;
data['udaigiri']["logo"] = udaigiri_logo
data['vindhyachal'] = vindhyachal;
data['vindhyachal']["logo"] = vindhyachal_logo
data['zanskar'] = zanskar;
data['zanskar']["logo"] = zanskar_logo
data['kailash'] = kailash;
data['kailash']["logo"] = kailash_logo
data['himadri'] = himadri;
data['himadri']["logo"] = himadri_logo
// data['new_kailash'] = new_kailash;
// data['new_kailash']["logo"] = new_kailash_logo
data['kumaon'] = kumaon;
data['kumaon']["logo"] = kumaon_logo

var hostel_list = ['aravali', 'girnar', 'jwalamukhi', 'karakoram', 'nilgiri', 'shivalik', 'satpura', 'udaigiri', 'vindhyachal', 'zanskar', 'kailash', 'himadri', /*'new_kailash',*/ 'kumaon'];
var hostels = {};

hostel_list.forEach(hostel => {
    hostels[hostel] = data[hostel];
});

console.log("hostels", hostels);
export default hostels;