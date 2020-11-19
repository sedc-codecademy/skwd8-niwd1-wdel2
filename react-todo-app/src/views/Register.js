import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/authActions";
import MainLayout from "./MainLayout";

export default function Register() {

    const dispatch = useDispatch();
    const registrationError = useSelector(state => state.auth.error);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerHandler = () => {
        const payload = {
            firstName,
            lastName,
            email,
            password,
        };
        dispatch(register(payload));
    };

    return (
        <MainLayout title={'Register'}>
            <label>
                First name
                <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }}/>
            </label>
            <label>
                Last name
                <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }}/>
            </label>
            <label>
                Email
                <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
            </label>
            <label>
                Password
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}/>
            </label>

            <button onClick={registerHandler}>Register</button>

            <div>
                { registrationError }
            </div>
        </MainLayout>
    );
}