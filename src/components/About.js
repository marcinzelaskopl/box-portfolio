import React, { Component } from 'react';
import '../App.scss';

class About extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef;
    }
    scrollTo = () => {
        window.scrollTo({
            top: this.myRef.current.offsetTop,
            behavior: "smooth",
        })
    }
    render() {
        return (
            <div className='grid-container'>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                    <div ref={this.myRef} className='col-8 about'>
                    </div>
                    <div className='col-2'>
                    </div>
                </div>
            </div>
        )
    }
}

export default About