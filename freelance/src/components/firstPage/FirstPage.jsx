import React from 'react'
import './FirstPage.css'

function FirstPage() {
  return (
    <div className='page' >
        <div className="logo">DeLancer</div>
        <div className="left">
            <div className="text">
                What brings <br />you here?
            </div>
        </div>
        <div className="right">
            <div className="box">
                <div className="upper">
                    <div className="text">Looking for a Freelancer</div>
                </div>
                <div className="lower">
                    <div className="text">I'm a Freelancer</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstPage