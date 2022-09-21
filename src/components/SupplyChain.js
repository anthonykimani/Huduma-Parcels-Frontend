import world from "../assets/world.svg";
import herosection from "./css/hero-section.css";

const SupplyChain = () => {
    return ( 
        <div className="hero-section">
            <div>
                <img src={world} alt="" />
            </div>
            <div className="hero-section-text">
                <h1>New Supply Chains</h1>
                <h3>We’ve partnered with some of the best in transportation services in Kenya to create a robust business model </h3>
            </div>
        </div>
     );
}
 
export default SupplyChain;