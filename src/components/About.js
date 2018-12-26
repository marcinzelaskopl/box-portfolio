import React, { Component } from 'react';
import '../App.scss';

class About extends Component {
    constructor(props) {
        super(props);
        this.aboutRef = React.createRef();
    }
    render() {
        return (
            <div className='grid-container'>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                    <div id='about' className='col-8 about'>
                    </div>
                    <div className='col-2'>
                    </div>
                </div>
            </div>
        )
    }
}


export default About