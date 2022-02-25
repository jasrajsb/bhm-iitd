import './component.css';
import notices from '../../data/noticeBoard';
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

const process_notices = (data)=>{
  console.log(data)
  var notices = [];
  data.forEach((notice, i) => {
    if(i)
    notices.push({
      heading: notice[1],
      notice: notice[2],
      link: notice[3],
      link_text:  notice[4],
      show: true
    })
  });
  return notices;

}

const fetch_notices = async (sheet) => {
  var data = await fetch(`https://docs.google.com/spreadsheets/d/e/${sheet}/pub?output=csv`).then(res => res.text()).then(data => process_notices(parseCSV(data)));
  console.log(data)
  return data;
};

function Notice(props) {

  return <div className="notice p-4 my-4 bg-white">

    <div className="notice-title">
      {props.title}
    </div>
    <div className="notice-body mt-1">
      {props.body}
    </div>
    <div className="mt1">
      <><a className='notice-link' href={props.link} target='blank'>{props.link_text}</a></>
    </div>
  </div>
}

function Notices() {
  const [show_notices, set_show_notices] = useState(false);
  const [notices, set_notices] = useState([]);
  useEffect(() => {
        fetch_notices("2PACX-1vTD25efn3JgOxASC0ZIMYNXSpzUgvKoldno68XouoK3uZExpYupNNFqbUhcc_5sL5qMdzEcZzyZjAJh").then((data)=>{
            set_notices(data);
            set_show_notices(true);
        });
      }, []);

  return !show_notices?<></>:<div className="my-5 py-5 bg-light">
    <div>
      <h2 class="heading">Notices</h2>
    </div>
    <div class="container">
      <div className="notices text-left">
         {
           notices.map((notice)=><div className={notice.show?'':'d-none'}><Notice title={notice.heading} body={notice.notice} link = {notice.link} link_text={notice.link_text}/></div>)
         }
      </div>
    </div>
  </div>
}

export default Notices