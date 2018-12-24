import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import '../App.scss';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: '',
            text: ''
        }
    }
    handleBox = () => {
        this.setState ({
            width: '20vw',
            text: <Typing><h1>Hello, welcome to my portfolio!</h1></Typing>,
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Main