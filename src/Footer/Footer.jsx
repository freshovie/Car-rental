import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <section className="footer">
            <footer className="text-center text-md-start">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h3 className="text-uppercase">MORENT</h3>
                            <p>
                                Our vision is to provide convenience <br />and help increase your sales business.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">About</h5>
                            <ul className="list-unstyled mb-0 footer-behave">
                                <li>
                                    <a href="#!" className="text-edit">How it works</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-edit">Featured</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-edit">Partnership</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-edit">Business Relation</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Community</h5>
                            <ul className="list-unstyled footer-behave">
                                <li>
                                    <a href="#!" className="text-edit">Events</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-edit">Blog</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-edit">Podcast</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-edit">Invite a friend</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Socials</h5>
                            <ul className="list-unstyled footer-behave">
                                <li>
                                    <a href="#!" className="text-edit">Discord</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-edit">Instagram</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-edit">Twitter</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-edit">Facebook</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                <div className="last">
                            <p>&copy; 2022 MORENT. All rights reserved.</p>
                    <div className="footer-bask">
                        <a href='#!'>Privacy & Policy </a>
                        <a href='#!'>Terms & Condition</a>
                    </div>
                </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
