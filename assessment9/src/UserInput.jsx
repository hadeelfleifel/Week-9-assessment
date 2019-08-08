import React, { Component } from 'react';
class UserInput  extends Component {
    state = { 
        newName:<input type='text'></input>
     }
    render() { 
        return ( 
       <React.fragment>
             <div>
               <span>{this.state.newName}</span>
               <hr></hr>
               <span>I am lucky</span>
           </div>
       </React.fragment>
         );
    }
}
 
export default UserInput ;