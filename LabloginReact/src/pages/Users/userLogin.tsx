import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {getLogin} from "../../services/UserServices";
import {UserLoginModel} from "../../models/UserLogin";
import NavBar from "../../assets/components/navbar/NavBar";
import Footer from "../../assets/components/footer/Footer";

function UserLogin(){
    const [title, setTitle] = useState("");
    const [userLogin, setUser] = useState(UserLoginModel());

    useEffect(() =>{
        setTitle("User Login");
    }, []);

    const handleChangeEmail = (event : any) => {
        const name = event.target.name;
        let value = event.target.value;
        setUser({ ...userLogin, [name]: value });
    };

    const onsubmit = () => {
        getLogin(userLogin).then((result) => {
            console.log(result);
        });
    }

    return(
        <React.Fragment>
            <div className="login-box">
                <section className="background-radial-gradient overflow-hidden">
                <NavBar/>
                    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                        <div className="row gx-lg-5 align-items-center mb-5">
                            <div className="col-lg-6 mb-5 mb-lg-0" >
                                <div className="text-center">
                                    <h2 className="my-5 display-5 fw-bold ls-tight" >
                                        {title}
                                    </h2>
                                </div>
                                <p className="mb-5 opacity-70" >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                                ab ipsum nisi dolorem modi. Quos?
                                </p>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                                <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                                <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
                                <div className="card bg-glass">
                                    <div className="card-body px-4 py-5 px-md-5">
                                        <form >
                                            <div className="text-center">
                                            <div className="imageLogoText"/>
                                            </div>
                                            <div className="text-center">
                                                <h4 className="my-3 display-7 fw-bold ls-tight" >
                                                    Please enter your email and password! 
                                                </h4>
                                                <br/>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="email" id="email" className="form-control" name="email"  defaultValue={userLogin.email}
                                                onChange={handleChangeEmail}/>
                                                <label className="form-label">Email address</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="password" id="password" className="form-control" name="password" defaultValue={userLogin.password} 
                                                onChange={handleChangeEmail}/>
                                                <label className="form-label" >Password</label>
                                            </div>
                                            <div className="text-center">
                                                <button type="button" className="btn btn-primary btn-block mb-4" onClick={onsubmit}>
                                                    Sign in
                                                </button>
                                            </div>
                                            <div className="text-center">
                                                <button type="button" className="btn btn-link btn-floating mb-1">
                                                    <a href="/register" >sign up</a>
                                                    <br/>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default UserLogin;