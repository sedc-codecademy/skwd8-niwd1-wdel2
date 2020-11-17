import { useState } from 'react';
import MainLayout from './MainLayout';

export default function Login() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const setEmail = (value) => {
        setCredentials({
            ...credentials,
            email: value,
        })
    };

    const setPassword = (value) => {
        setCredentials({
            ...credentials,
            password: value
        });
    };

    const loginHandler = () => {
        console.log('Current credentials', credentials);
    };

    return (
        <MainLayout title={'Login'}>
            <label>
                <span>Email</span>
                <input type="text" value={credentials.email} onChange={(e) => {setEmail(e.target.value)}} />
            </label>
            <label>
                <span>Password</span>
                <input type="password" value={credentials.password} onChange={(e) => {setPassword(e.target.value)}} />
            </label>

            <button onClick={loginHandler}>Login</button>
        </MainLayout>
    );
}