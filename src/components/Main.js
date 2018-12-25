import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import Slide from 'react-reveal/Slide';
import '../App.scss';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: '',
            text: '',
            arrow: ''
        }
    }
    handleBox = () => {
        this.setState ({
            width: '20vw',
            text: <Typing><h1>Hello, welcome to my portfolio!</h1></Typing>,
            arrow: <Slide bottom><div><div className='arrow'></div></div></Slide>,
        })
    }
    handleBoxLeave = () => {
        this.setState ({
            width: '',
            text: '',
        })
    }
    render() {
        return (
            <div className='grid-container'>
                <div className='row'>
                    <div class='col-12 main'>
                        <div onMouseLeave={this.handleBoxLeave} onMouseEnter={this.handleBox} style={{width: this.state.width}} className='box'>
                            {this.state.text}
                        </div>
                        {this.state.arrow}
                    </div>
                </div>
            </div>
        )
    }
}

export default Main