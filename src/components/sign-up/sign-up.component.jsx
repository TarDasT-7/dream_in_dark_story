import React from "react";
import './sign-up.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


class SignUp extends React.Component{

    constructor(){
        super();

        this.state = {
            'displayName':'',
            'email':'',
            'password':'',
            'confirmPassword':'',

        }
    }

    handleSubmi = async event =>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }

    }

    handleChange = event =>{
        const {name , value} = event.target;
        this.setState({[name] : value});
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title"> I don't have a accont </h2>
                <span>sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmi}>
                    <FormInput 
                        type = 'text'
                        name = 'displayName'
                        value = {displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />

                    <FormInput 
                        type = 'email'
                        name = 'email'
                        value = {email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />

                    <FormInput 
                        type = 'password'
                        name = 'password'
                        value = {password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <FormInput 
                        type = 'password'
                        name = 'confirmPassword'
                        value = {confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type="submit"> Sign Up </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;