import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark footer">
            <div className="row">
                <div className="col-6">
                    <img className="footer-icon" src="" alt="" />
                </div>
                <div className="col-3">
                    <p>About Health care</p>
                    <p>Read our blogs</p>
                </div>
                <div className="col-3">
                    <p>About Departments</p>
                    <p>Read our articles</p>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <h3 className="text-start"><u>© All Rights Reserved To Ataur 2021</u></h3>
                </div>
                <div className="col-2">
                    <p> Privacy Policy</p>
                </div>
                <div className="col-2">
                    <p>Terms and condition</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;