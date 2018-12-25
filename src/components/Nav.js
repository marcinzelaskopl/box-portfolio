import React, { Component } from 'react';
import '../App.scss';

class Nav extends Component {
    render() {
        return (
            <div className='grid-container'>
                <div className='row'>
                    <div className='col-12 nav'>
                        <p className='home'>HOME</p>
                        <p>ABOUT</p>
                        <p>PROJECTS</p>
                        <p>CONTACT</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav