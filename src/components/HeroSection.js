import hero from "../assets/hero.svg";
import paperplane from "../assets/paper-plane.svg";
import herosection from "./css/hero-section.css";

const HeroSection = () => {
    return ( 
        <div className="hero-section">
            <div className="hero-section-text">
                <img src={paperplane} alt="" className="paperplane" />
                <h1>Send Deliveries Anywhere</h1>
                <h3>We'll help you transport to any place in the country</h3>
                <div>
                    <button className="send-delivery-button">Send Delivery<i class='bx bx-right-arrow-alt bx-md'></i></button>
                    <button className="check-delivery-button">Check Deliveries</button>
                </div>
            </div>
            <div>
                <img src={hero} alt="hero-section" />
            </div>
        </div>
     );
}
 
export default HeroSection;