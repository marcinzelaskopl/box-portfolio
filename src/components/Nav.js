import React, { Component } from 'react';
import '../App.scss';


class Nav extends Component {
    constructor(props){
        super(props);

        this.state = {
            isTop: true,
            background: '',
        }
    }
    componentDidMount() {
        document.addEventListener('scroll', ()=> {
            const isTop = window.scrollY < 500;
            if (isTop !== this.state.isTop) {
                this.setState ({
                    isTop
                })
            }
        });
    }
    render() {
        return (
            <div className='grid-container'>
                <div className='row'>
                    <div style={{backgroundColor: this.state.isTop ? 'white': 'black', color: this.state.isTop ? 'black' : 'white'}} className='col-12 nav'>
                        <p className='home'>HOME</p>
                        <a style={{color: this.state.isTop ? 'black' : 'white'}} href='#about'><p>ABOUT</p></a>
                        <p>PROJECTS</p>
                        <p>CONTACT</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav