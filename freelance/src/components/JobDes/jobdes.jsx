import React from 'react'
// import "/jobdes.css"
function jobdes() {
  return (
    <>
        <div className="jobdes">
            <div className="jobdes__container">
            <div className="jobdes__title">
                <h1>Job Description</h1>
            </div>
            <div className="jobdes__content">
                <div className="jobdes__content__title">
                <h3>Job Title</h3>
                </div>
                <div className="jobdes__content__description">
                <p>Job Description</p>
                </div>
                <div className="jobdes__content__price">
                <p>Price</p>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default jobdes