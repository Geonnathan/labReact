import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import NavBar from "../assets/components/navbar/NavBar";
import Footer from "../assets/components/footer/Footer";
import "./style.css";

function HomeView() {
        const [title, setTitle] = useState("");
        const [loggedIn, setLoggedIn] = useState(true);

        useEffect(() => {
                setTitle("User Login");
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
                                                        <h2>Popular Products</h2>
                                                </div>
                                        </div>
                                </div>
                                <div className="row">
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div id="product-1" className="single-product">
                                                        <div className="part-1">
                                                                <ul>
                                                                        <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                                                                        <li><a href="#"><i className="fas fa-heart"></i></a></li>
                                                                        <li><a href="#"><i className="fas fa-plus"></i></a></li>
                                                                        <li><a href="#"><i className="fas fa-expand"></i></a></li>
                                                                </ul>
                                                        </div>
                                                        <div className="part-2">
                                                                <h3 className="product-title">Here Product Title</h3>
                                                                <h4 className="product-old-price">$79.99</h4>
                                                                <h4 className="product-price">$49.99</h4>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div id="product-2" className="single-product">
                                                        <div className="part-1">
                                                                <span className="discount">15% off</span>
                                                                <ul>
                                                                        <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                                                                        <li><a href="#"><i className="fas fa-heart"></i></a></li>
                                                                        <li><a href="#"><i className="fas fa-plus"></i></a></li>
                                                                        <li><a href="#"><i className="fas fa-expand"></i></a></li>
                                                                </ul>
                                                        </div>
                                                        <div className="part-2">
                                                                <h3 className="product-title">Here Product Title</h3>
                                                                <h4 className="product-price">$49.99</h4>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div id="product-3" className="single-product">
                                                        <div className="part-1">
                                                                <ul>
                                                                        <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                                                                        <li><a href="#"><i className="fas fa-heart"></i></a></li>
                                                                        <li><a href="#"><i className="fas fa-plus"></i></a></li>
                                                                        <li><a href="#"><i className="fas fa-expand"></i></a></li>
                                                                </ul>
                                                        </div>
                                                        <div className="part-2">
                                                                <h3 className="product-title">Here Product Title</h3>
                                                                <h4 className="product-old-price">$79.99</h4>
                                                                <h4 className="product-price">$49.99</h4>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div id="product-4" className="single-product">
                                                        <div className="part-1">
                                                                <span className="new">new</span>
                                                                <ul>
                                                                        <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                                                                        <li><a href="#"><i className="fas fa-heart"></i></a></li>
                                                                        <li><a href="#"><i className="fas fa-plus"></i></a></li>
                                                                        <li><a href="#"><i className="fas fa-expand"></i></a></li>
                                                                </ul>
                                                        </div>
                                                        <div className="part-2">
                                                                <h3 className="product-title">Here Product Title</h3>
                                                                <h4 className="product-price">$49.99</h4>
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