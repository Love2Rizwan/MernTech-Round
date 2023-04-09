import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="form card">
      <form>
        <p>ALREADY MEMBERS  <span style={{color:"gray",marginLeft:"4rem"}}>Need Help?</span> </p>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-5 ">
          SIGN IN
        </button>
      </form>
      <div style={{ color: "white" }}>Don't have an account yet ?</div>
      <div style={{ color: "#1b545d" }}>Create an account</div>
    </div>
  );
};

export default Form;
