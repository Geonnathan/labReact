import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import NavBar from "../../assets/components/navbar/NavBar";
import Footer from "../../assets/components/footer/Footer";
import {WebModel} from "../../models/Webs";
import {postUsersWebs} from "../../services/WebServices";
import userWebSChema from './validations/userWebValidations';
import { Link, useParams, useNavigate } from "react-router-dom";
import {AlertError, ConfirmAlert, AlertSuccessGeneric} from "../../sweetalert2/sweetalert2.js";

function UserWebs() {

    const navigate = useNavigate();
    let idUser = sessionStorage.getItem('idUser');
    const [userWebs, setUserWeb] = useState (WebModel());
    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        let idUser = sessionStorage.getItem('idUser');
        
    },[]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userWebSChema)
    });

    const handleChange = (event : any) => {
        const name = event.target.name;
        let value = event.target.value;
        setUserWeb({ ...userWebs, [name]: value });
    };

    function onSubmit (data : any){ 
        postUsersWebs(data).then((result) => {
            if (result.code >= 0) {
                navigate("/home");
            }else{
                AlertError("Datos no registrados, verifique los datos");
            }
        });
    }

    async function Cancel() {
        const confirmed = await ConfirmAlert(
        "¿Estás seguro?"
        ).handleConfirm();
        if (confirmed){
        navigate("/");
        }
    }
  
  return (
    <React.Fragment>
        <NavBar/>
        {idUser ? (
            <div className="row-fluid">
                <br />
                <br />
                <div className="d-flex justify-content-center border p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='d-flex justify-content-between'>
                            <div className=" text-center">
                                        <div className="header">
                                        <h2 className="card-title"><i className="fas fa-box-open"></i> New Web!</h2>  
                                        </div>
                                </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-success mx-2"> Save</button>
                                <button type="button" className="btn btn-danger mx-2" onClick={() => Cancel()}> Cancel</button>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <br />
                            <label className="control-label">Web Name</label>
                            <input type="text" className="form-control" 
                                defaultValue={userWebs ? userWebs.webName : ""}
                                {...register("webName", { required: true })}
                                style={{
                                    border: errors.webName
                                    ? "3px solid rgb(216, 52, 79)"
                                    : "",
                                }}
                                onChange={handleChange}
                                placeholder={
                                    errors.webName
                                    ? "This field is required*"
                                    : "Enter the web name"
                                }/>
                            <label className="control-label">Url</label>
                            <input type="url" className="form-control" 
                                defaultValue={userWebs ? userWebs.url : ""}
                                {...register("url", { required: true })}
                                style={{
                                    border: errors.url
                                    ? "3px solid rgb(216, 52, 79)"
                                    : "",
                                }}
                                onChange={handleChange}
                                placeholder={
                                    errors.url
                                    ? "This field is required*"
                                    : "Enter the url"
                                }/>
                        </div>
                        <br />
                    </form>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        ): (
            <div className='d-flex justify-content-center border p-5'>
                <p>El usuario no está logeado</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> 
            </div>
        )}
        
        <Footer/>
      </React.Fragment>
    );
}

export default UserWebs;
