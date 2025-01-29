import React from 'react';
import signInCardImg from "@/assets/img/sign-in-card-img.png"
import passwordEye from "@/assets/icons/password-eye-icon.svg"
import signInBg from "@/assets/img/Sign-In-bg.png"

const Login = () => {
    return (
        <div className="sign-in-signup">
            <div className="container" style={{ background: `url(${signInBg?.src})` }}>
                {/* <!-- Sign in Form Start --> */}
                <div className="card">
                    <div className="card-wrapper">
                        <div className="card-image">
                            <img src={signInCardImg?.src} alt="" />
                        </div>

                        <div className="card-item">
                            <div className="brand-logo">
                                {/* <!-- <img src="./assets/icons/login-page-logo.svg" alt="" /> --> */}
                            </div>
                            <h2>Welcome to<br /> ABC Computers</h2>

                            <form>
                                <input type="text" id="username" placeholder="Enter a mail" />

                                <label htmlFor="password">
                                    <input type="password" id="password" placeholder="Enter password" />
                                    <a href="#"><img className="hide-icon" src={passwordEye.src} alt="" /></a>
                                </label>
                                <a href="#" className="forgot-password">Forgot Password?</a>

                                <button className="sign-in-btn" type="submit">SIGN IN</button>
                            </form>

                            <div className="switch">
                                Dont have an account?
                                <a href="#">SIGN UP</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Sign in Form End --> */}

                {/* <!-- Registration Form Start --> */}
                <div className="card" style={{ display: "none" }}>
                    <div className="card-wrapper">
                        <div className="card-image">
                            <img src={signInCardImg?.src} alt="" />
                        </div>

                        <div className="card-item">
                            <h2>Create an account</h2>
                            <form>
                                <input type="text" id="fullname" placeholder="Name" />

                                <input type="email" id="email" placeholder="Enter a email" />

                                <input type="number" id="number" placeholder="Phone number" />

                                <label htmlFor="password">
                                    <input type="password" id="password" placeholder="Enter password" />
                                    <a href="#"><img className="hide-icon" src={passwordEye?.src} alt="" /></a>
                                </label>

                                <label htmlFor="cheakbox" className="cheakbox">
                                    <input type="checkbox" />
                                    <h1>I accept the <a href="#">Privacy Policy.</a></h1>
                                </label>

                                <button className="sign-up-btn" type="submit">SIGN UP</button>
                            </form>
                            <div className="switch">
                                Already have an account?
                                <a href="#">SIGN IN</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Registration Form End --> */}
            </div>
        </div>
    );
};

export default Login;