import './component.css';
function ProfileCard(props) {
    return <div className="profile-card my-5">
        <div className="profile-image">
            <img src={props.image} alt="" className='profile-img-blur' />
            <img src={props.image} alt="" className='profile-img-main' />
            <div className="profile-info px-3 py-3 text-left">
                <div className="profile-name">{props.name}</div>
                <div className="profile-designation">{props.designation}</div>

            </div>

        </div>
        
        
    </div>
}

export default ProfileCard;