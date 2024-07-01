import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./CreatRegis.module.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const CreatRegis = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const validate = () => {
    let isProcess = true;
    if (!usernameRef.current.value) {
      toast.warning("Please enter the userName");
      isProcess = false;
    }
    if (!emailRef.current.value) {
      toast.warning("Please enter the valid email");
      isProcess = false;
    }
    if (!passwordRef.current.value) {
      toast.warning("Please enter the password");
      isProcess = false;
    }
    return isProcess;
  };

  const handleForm = (e) => {
    e.preventDefault();
    let dataObj = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    if (validate()) {
      fetch("http://localhost:5000/userReg", {
        method: "Post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(dataObj),
      })
        .then((res) => {
          toast.success("Done");
          navigate("/viewreg");
        })
        .catch((err) => {
          toast.error(err.message);
        });

      console.log("Done");
    }
  };

  return (
    <div className={`container ${style.container}`}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title text-center">User Registration</h2>
              <form className={style.mainform} onSubmit={handleForm}>
                <div className="form-group mb-3">
                  <label>UserName</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="UserName"
                    ref={usernameRef}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    ref={emailRef}
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    ref={passwordRef}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatRegis;
