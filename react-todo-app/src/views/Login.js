import { useState } from 'react';
import MainLayout from './MainLayout';
import { logIn } from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function Login() {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.auth.loggedIn);
    const loginError = useSelector(state => state.auth.error);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        dispatch(logIn({email, password}));
    };

    if (loggedIn) {
        return <Redirect to="/todos"/>
    }

    return (
        <MainLayout title={'Login'}>
            <label>
                <span>Email</span>
                <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} />
            </label>
            <label>
                <span>Password</span>
                <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            </label>

            <button onClick={loginHandler}>Login</button>

            <div>
                { loginError }
            </div>
        </MainLayout>
    );
}