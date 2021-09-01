import React, { useState } from  'react';
    
    
const UserForm = (props) => {
        const{inputs, setInputs} = props;


        const onChange = (e) => {
            setInputs({
                inputs,
                [e.target.name]: e.target.value
            });
        };

    return(
        <form>
            <div className="formGroup">
            <label htmlFor="firstName">First Name</label>
            <input onChange={onChange} type="text" name="firstName" />
            </div>
            <div className="formGroup">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={onChange} type="text" name="lastName" />
            </div>
            <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input onChange={onChange} type="text" name="email" />
            </div>
            <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input onChange={onChange} type="password" name="password" />
            </div>
            <div className="formGroup">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={onChange} type="password" name="confirmPassword" />
            </div>
        </form>
        
    );
};
    
export default UserForm;