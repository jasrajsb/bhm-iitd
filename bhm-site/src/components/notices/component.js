import './component.css';
import notices from '../../data/noticeBoard';

function Notice(props) {

  return <div className="notice p-4 my-4 bg-white">

    <div className="notice-title">
      {props.title}
    </div>
    <div className="notice-body mt-1">
      {props.body}
    </div>
    <div className={"mt-1 "+(props.link?'':'d-none')}>
      <a className='notice_link small text-dark fw-bold' href={props.link}>{props.link_name}</a>
    </div>
  </div>
}

function Notices() {

  return <div className="my-5 py-5 bg-light">
    <div>
      <h2 class="heading">Notices</h2>
    </div>
    <div class="container">
      <div className="notices text-left ">
         {
           notices.map((notice)=><div className={notice.show?'':'d-none'}><Notice link={notice.link} title={notice.heading} body={notice.notice} link_name={notice.link_name}/></div>)
         }
      </div>
    </div>
  </div>
}

export default Notices