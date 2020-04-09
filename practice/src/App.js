import React, { Component } from 'react'
import Secon from '../src/secondary'
import './App.css'
// import Form from '../src/Form' 



class App extends Component {
  state = {
  Details : [
    {
      id : '0',
      name :"Amit Pandey",
      Age : 24
    },

    {
      id : '1',
      name : 'Krati Rajoriya',
      Age : 20
    }
  ]
}

switchName=(event)=>{

this.setState({
  Details : [
    {
      name :event.target.value,
      Age : 24
    },    
  ]
})
}


  render() 
  {
    return (


      
        <div className="App">
            <Secon any = {this.state.Details[0].name}
            ye={this.switchName}
            changed={this.switchName}/>
            
            
            
            <button className = 'bu' onClick = {() => { //Bad habbit code
              alert('You Clicked Me!  Keep Smilling ')
            }}>Alert!
            </button><br/>
            <br/>

            <h1> Form For Submittion</h1>

            <div className = 'Appe'>

              <label>User Name : </label>
              <input type ='text' placeholder = 'Joe_Doew'/><br/><br/>

              <label>Password : </label>
              <input type = 'password' placeholder = 'password'/><br/><br/>

              <label>Text Box : </label>
              <textarea placeholder ='Your Type Area' rows= '2' cols ='20'/><br/><br/>

              <button className= 'bu' type = 'submit' >Submit Form </button>

            </div>
        </div>
    );
  }
}

export default App;