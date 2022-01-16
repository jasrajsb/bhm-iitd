import './component.css'

function TeamStucture() {
    return (<div className='bg-light py-4'>
    <div className="container pb-5">
        <div className="heading p-5">
                Student Team Structure
            </div>
        <ol className="organizational-chart">
            <li>
                <div>
                    <div className='h4 my-0 py-2'>General Secretary BHM</div>
                </div>
                <ol>
                    <li>
                        <div>
                            <div className='h5 my-0 py-1'>2 BHM Secretaries</div>
                        </div>
                        <ol>
                            <li>
                                <div>
                                    <div className='h6 my-0'>BHM Representatives <br/>(1 from each hostel)</div>
                                </div>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <div>
                            <div className='h5 my-0 py-1'>House Secretary</div>
                        </div>
                        <ol>
                            <li>
                                <div>
                                    <div className='h6 my-0'>Mess Secretary</div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className='h6 my-0'>Maintenance Secretary</div>
                                </div>
                            </li>
                        </ol>
                    </li>
                </ol>
            </li>
        </ol>
</div>
</div>)
}

export default TeamStucture;