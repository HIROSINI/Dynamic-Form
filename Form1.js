import React from 'react';
import './Form.css';


class RegisterForm extends React.Component 
{
    constructor() 
    {
        super();
        this.state = {
            fields: {},
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = 
        this.submituserRegistrationForm.bind(this);
    };
    handleChange(e) 
    {
        let fields = this.state.fields;
            fields[e.target.name] = e.target.value;
        this.setState({fields});
    }
    submituserRegistrationForm(e) 
    {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["mobileno"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
    }
    validateForm() 
    {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }
        if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-z|A-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }
        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }
        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})")) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }
        this.setState({errors: errors});
        return formIsValid;
    }
    render() 
    {
        return (
            <div id="main-registration-container">
                <div id="register">
                    <h1>Dynamic Form</h1>
                    <form method="post" name="userRegistrationForm" onSubmit= {this.submituserRegistrationForm} >
                    <label>Enter your Username:</label><br></br><br></br>
                    <input type="text" name="username" value={this.state.fields.username}onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.username}</div><br></br>
                    <label>Enter your Email-ID:</label><br></br><br></br>
                    <input type="email" name="emailid" value={this.state.fields.emailid}onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.emailid}</div><br></br>
                    <label>Enter your Password:</label><br></br><br></br>
                    <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.password}</div><br></br>
                    <input type="submit" className="button"  value="Submit"/>
                    </form>
                </div>
            </div>
        );
    }
}
export default RegisterForm;