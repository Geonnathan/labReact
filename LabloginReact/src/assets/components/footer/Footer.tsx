import logoOle from "../images/LogoOle.jpg";

function Footer() {

    return (
        <footer className="navbar-fixed-bottom">
            <div >
                <br />
                <div className="mx-5">
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-xs-4">
                            <div className="footer-text pull-left">
                                <div className="row"></div>
                                <div className="d-flex">
                                    <div className="imageLogo"/>
                                </div>
                                <div className="divider mb-3"> </div>
                                <div className="row" >
                                    <div className="col-md-8 col-sm-6 col-xs-6">
                                            <p><i className="fa fa-copyright"></i> © 2023 Todos los derechos reservados</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2"></div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <br />
                            <h5 className="heading">Technology Services</h5>
                            <br />
                            <ul>
                                <li>Software development</li>
                                <br />
                                <li>Web development</li>
                                <br />
                                <li>Monitoring and analysis</li>
                                <br />
                                <li>Cloud and DevOps</li>
                                <br />
                                <li>Product and design</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                        <br />
                            <h5 className="heading">Industries</h5>
                            <br />
                            <ul className="card-text">
                                <li>Finance</li>
                                <br />
                                <li>Public Sector</li>
                                <br />
                                <li>Smart Office</li>
                                <br />
                                <li>Retail</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                        <br />
                            <h5 className="heading">Company</h5>
                            <br />
                            <ul className="card-text">
                                <li>About Us</li>
                                <br />
                                <li>Blog</li>
                                <br />
                                <li>Contact</li>
                                <br />
                                <li>Join Us</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <br />
        </footer>
    );

}
export default Footer;


