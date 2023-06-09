import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {UserModel} from "../../models/User";
import {postRegister} from "../../services/UserServices";
import NavBar from "../../assets/components/navbar/NavBar";
import Footer from "../../assets/components/footer/Footer";

function UserRegister(){
    const [title, setTitle] = useState("");
    const [user, setUser] = useState(UserModel());

    useEffect(() =>{
        setTitle("User Register");
    }, []);

    const handleChange = (event : any) => {
        const name = event.target.name;
        let value = event.target.value;
        setUser({ ...user, [name]: value });
    };

    const onsubmit = () => {
        postRegister(user).then((result) => {

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
                                        <form>
                                            <div className="text-center">
                                                <div className="imageLogoText"/>
                                            </div>
                                            <div className="text-center">
                                                <h4 className="my-3 display-7 fw-bold ls-tight" >
                                                    Please enter your data! 
                                                </h4>
                                                <br/>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="text" id="name" name="name" className="form-control" defaultValue={user.name}
                                                onChange={handleChange} required/>
                                                <label className="form-label" >First name</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="email" id="email" name="email" className="form-control" defaultValue={user.email}
                                                onChange={handleChange} required/>
                                                <label className="form-label">Email address</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="password" id="password" name="password" className="form-control" defaultValue={user.password} 
                                                onChange={handleChange} required/>
                                                <label className="form-label" >Password</label>
                                            </div>
                                            <div className="text-center">
                                                <button type="button" className="btn btn-primary btn-block mb-3" onClick={onsubmit}>
                                                    sign up
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
            </div>
        </React.Fragment>
    );
}

export default UserRegister;