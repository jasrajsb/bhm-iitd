import './component.css';
function ProfileCard(props) {
    return <div className="profile-card my-5">
        <div className="profile-image">
            <img src={props.image} alt="" className='profile-img-blur'/>
            <img src={props.image} alt="" className='profile-img-main'/>
            <div className="profile-info px-3 py-3 text-left">
                <div className="profile-name">{props.name}</div>
                <div className="profile-designation">{props.designation}</div>
                <div className="social-icons">
                    <a class="social-icon" href={props.linkedin} target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a class="social-icon" href={'mailto:'+props.mail}><i class="fa fa-envelope" aria-hidden="true"></i></a>
                    <a class="social-icon" href={'tel:+91'+props.phone}><i class="fa fa-phone-alt" aria-hidden="true"></i></a>
                </div>
            </div>

        </div>
        
        
    </div>
}

export default ProfileCard;