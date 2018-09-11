import React, { Component } from 'react';
import SignIn from './signIn';
import { _getUsers } from '../util/_DATA'
import store from './../redux/store';
import { connect } from 'react-redux';



import './../button.css';


//store.dispatch({ type: 'LOGIN', userID: selectedValueFromDropdown });
export default class Login extends Component {

   

    constructor(props) {
        super(props);
        this.state = {
            usersArray: [],
            clickLogin: true,
            clickUser: "none"
        };
      }
   
      componentDidMount(){
        this.state = {
            clickLogin: true,
            clickUser:  "none"

        };

         
        Promise.all([
            _getUsers()
          ]).then(users => { 

            for (var key in users[0]) {
                if (users[0].hasOwnProperty(key)) {
                    var obj = key;
                     //window.alert(' obj ' + users[0][key].name)
                     
                }
            }

            
          });
       
      }
      handleChange = (event) => {
        window.alert(' obj 000'  + event.target.value );
        store.dispatch({ type: 'LOGIN', userID:  event.target.value});
        this.setState({ clickUser: event.target.value });
       // window.alert(' obj 111'  + this.state.clickUser);
      };
      render() {
        const { options, value } = this.state;
        
        if(this.state.usersArray.length ==0)
        {
        Promise.all([
            _getUsers()
          ]).then(users => { 

            for (var key in users[0]) {
                if (users[0].hasOwnProperty(key)) {
                    var obj = key;
                     //window.alert(' obj ' + users[0][key].name)
                     
                     this.setState( (state) => {
                        state.usersArray = state.usersArray.concat(users[0][key].name);
                        
                    });
                     
                    
                    
                }
            }

            
          });
        }
          function myFunction(){
           
            
        }

        document.body.addEventListener('click', myFunction);

        

         return (
            <p className="App-intro">
         { this.state.clickLogin ?  <button class="button" onClick={() => this.setState({clickLogin: false})}>
            Log in
          </button> :
          
          
          <div class="styled-select" >
           <select id="select" onChange={this.handleChange} value={value}>
            <option value="0">Choose user</option>
            
            {this.state.usersArray.map(element => <option value={element}>{element}</option>)}
            </select>
            
           </div>
        }
        </p>
            
        );
      
      }
}


