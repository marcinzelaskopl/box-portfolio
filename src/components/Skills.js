import React, { Component } from 'react';
import '../App.scss';

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            React: 'React.JS',
            HTML: 'HTML/CSS',
            JS: 'Javascript',
            SASS: 'SASS',
            NODE: 'Node.JS'

        }
    }
    handleHTML = () => {
        this.setState ({
            HTML: 'Confident'
        });
    };
    leaveHTML = () => {
        this.setState ({
            HTML: 'HTML/CSS'
        });
    };
    handleJS = () => {
        this.setState ({
            JS: 'Feeling good'
        });
    };
    leaveJS = () => {
        this.setState ({
            JS: 'Javascript'
        });
    };
    handleSASS = () => {
        this.setState ({
            SASS: 'Confident'
        });
    };
    leaveSASS = () => {
        this.setState ({
            SASS: 'SASS'
        });
    };
    handleReact = () => {
        this.setState ({
            React: 'Feeling good'
        });
    };
    leaveReact = () => {
        this.setState ({
            React: 'React.JS'
        });
    };
    handleNode = () => {
        this.setState ({
            NODE: 'Still learning!'
        });
    };
    leaveNode = () => {
        this.setState ({
            NODE: 'Node.JS'
        });
    };
    render() {
        return (
            <div className='grid-container'>
                <div className='row'>
                    <div className='col-2'>
                    </div>
                    <div className='col-8 skills'>
                        <h1>MY SKILLS</h1>
                        <p onMouseLeave={this.leaveHTML} onMouseEnter={this.handleHTML}>{this.state.HTML}</p>
                        <p onMouseLeave={this.leaveJS} onMouseEnter={this.handleJS}>{this.state.JS}</p>
                        <p onMouseLeave={this.leaveSASS} onMouseEnter={this.handleSASS}>{this.state.SASS}</p>
                        <p onMouseLeave={this.leaveReact} onMouseEnter={this.handleReact}>{this.state.React}</p>
                        <p onMouseLeave={this.leaveNode} onMouseEnter={this.handleNode}>{this.state.NODE}</p>
                    </div>
                    <div className='col-2'>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills