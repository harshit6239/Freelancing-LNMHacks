import React from 'react'
import './FirstPage.css'
import { Link } from 'react-router-dom';

function FirstPage(props) {

  return (
    <div className='firstpage' >
        <div className="logo">DeLancer</div>
        <div className="left">
            <div className="text">
                What brings <br />you here?
            </div>
        </div>
        <div className="right">
            <div className="box">
                <div className="upper">
                    <Link to="/" className="text" onClick={() => { props.setFreelancer(false)}}> <span>Looking for a Freelancer</span> </Link>
                </div>
                <div className="lower">
                <Link to="/freelancerConnect" className="text" onClick={() => {props.setFreelancer(true)}}> <span> I&apos;m a Freelancer</span></Link>

                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstPage