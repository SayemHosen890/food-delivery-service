
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    // console.log('came', location.state?.from);
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                const user = result.user;
                console.log(user);
            })
    }

    return (
        <div className="login-form mb-5">
            <div>
                <h2 className='pb-2'>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to albino restaurant? <Link to="/register"><span className='text-white'>Create Account</span></Link></p>
                <div><hr /></div>
                <button
                    className="btn button"
                    onClick={handleGoogleLogin}
                >Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;