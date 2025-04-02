import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { logIn } = useContext(AuthContext); 
    const location = useLocation();
    const navigate = useNavigate();
    console.log('this is the location in login page: ', location)
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userEmail = form.get('email');
        const userPassword = form.get('password');
        console.log(userEmail, userPassword);
        // login with email and password
        logIn(userEmail, userPassword)
        .then(result => {
            console.log(result.user);

            // navigate to state or homepage
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen ">
                <div className="hero-content flex-col w-[600px]">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin}>
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" 
                                    name="email"
                                    className="input" placeholder="Email" required/>
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" className="input" 
                                    name="password"
                                    placeholder="Password" required/>
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </div>
                        </form>
                        <p className="text-center">Don't have an account? Please <Link to='/register' className="text-blue-600 font-bold">Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;