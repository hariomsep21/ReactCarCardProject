import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./EditRegis.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditRegis = () => {
  const { id } = useParams();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/userReg/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (user) {
      usernameRef.current.value = user.username;
      emailRef.current.value = user.email;
      passwordRef.current.value = user.password;
    }
  }, [user]);

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
      fetch(`http://localhost:5000/userReg/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(dataObj),
      })
        .then((res) => {
          if (res.ok) {
            toast.success("Update successful");
            navigate("/viewreg");
          } else {
            toast.error("Failed to update user");
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`container ${style.container}`}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title text-center">Edit User</h2>
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
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate("/viewreg")}
                  >
                    Cancel
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

export default EditRegis;
