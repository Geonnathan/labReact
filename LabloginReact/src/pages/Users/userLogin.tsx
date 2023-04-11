import React, { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {getLogin} from "../../services/UserServices";
import {UserLoginModel} from "../../models/UserLogin";
import NavBar from "../../assets/components/navbar/NavBar";
import Footer from "../../assets/components/footer/Footer";
import userSChema from "./validations/userLoginValidations";
import {
    AlertError
} from "../../sweetalert2/sweetalert2.js";

function UserLogin(){
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const [userLogin, setUser] = useState(UserLoginModel());

    useEffect(() =>{
        setTitle("User Login Olé");
    }, []);

    //Para validar los datos del formulario
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSChema)
    });

    const handleChange = (event : any) => {
        const name = event.target.name;
        let value = event.target.value;
        setUser({ ...userLogin, [name]: value });
    };

    function onSubmit (data : any){ 
        getLogin(data).then((result) => {
            if (result.code > 0) {
                sessionStorage.setItem('idUser',result.value[0].idUser);
                sessionStorage.setItem('userName',result.value[0].name);
                navigate("/home");
            }else{
                sessionStorage.clear();
                AlertError("Datos no registrados, verifique los datos");
            }
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
                                <h5><p className="mb-3 opacity-100" >
                                Más de 15 años desarrollando aplicaciones de software 
                                asi como para móviles para clientes alrededor del 
                                mundo. Utilizamos estándares, metodologís y herramientas 
                                de desarrollo que garantizan el mejor resultado.
                                </p></h5>
                                
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                                <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                                <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
                                <div className="card bg-glass">
                                    <div className="card-body px-4 py-5 px-md-5">
                                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                                <label htmlFor="email" className="form-label">Email address</label>
                                                <input type="email" className="form-control" 
                                                defaultValue={userLogin ? userLogin.email : ""}
                                                {...register("email", { required: true })}
                                                style={{
                                                    border: errors.email
                                                    ? "3px solid rgb(216, 52, 79)"
                                                    : "",
                                                }}
                                                onChange={handleChange}
                                                placeholder={
                                                    errors.email
                                                    ? "This field is required*"
                                                    : "Enter the email"
                                                }/>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label htmlFor="password" className="form-label" >Password</label>
                                                <input type="password" className="form-control" 
                                                defaultValue={userLogin ? userLogin.password : ""}
                                                {...register("password", { required: true })}
                                                style={{
                                                    border: errors.password
                                                    ? "3px solid rgb(216, 52, 79)"
                                                    : "",
                                                }} 
                                                onChange={handleChange}
                                                placeholder={
                                                    errors.password
                                                    ? "This field is required*"
                                                    : "Enter password"
                                                }/>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                                    Sign in
                                                </button>
                                            </div>
                                        </form>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-link btn-floating mb-1">
                                                <a href="/register" >sign up</a>
                                                <br/>
                                            </button>
                                        </div>
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