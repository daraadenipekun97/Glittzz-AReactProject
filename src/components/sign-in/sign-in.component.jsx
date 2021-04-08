import React from 'react';
import FormInput from './../form-input/form-input.component';
import './sign-in.styles.css';
import CustomButton from './../custom-button/custom-button.component';

export class SignIn extends React.Component {
    constructor() {
        super ()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        this.setState({email:"", password: ""})
    }
    handleChange = (event) =>{
        const {name , value} = event.target;

        this.setState({[name]: value});
    }

    render(){
        return(
            <div className = "sign-in">
                <h2>Sign In Here</h2>


               <form onSubmit = {this.handleSubmit}>
                   <FormInput 
                   type="email" 
                   name="email" 
                   value={this.state.email} 
                   handleChange = {this.handleChange} 
                   label = "email"
                   required />

                  

                   <FormInput 
                   type="password" 
                   name="password" 
                   value={this.state.password} 
                   handleChange = {this.handleChange} 
                   label = "password"
                   required />

                 
                   
                   <CustomButton type="submit">Sign In</CustomButton>
                </form> 
            </div>
        );
    }
}

export default SignIn
