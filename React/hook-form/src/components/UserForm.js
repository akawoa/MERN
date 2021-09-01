import React, { useState } from  'react';
    
    
const UserForm = (props) => {
        const{inputs, setInputs} = props;
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
        const [firstNameError, setFirstNameError] = useState("");
        const [lastNameError, setLastNameError] = useState("");
        const [emailError, setEmailError] = useState("");
        const [passwordError, setPasswordError] = useState("");
        const [confirmPasswordError, setConfirmPasswordError] = useState("");


        const onChange = (e) => {
            setInputs({
                inputs,
                [e.target.name]: e.target.value
            });
        };

        const createUser = (e) => {
            e.preventDefault();
            const newUser = {firstName, lastName, email, password, confirmPassword};
            console.log("Welcome", newUser);
            setHasBeenSubmitted(true);
        };

        const formMessage = () => {
            if (hasBeenSubmitted) {
                return "Thank you for submitting the form!";
            } else {
                return "Welcome, please submit the form";
            }
        };

        const handleFirstName = (e) => {
            setFirstName(e.target.value);
            if(e.target.value.length < 1) {
                setFirstNameError("First Name is Required!")
            } else if (e.target.value.length <2) {
                setFirstNameError("First Name must be 2 characters or longer!");
            } else if (e.target.value.length >= 2) {
                setFirstNameError("")
            }
        };

        const handleLastName = (e) => {
            setLastName(e.target.value);
            if(e.target.value.length < 1) {
                setLastNameError("Last Name is Required!")
            } else if (e.target.value.length <2) {
                setLastNameError("Last Name must be 2 characters or longer!");
            } else if (e.target.value.length >= 2) {
                setLastNameError("")
            }
        };

        const handleEmail = (e) => {
            setEmail(e.target.value);
            if(e.target.value.length < 1) {
                setEmailError("Email is Required!")
            } else if (e.target.value.length <5) {
                setEmailError("Email must be 5 characters or longer!");
            } else if (e.target.value.length >= 5) {
                setEmailError("")
            }
        };

        const handlePassword = (e) => {
            setPassword(e.target.value);
            if(e.target.value.length < 1) {
                setPasswordError("Password is Required!")
            } else if (e.target.value.length <8) {
                setPasswordError("Password must be 8 characters or longer!");
            } else if (password !== confirmPassword) {
                setConfirmPasswordError("Passwords must match");
            } else {
                setPasswordError("")
                }
            };
        

        const handleConfirmPassword = (e) => {
            setConfirmPassword(e.target.value);
            if(e.target.value.length < 1) {
                setConfirmPasswordError("Password is Required!")
            } else if (e.target.value.length <8) {
                setConfirmPasswordError("Password must be 8 characters or longer!");
            } else if (e.target.value.length >= 8) {
                if (confirmPassword != password) {
                    setConfirmPasswordError("Passwords must match")
                } else {
                setConfirmPasswordError("")
                }
            }
        }

    return(
        <form onSubmit={createUser}>
            <h3>{formMessage()}</h3>
            <div className="formGroup">
            <label htmlFor="firstName">First Name</label>
            <input onChange={handleFirstName} type="text" name="firstName" />
            <p>{firstNameError}</p>
            </div>
            <div className="formGroup">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={handleLastName} type="text" name="lastName" />
            <p>{lastNameError}</p>
            </div>
            <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input onChange={handleEmail} type="text" name="email" />
            <p>{emailError}</p>
            </div>
            <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input onChange={handlePassword} type="password" name="password" />
            <p>{passwordError}</p>
            </div>
            <div className="formGroup">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={handleConfirmPassword} type="password" name="confirmPassword" />
            <p>{confirmPasswordError}</p>
            </div>
            <input type="submit" value="Create User" />
        </form>
        
    );
};
    
export default UserForm;