import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userName = form.get('name');
        const userPhotoURL = form.get('photoURL');
        const userEmail = form.get('email');
        const userPassword = form.get('password');
        console.log(userName, userPhotoURL, userEmail, userPassword);
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
                        <form onSubmit={handleRegister}>
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Name</label>
                                    <input type="text" 
                                    name="name"
                                    className="input" placeholder="Name" required/>
                                    <label className="fieldset-label">Photo URL</label>
                                    <input type="text" 
                                    name="photoURL"
                                    className="input" placeholder="Photo URL" required/>
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" 
                                    name="email"
                                    className="input" placeholder="Email" required/>
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" className="input" 
                                    name="password"
                                    placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </div>
                        </form>
                        <p className="text-center">Already have an account? Please <Link to='/login' className="text-blue-600 font-bold">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;