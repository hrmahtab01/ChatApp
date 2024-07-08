import React, { useState } from "react";
import Signinimage from "../assets/Signin.png";
import { Link } from "react-router-dom";

const Signin = () => {
let [email,Setemail]=useState("")

let handleEmailChange =(e) =>{
Setemail(e.target.value);
}

  return (
    <div className="flex ">
      <div className="w-2/4 flex flex-col justify-center items-center">
        <h1 className="font-Nunito text-[34.4px] font-bold text-[#11175D]">
          Get started with easily register
        </h1>
        <p className="text-xl font-normal text-[#000000] opacity-50 mt-[13px]">
          Free register and you can enjoy it
        </p>
        <div className="mt-[61px] relative">
            <label className="absolute -mt-3 ml-14 bg-white px-2" >Email Address</label>
          <input
            onChange={handleEmailChange}
            type="email"
            placeholder="Enter your email"
            className="w-[368px] h-[100px] border-[#11175D] border-[2px] rounded-lg outline-slate-400 pl-[52px] text-lg font-semibold"
            value={email}
          />
         
        </div>
        <div className="mt-[61px] relative">
            <label className="absolute -mt-3 ml-14 bg-white px-2" >Full name</label>
          <input
        
            type="text"
            placeholder="Enter your name"
            className="w-[368px] h-[100px] border-[#11175D] border-[2px] rounded-lg outline-slate-400 pl-[52px] text-lg font-semibold"
          />
         
        </div>
        <div className="mt-[61px] relative">
            <label className="absolute -mt-3 ml-14 bg-white px-2" >Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-[368px] h-[100px] border-[#11175D] border-[2px] rounded-lg outline-slate-400 pl-[52px] text-lg font-semibold"
          />
         
        </div>
        <button className="text-xl font-semibold text-white bg-[#5F35F5] py-5 px-36 rounded-[86px] mt-[51px]">Sign up</button>
        <p className="text-sm font-medium mt-[35px]">Already  have an account ? <Link className="text-[#EA6C00]">Sign In</Link></p>
      </div>
      <div className="w-2/4">
        <img
          className="w-full h-screen object-cover"
          src={Signinimage}
          alt="Signinimage"
        />
      </div>
    </div>
  );
};

export default Signin;
