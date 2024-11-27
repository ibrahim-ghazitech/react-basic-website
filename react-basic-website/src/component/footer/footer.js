import './footer.css';
import footerLogo from './footer-logo.png';


function Footer (){
    return (
        <>
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-connect">
                        <div className="footer-connect-heading">
                            <h5 className="primary-heading">
                                Let's connect just subscribe to
                                <br/>
                                our newsletter today!
                            </h5>
                        </div>
                        <div className="footer-email">
                            <input type="email" placeholder="Enter email address" className="email"/>
                            {/* <Button>Submit now</Button> */}
                        </div>
                    </div>
                    <div className="footer-inquiry">
                        <div className="footer-logo">
                            <img src={footerLogo}/>
                            <p className="inquiry-para">
                                Get your business to the new heights.
                            </p>
                        </div>
                        <div className="email-inquiry">
                            <a href="mailto:iibrahimshaikh111@gmail.com" className="inquiry-anchor">iibrahimshaikh111@gmail.com</a>
                            <p className="inquiry-para">
                                Mail us now
                            </p>
                        </div>
                        <div className="call-inquiry">
                            <a href="tel:+923241246765" className="inquiry-anchor">+92 324 1246765</a>
                            <p className="inquiry-para">
                                WhatsApp or Call
                            </p>
                        </div>
                    </div>
                    <div className="footer-nav">
                        <p className="copyright">
                            Copyright © 2024 Shaikh Muhammad Ibrahim. All rights reserved.
                        </p>
                        <ul className="footer-list">
                            <li><a href="javascript:void(0)">Home</a></li>
                            <li><a href="javascript:void(0)">About</a></li>
                            <li><a href="javascript:void(0)">Contact</a></li>
                            <li><a href="javascript:void(0)">Blog</a></li>
                            <li><a href="javascript:void(0)">Privacy Policy</a></li>
                            <li><a href="javascript:void(0)">Terms & Condition</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
        </>
    );
}

export default Footer