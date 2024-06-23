import { useState } from "react";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss'

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            setFormFields(defaultFormFields);
            alert('sign in sucessfull')
        } catch (error) {
            if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
                alert("Incorrect email or password. Please try again.");
            } else {
                console.error('Sign-in error:', error);
            }
        }

    };

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>SIGN IN with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email} />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password} />
                <div className="buttons-container">
                    <Button children="Sign IN" type="submit" />
                    <Button children="Google Signin" type="button" button_type={`google`} onClick={logGoogleUser} />
                </div>
            </form>
        </div>
    )
};

export default SignInForm;