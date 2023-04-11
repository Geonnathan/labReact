import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../assets/components/navbar/NavBar";
import Footer from "../assets/components/footer/Footer";
import {getUsersWebs} from "../services/WebServices";
import {WebModel} from "../models/Webs";
import "./style.css";

function HomeView() {
        const [title, setTitle] = useState("");
        const [userWebs, setUserWeb] = useState<typeof WebModel[]>([]);
        const [loggedIn, setLoggedIn] = useState(true);

        useEffect(() => {
                let idUser = sessionStorage.getItem('idUser');
                let userName = sessionStorage.getItem('userName');
                if(idUser === '' || idUser === null ){
                        setLoggedIn(false);
                }
                else{
                        setLoggedIn(true);
                        getUsersWebs(idUser).then((result) =>{
                                if(result.code < 1){
                                        setUserWeb(result.value);
                                }
                        })
                }
                setTitle("Popular Webs");
        }, []);

return (
        <React.Fragment>
                <NavBar/>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
                {loggedIn ? (
                        <section className="section-products">
                        <div className="container">
                                <div className="row justify-content-center text-center">
                                        <div className="col-md-8 col-lg-6">
                                                <div className="header">
                                                        <h3>Featured Product</h3>
                                                        <h2>{title}</h2>
                                                </div>
                                        </div>
                                </div>
                                <div className="container py-5">
                                        <div className="row">
                                                <div className="col-lg-7 mx-auto">
                                                <div className="card rounded-0 border-0 shadow">
                                                        <div className="card-body p-5">
                                                                <div className="table-responsive">
                                                                        <table className="table">
                                                                        <thead>
                                                                                <tr>
                                                                                <th scope="col">id</th>
                                                                                <th scope="col"></th>
                                                                                <th scope="col">Web Name</th>
                                                                                <th scope="col">Url</th>
                                                                                <th scope="col"></th>
                                                                                </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                                {userWebs.map((item : any) => (
                                                                                        <tr key={item.idWeb}>
                                                                                                <th scope="row">{item.idWeb}</th>
                                                                                                <td></td>
                                                                                                <td>{item.webName}</td>
                                                                                                <td>{item.url}</td>
                                                                                                <td></td>
                                                                                        </tr>
                                                                                ))}
                                                                        </tbody>
                                                                        </table>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                </div>
                        </div>
                </section>
                ) : (
                <div>
                        <p>El usuario no está logeado</p> 
                </div>
                )}
                <Footer/>
        </React.Fragment>
);
}

export default HomeView;