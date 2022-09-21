import hero from "../assets/hero.svg";

const HeroSection = () => {
    return ( 
        <div>
            <div>
                <h1>Send Deliveries Anywhere</h1>
                <h3>We'll help you transport to any place in the country</h3>
                <div>
                    <button className="send-delivery-button">Send Delivery<i class='bx bx-right-arrow-alt'></i></button>
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