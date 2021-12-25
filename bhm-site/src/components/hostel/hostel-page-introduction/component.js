function Introduction(props){
    return <div className="introduction text-justify">
        <div className="container py-5">
            <div className="heading pb-5">
                Introduction
            </div>
            {props.text}
        </div>
    </div>
}

export default Introduction;