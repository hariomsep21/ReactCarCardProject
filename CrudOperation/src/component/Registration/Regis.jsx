import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Regis.module.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import CreatRegis from "./CreatRegis";
import ViewRegis from "./ViewRegis";

const Regis = () => {
  return (
    <>
      <CreatRegis />
      {/* <ViewRegis /> */}
    </>
  );
};

export default Regis;
