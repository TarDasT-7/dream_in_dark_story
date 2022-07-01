import React, { useState } from "react";
import './sign-in.styles.scss';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state={
            'email':'' ,
            'password':''
        }
    }


    HandleSubmit = event =>{
        event.preventDefault();

        this.setState({email:'' , password:''});
    };

    HandleChange = event =>{

        // const {value , name} = useState();
        const {value , name} = event.target;
        this.setState({[name]:value});

    };

    render(){
        return(
            <div className="sign-in">
                <h2>I Already Have An Accont</h2>
                <span>Sign In With Email And Password</span>

                <form onSubmit={this.HandleSubmit}>
                    <FormInput 
                        type="email" name="email" label="Email"
                        value={this.state.email} handleChange={this.HandleChange}
                        required 
                    />

                    <FormInput 
                        type="password" name="password" label="Password"
                        value={this.state.password} handleChange={this.HandleChange}
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type="submit" >
                            SIGN IN
                        </CustomButton>
                        

                    </div>

                </form>

            </div>
        );
    }

}

export default SignIn;