import React, { Component } from 'react';
import App from '../App';
class Biryani extends Component{

    constructor(){
super();
this.state = {

    counter: 1

}

this.updateCounter();

    }

    updateCounter(){
    setInterval(()=>{
      
        this.setState({counter: this.state.counter+1});

    }, 500)

    }
   render(){

    return (

        <div>

            Hello Biryani

            <br />

             <App  name={this.state.counter}/>
            {this.state.counter}
        </div>

    );



   }
}


export default Biryani;