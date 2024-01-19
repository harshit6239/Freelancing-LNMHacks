import React from 'react'
import './Freelancer.css'

function Freelancer() {
    let jobList = []; // Assuming jobList is an array of job objects

    return (
        <div className='page'>
            <div className="logo">DeLancer</div>
            <div className="profile">
                <img src="" alt="" />
                img
            </div>
            <div className="tagLine">
                Find the right freelance<br />service, right away
            </div>
            <div className="jobList">
                {jobList.map((job) => (
                    <div className="job" key={job.id}>
                        <div className="jobTitle">{job.title}</div>
                        <div className="jobDescription">{job.description}</div>
                        <div className="jobPrice">{job.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Freelancer