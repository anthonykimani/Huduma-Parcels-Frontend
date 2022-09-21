import signup from "../components/css/signup.css";
import plant from "../assets/plant.svg";
import person from "../assets/person.svg";

const SignUp = () => {
  return (
    <div>
      <button className="back-button"><i class='bx bx-left-arrow-alt bx-md'></i>Go Back</button>
      <div className="signup-title">
        <h2>Sign Up</h2>
        <div className="form-container">
          <div className="image-art">
          <img src={plant} alt="" className="plant" />
          </div>
          <form>
            <input
              type="text"
              name="firstname"
              placeholder="firstname"
              className="input-field"
            />
            <input
              type="text"
              name="lastname"
              placeholder="lastname"
              className="input-field"
            />
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input-field"
            />
            <input
              type="text"
              name="password"
              placeholder="password"
              className="input-field"
            />
            <input type="submit" value="Submit" className="submit-button" />
          </form>
          <img src={person} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
