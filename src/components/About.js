import React, { Component } from 'react';
import '../App.scss';

class About extends Component {
    constructor(props) {
        super(props);
        this.aboutRef = React.createRef();
    }
    render() {
        return (
            <div>
                <div className='grid-container'>
                    <div className='row'>
                        <div className='col-12 about-photo-cont'>
                        </div>
                    </div>
                </div>
            <div className='grid-container'>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                    <div id='about' className='col-8 about'>
                        <div className='about-inner'>
                        <h1>HELLO,</h1>
                        <p>I am Marcin, Front End Developer based in Poland.</p>
                        <p>I am passionate about design, coding, video games and chilling.</p>
                        <p></p>
                        </div>
                    </div>
                    <div className='col-2'>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}


export default About