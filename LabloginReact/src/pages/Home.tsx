import React, { useState, useEffect } from "react";
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
                if(idUser === '' || idUser === null ){
                        setLoggedIn(false);
                }
                else{
                        setLoggedIn(true);
                        getUsersWebs(idUser).then((result) =>{
                                if(result.code > 0){
                                        setUserWeb(result.value);
                                }
                        })
                }
                setTitle("Popular Webs");
        }, []);

return (
    <React.Fragment>
        <NavBar/>
        <br />
        {loggedIn ? (
            <section className="section-products">
                <div className="container">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-7 mx-auto">
                                <div className="card rounded-0 border-0 shadow">
                                    <div className="card-body p-5">
                                        <div className="table-responsive">
                                            <div className='d-flex justify-content-between'>
                                                <div className=" text-center">
                                                    <div className="header">
                                                        <h2>{title}</h2>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                        <a href="/newProduct"><button type="button" className="btn btn-success mx-5">Add Web</button></a> 
                                                </div>
                                            </div>
                                            <br />
                                            <br />
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
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </section>
        ) : (
            <div>
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

export default HomeView;