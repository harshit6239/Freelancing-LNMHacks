import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams

function Jobdes(props) {
  const { id } = useParams();
  const job = props.jobList.find((job) => job.id === parseInt(id));
  
  if (!job) {
    return <div>Job not found</div>;
  }

  useEffect(() => {
    console.log(job);
  }, [job]);

  return (
    <>
      <div>
        <div className="description">
          <h1 className="jobTitle">{job.title}</h1>
          <p className="jobDescription">{job.description}</p>
        </div>
        <div className="price">
          <div className="jobPrice">${job.price}</div>
        </div>
        {/* Add more details as needed */}
      </div>
    </>
  );
}

export default Jobdes;
