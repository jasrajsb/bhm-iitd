import './component.css';
import notices from '../../data/noticeBoard';


function Notice(props) {
  
  return <div className="notice p-3">
    <div className="notice-title">
      {props.title}
    </div>
    <div className="notice-body mt-1">
      {props.body}
    </div>
    <a className="notice-link mt-1" href="#">
      Learn More
    </a>
  </div>
}

function Notices() {

  return <div className="pt-5 pb-0 my-5 bg-light">
    <div>
      <h2 className="heading">Notices</h2>
    </div>
    <div className="container">
      <div className="notices row pb-5">
         {
           notices.map((notice)=>(<div className='col-md-4 p-4'>
           <div className={`sticky-container ${notice.show?'':'d-none'}`}>
           <div className="sticky-outer">
             <div className="sticky">
               <svg width="0" height="0">
                 <defs>
                   <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                     <path
                       d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                       stroke-linejoin="round"
                       stroke-linecap="square"
                     />
                   </clipPath>
                 </defs>
               </svg>
               <div className="sticky-content">
                  <Notice title={notice.heading} body={notice.notice.slice(0,200)+"...."} link={notice.link}/>
               </div>
             </div>
           </div>
         </div>
         </div>))
         }
      </div>
    </div>
  </div>
  /*<div className={notice.show?'':'d-none'}><Notice title={notice.heading} body={notice.notice}/></div>*/
}

export default Notices