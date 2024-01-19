import React from 'react'
import './Freelancer.css'
import jobdes from '../JobDes/jobdes';

function Freelancer(props) {

    return (
        <div className='page'>
            {/* <img src="/background.png" alt="" className="background" /> */}
            <div className="logo">DeLancer</div>
            <div className="profile">
                <img src="" alt="" />
                img
            </div>
            <div className="content">
                <div className="tagLine">
                    Find the right freelance<br />service, right away
                </div>
                <div className="jobList">
                    {props.jobList.map((job) => (
                        <div className="job" key={job.id}>
                            <div className="description">
                                <div className="jobTitle">{job.title}</div>
                                <p className="jobDescription">{job.description}</p>
                            </div>
                            <div className="price">
                                <div className="jobPrice">${job.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Freelancer