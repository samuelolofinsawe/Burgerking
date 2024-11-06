import Facbook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import Twitter from "../assets/Twitter.svg";
import Youtube from "../assets/Youtube.svg";

export const Footer = () => {
    return (
        <>
        <div className="footer-parent">
            <div className="footer-child">
            <div className="main-texts">
                <a href="#"><h2>Burger King.</h2></a>
            </div>
            
            <div className="main-texts">
                <a href="#">BK INFO</a>
                <div className="sub-texts">
                <p>About BK</p>
                <p>Privacy Policy</p>
                <p>Reach out to US</p>
                <p>Terms and Conditions</p>
                </div>
            </div>

            <div className="main-texts">
                <a href="#">BK CARES</a>
                <div className="sub-texts">
                <p>Allergens info</p>
                <p>Food Quality</p>
                <p>Responsibility</p>
                </div>
            </div>

            <div className="main-texts ">
                <a href="#">BK AND YOU</a>
                <div className="sub-texts">
                    <p>Careers</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
         </div>       

         <div className="copyright-parent">
                <div className="copyright">
                    <p>TM & Copyright 2021 Burger King Corporation. All Rights Reserved.</p>
                </div>
                <div className="copyright-img">
                    <img src={Facbook} alt="facebook" />
                    <img src={Instagram} alt="instagram" />
                    <img src={Twitter} alt="twitter" />
                    <img src={Youtube} alt="youtube" />
                </div>
            </div>                 
        </div>
        
        </>
    )

}