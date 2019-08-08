import React, {Component } from 'react';
class UserOutput extends Component {
    state = { 
        p1:'Lorem, ipsum dolor',
        p2:'Lorem ipsum dolor sit amet.'

    }
    render() { 
        return (  
            <React.Fragment>
                <span>{this.state.p1}</span>
                <hr></hr>
                <span>{this.state.p2}</span>

            </React.Fragment>
        );
    }
}
 
export default UserOutput;