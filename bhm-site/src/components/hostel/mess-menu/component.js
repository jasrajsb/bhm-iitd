import './component.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function parseCSV(str) {
    var arr = [];
    var quote = false;  // 'true' means we're inside a quoted field

    // Iterate over each character, keep track of current row and column (of the returned array)
    for (var row = 0, col = 0, c = 0; c < str.length; c++) {
        var cc = str[c], nc = str[c+1];        // Current character, next character
        arr[row] = arr[row] || [];             // Create a new row if necessary
        arr[row][col] = arr[row][col] || '';   // Create a new column (start with empty string) if necessary

        // If the current character is a quotation mark, and we're inside a
        // quoted field, and the next character is also a quotation mark,
        // add a quotation mark to the current column and skip the next character
        if (cc == '"' && quote && nc == '"') { arr[row][col] += cc; ++c; continue; }

        // If it's just one quotation mark, begin/end quoted field
        if (cc == '"') { quote = !quote; continue; }

        // If it's a comma and we're not in a quoted field, move on to the next column
        if (cc == ',' && !quote) { ++col; continue; }

        // If it's a newline (CRLF) and we're not in a quoted field, skip the next character
        // and move on to the next row and move to column 0 of that new row
        if (cc == '\r' && nc == '\n' && !quote) { ++row; col = 0; ++c; continue; }

        // If it's a newline (LF or CR) and we're not in a quoted field,
        // move on to the next row and move to column 0 of that new row
        if (cc == '\n' && !quote) { ++row; col = 0; continue; }
        if (cc == '\r' && !quote) { ++row; col = 0; continue; }

        // Otherwise, append the current character to the current column
        arr[row][col] += cc;
    }
    return arr;
}
const process_mess_menu = (data)=>{
    if(data) ; else return;
    console.log(data)
    const breakfast_timing = `${data[1][1]} ${data[1][2]} - ${data[1][3]} ${data[1][4]} `;
    const lunch_timing = `${data[2][1]} ${data[2][2]} - ${data[2][3]} ${data[2][4]} `;
    const dinner_timing = `${data[3][1]} ${data[3][2]} - ${data[3][3]} ${data[3][4]} `;
    var menu = [];
    (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']).forEach((day_name, day_index)=>{
        const day_menu = [];
        for(var i=1; i<data.length; i++){
            day_menu.push({
                name: data[i][0],
                menu: data[i][day_index+5],
                time: `${data[i][1]} ${data[i][2]} - ${data[i][3]} ${data[i][4]} `
            });
        }
        menu.push(
            {
                day:day_name,
                menu: day_menu
            },
        )
        
    });
    return menu;
    

}
const fetch_mess_menu = async (sheet) => {
    var data = await fetch(`https://docs.google.com/spreadsheets/d/e/${sheet}/pub?output=csv`).then(res => res.text()).then(data => process_mess_menu(parseCSV(data)));
    console.log(data)
    return data;
};

function Messmenu(props) {

    const [dayname, setDay] = useState('monday');
    const [show_menu, set_show_menu] = useState(false);
    const [mess, set_menu] = useState({});
    useEffect(() => {
        fetch_mess_menu(props.mess_sheet).then((data)=>{
            var temp = mess;
            temp[props.hostel] = data;
            set_menu(temp);
            set_show_menu(true);
        });
      }, []);
    if(!mess[props.hostel]&&show_menu){
        set_show_menu(false);
        fetch_mess_menu(props.mess_sheet).then((data)=>{
            var temp = mess;
            temp[props.hostel] = data;
            set_menu(temp);
            set_show_menu(true);
        });
    }
    console.log(mess)
    if(show_menu)return <div id="mess-menu" className="container-fluid my-5">
        <div className="heading pb-4">
            Mess Menu
        </div>
        <div class="container menu my-2 text-center">
            <div id="marker"></div>
            <div className="row text-center">
                <div className="col-0 col-lg-2"></div>
                <div className='col p-0 mb-3'><Link className={"link1" + (dayname === 'monday' ? ' active' : '')} to="#" onClick={() => { setDay('monday') }}>Monday</Link></div>
                <div className='col p-0 mb-3'><Link className={"link1" + (dayname === 'tuesday' ? ' active' : '')} to="#" onClick={() => { setDay('tuesday') }}>Tuesday</Link></div>
                <div className='col p-0 mb-3'><Link className={"link1" + (dayname === 'wednesday' ? ' active' : '')} to="#" onClick={() => { setDay('wednesday') }}>Wednesday</Link></div>
                <div className='col p-0 mb-3'><Link className={"link1" + (dayname === 'thursday' ? ' active' : '')} to="#" onClick={() => { setDay('thursday') }}>Thursday</Link></div>
                <div className='col p-0 mb-3'><Link className={"link1" + (dayname === 'friday' ? ' active' : '')} to="#" onClick={() => { setDay('friday') }}>Friday</Link></div>
                <div className='col p-0 mb-3'><Link className={"link1" + (dayname === 'saturday' ? ' active' : '')} to="#" onClick={() => { setDay('saturday') }}>Saturday</Link></div>
                <div className='col p-0 mb-3'><Link className={"link1" + (dayname === 'sunday' ? ' active' : '')} to="#" onClick={() => { setDay('sunday') }}>Sunday</Link></div>
                <div className="col-0 col-lg-2"></div>
            </div>
        </div>
        <div id="menu-container" className="container mt-4">
            <div className="full-width">
                {mess[props.hostel]&&mess[props.hostel].map(day => {
                    return <div className={"row full-width " + ((day.day.toString().toLowerCase() === dayname) ? '' : 'd-none')}>
                        {
                            day.menu.map(meal =>
                                <div className="col d-flex">
                                    <div class="box mx-0 my-3 px-4 py-3">
                                        {/* <h3>Lunch</h3> */}
                                        <div>
                                            <i class="fas fa-utensils pr-2"></i>
                                            <div className="meal-name d-inline">{meal.name}</div>
                                        </div>
                                        <div className="meal-time mt-2">{meal.time}</div>
                                        <div className='mess-items mt-2 font-size-smaller'>{meal.menu}</div>
                                    </div>
                                </div>)}
                    </div>
                }

                )}
            </div>




        </div>
    </div>
    else return <></>

}

export default Messmenu;