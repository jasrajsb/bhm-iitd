function Vision(props){
    return <div className="vision text-justify">
        <div className="container py-5">
            <div className="heading pb-5">
                Vision
            </div>
            {props.text}
        </div>
    </div>
}

export default Vision;