import { createContext } from 'react';
import React, { useState } from  'react';

const FormWrapper = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName};
        console.log("Welcome", newUser);
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

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };


    return(
        <form onSubmit={createUser}>
        <h3>{formMessage()}</h3>
        <div className="formGroup">
        <label htmlFor="firstName">First Name</label>
        <input onChange={handleFirstName} type="text" name="firstName" />
        </div>
        <p>{firstNameError}</p>
        <input type="submit" value="Create User" />
        </form>
    );
}

export default FormWrapper;