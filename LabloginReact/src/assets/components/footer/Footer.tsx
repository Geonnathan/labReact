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
                                <div className="d-flex">
                                    <div className="imageLogo"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2"></div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <br />
                            <h5 className="heading">Services</h5>
                            <ul>
                                <li>IT Consulting</li>
                                <li>Development</li>
                                <li>Cloud</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                        <br />
                            <h5 className="heading">Industries</h5>
                            <ul className="card-text">
                                <li>Finance</li>
                                <li>Public Sector</li>
                                <li>Smart Office</li>
                                <li>Retail</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                        <br />
                            <h5 className="heading">Company</h5>
                            <ul className="card-text">
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>Contact</li>
                                <li>Join Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider mb-3"> </div>
                    <div className="row" >
                        <div className="col-md-7 col-sm-6 col-xs-6">
                            <div className="pull-left">
                                <p><i className="fa fa-copyright"></i> 2023 @aaa</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-3">
                            <div className="pull-right mr-4 d-flex policy">
                                <div>Terms of Use</div>
                                <div>Privacy Policy</div>
                                <div>Cookie Policy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </footer>
    );

}
export default Footer;


