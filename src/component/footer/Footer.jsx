import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaGoogle, FaLinkedinIn} from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/www.monnom.mn'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/monnom.mn'},
    {Social: <FaGoogle /> , link: 'mailto:www.monnom.mn@gmail.com'},
]
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span></span>
                                        <div style={{display: 'flex', flexWrap: 'wrap', gap: 3}}>
                                            <h2>PodCasts, Radio <br />eBooks</h2>
                                            <img src="/assets/images/monnom-logo-512.png" style={{height: '10rem', width: '10rem'}} />
                                        </div>
                                        <a className="rn-button-style--2" href="https://www.facebook.com/www.monnom.mn">
                                            <span>Холбоо барих</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>Товч линк</h4>
                                                <ul className="ft-link">
                                                    <li><a href="https://monnom.mn">Нүүр</a></li>
                                                    <li><a href="#">Мэдээлэл</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Сайн байна уу?</h4>
                                                <ul className="ft-link">
                                                    <li><a onClick={(e) => e.preventDefault()} href="#">www.monnom.mn@gmail.com</a></li>
                                                    <li><a onClick={(e) => e.preventDefault()} href="#">+976 99788122</a></li>
                                                </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div> 
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;