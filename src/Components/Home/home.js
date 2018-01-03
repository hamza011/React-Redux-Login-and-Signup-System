import React from 'react';
import loginSamplePhoto from '../../images/Screenshot3.png'
import signUpSamplePhoto from '../../images/Screenshot2.png'
import './home.css'


export class Home extends React.Component {
    render() {
        return (
            <div className="home-comp">
                <div className='home-content'>
                    <h2>New to this app?</h2>
                    <h4>Create an account now. </h4>
                    <img src={signUpSamplePhoto} alt="SCREENSHOT" />
                </div>
                <div className='home-content'>
                    <h2>Already a member?</h2>
                    <h4> Login now. </h4>
                    <img src={loginSamplePhoto} alt="LOGIN IMG" />
                </div>
            </div>
        )
    }
}