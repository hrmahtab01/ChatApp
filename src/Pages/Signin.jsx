import React, { useState } from "react";
import SigninImg from "../assets/Signin.png";
import { Link, NavLink } from "react-router-dom";
import { GoCheck } from "react-icons/go";

const Signin = () => {
  let [name, setname] = useState("");
  let [email, setemail] = useState("");
  let [password, Setpassword] = useState("");
  let [nameerr, setnameerr] = useState("");
  let [emailerr, setemailerr] = useState("");
  let [passworderr, Setpassworderr] = useState("");
  let [showpassword, Setshowpassword] = useState(false);
  let [items, setitems] = useState(false);

  let handleEmailChange = (e) => {
    setemail(e.target.value);
    setemailerr("");
  };
  let handleNameChange = (e) => {
    setname(e.target.value);
    setnameerr("");
  };
  let handlePassChange = (e) => {
    Setpassword(e.target.value);
    Setpassworderr("");
  };

  let handleSubmit = () => {
    if (!email) {
      setemailerr("!");
    }
    if (!name) {
      setnameerr("!");
    }
    if (!password) {
      Setpassworderr("!");
    }
  };

  let handleshowpassword = () => {
    Setshowpassword(!showpassword);
  };

  let handleitems = () => {
    setitems(true);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 ">
      <div className="flex justify-center items-center w-full  h-full">
        <div className="">
          <h1 className="text-Primary text-[34px] font-bold font-Nunito ">
            Get started with easily register
          </h1>
          <p className="text-xl font-normal font-Nunito text-ThirdColor opacity-50 mt-[13px]">
            Free register and you can enjoy it
          </p>

          <div className="w-[268px] h-[62px] mt-[61px] relative lg:w-[368px] lg:h-[82px] md:w-[368px] md:h-[82px] mx-auto lg:mx-0">
            <label className="absolute -top-[14px] left-[50px] bg-[#ffff] py-1 px-3 text-sm font-semibold text-[#11175D] font-Nunito">
              Email Address
            </label>
            <input
              onChange={handleEmailChange}
              value={email}
              className={`w-full h-full border-2 rounded-xl ${
                emailerr ? "border-lal" : "border-[#11175D]/50"
              } lg:pl-[52px] md:pl-[26px] pl-[15px] text-xl font-semibold text-[#11175D]`}
              type="text"
              placeholder="Enter your email"
            />
            {emailerr && (
              <div className="w-5 h-5 rounded-full bg-[#A52A2A] absolute top-[50%] right-3 translate-y-[-50%]  flex justify-center items-center">
                <p className="text-[#FFFf] text-xl">{emailerr}</p>
              </div>
            )}
          </div>

          <div className="w-[268px] h-[62px] mt-[61px] relative lg:w-[368px] lg:h-[82px] md:w-[368px] md:h-[82px] mx-auto lg:mx-0">
            <label className="absolute -top-[14px] left-[50px] bg-[#ffff] py-1 px-3 text-sm font-semibold text-[#11175D] font-Nunito">
              Full name
            </label>
            <input
              value={name}
              onChange={handleNameChange}
              className={`w-full h-full border-2 rounded-xl ${
                nameerr ? "border-lal" : "border-[#11175D]/50"
              } lg:pl-[52px] md:pl-[26px] pl-[15px] text-xl font-semibold text-[#11175D]`}
              type="text"
              placeholder="Enter your name"
            />
            {nameerr && (
              <div className="w-5 h-5 rounded-full bg-[#A52A2A] absolute top-[50%] right-3 translate-y-[-50%]  flex justify-center items-center">
                <p className="text-[#FFFf] text-xl">{nameerr}</p>
              </div>
            )}
          </div>
          <div className="w-[268px] h-[62px] mt-[61px] relative lg:w-[368px] lg:h-[82px] md:w-[368px] md:h-[82px] mx-auto lg:mx-0">
            <label className="absolute -top-[14px] left-[50px] bg-[#ffff] py-1 px-3 text-sm font-semibold text-[#11175D] font-Nunito">
              Password
            </label>

            <input
              value={password}
              onChange={handlePassChange}
              className={`w-full h-full border-2 rounded-xl ${
                passworderr ? "border-lal" : "border-[#11175D]/50"
              } lg:pl-[52px] md:pl-[26px] pl-[15px] text-xl font-semibold text-[#11175D] `}
              type={showpassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <div className="flex gap-[6px] ">
              <div
                onClick={handleshowpassword}
                className="w-5 h-5 border-[2px] mt-2"
              >
                {showpassword ? (
                  <GoCheck className="text-[18px] text-Primary" />
                ) : (
                  ""
                )}
              </div>
              <div className=" mt-1">
                <p className="text-lg font-normal font-Nunito ">
                  Show password
                </p>
              </div>
            </div>
            {passworderr && (
              <div className="w-5 h-5 rounded-full bg-[#A52A2A] absolute top-[50%] right-3 translate-y-[-50%]  flex justify-center items-center">
                <p className="text-[#FFFf] text-xl">{passworderr}</p>
              </div>
            )}
          </div>
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={handleSubmit}
              className=" py-4 px-[100px]  lg:py-[20px] lg:px-[145px] md:py-[20px] md:px-[145px] bg-Secondary rounded-xl text-xl font-semibold font-Nunito text-[#ffffff] mt-[51px]"
            >
              Sign up
            </button>
          </div>
          <p className="text-sm text-[#03014C] font-normal font-Nunito mt-[35px] ml-[75px]">
            Already have an account ?{" "}
            <Link to="/" className="font-bold font-Nunito text-[#EA6C00]">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full mt-4 lg:mt-0">
        <img
          className=" w-full max-h-screen object-cover"
          src={SigninImg}
          alt="Sign "
        />
      </div>
    </div>
  );
};

export default Signin;
