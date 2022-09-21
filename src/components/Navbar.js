import navbar from "./css/navbar.css";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h2>Hudumu Parcel Services</h2>
            <div className="navbar-list-item">
                <li>Deliveries</li>
                <li>About</li>
            </div>
            <div className="nav-button">
                <button className="login-button">Login</button>
                <button className="sign-up-button">Get Started</button>
            </div>
        </div>
     );
}
 
export default Navbar;