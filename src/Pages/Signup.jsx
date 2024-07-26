import React, { useState } from "react";
import Signupimg from "../assets/Signup.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Signup = () => {
  const auth = getAuth();
  let [showpass, Setshowpass] = useState(false);
  let [email, setemail] = useState("");
  let [password, Setpassword] = useState("");
  let [emailerr, setemailerr] = useState("");
  let [passworderr, Setpassworderr] = useState("");
  const provider = new GoogleAuthProvider();

  let hanlepassShow = () => {
    Setshowpass(!showpass);
  };

  let handleEmailChange = (e) => {
    setemail(e.target.value);
    setemailerr("");
  };

  let handlePassChange = (e) => {
    Setpassword(e.target.value);
    Setpassworderr("");
  };

  let handleLoginSubmit = () => {
    if (!email) {
      setemailerr("Email is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setemailerr("Invalid Email");
    }
    if (!password) {
      Setpassworderr("Password is required");
    }

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          
        })
        .catch((error) => {
          if (error.code.includes("auth/invalid-credential")) {
            setemailerr(" you don't have a account");
          }
        });
    }
  };

  let handlegoogleLOgin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
     

      })
      .catch((error) => {
    
      });
  };

  let HandleFaceboolLogin = () => {


  }
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
      <div className="w-full h-full flex justify-center items-center">
        <div>
          <h1 className="lg:text-[33px] md:text-[33px] text-[26px] font-bold text-[#03014C] font-Nunito mt-3 lg:mt-0 md:mt-0">
            Login to your account!
          </h1>
          <div className="lg:flex md:flex lg:gap-3 mt-[29px] md:gap-3 flex flex-col justify-center items-center lg:flex-row md:flex-row">
            <button
              onClick={handlegoogleLOgin}
              className="text-sm font-semibold text-[#03014C] font-Nunito flex items-center gap-[10px] py-[22px] px-[49px] lg:px-[45px] md:px-[45px] border-[2px] border-[#03014C] rounded-[8px]  "
            >
              {" "}
              <FcGoogle className="text-[20px]" /> Login with Google
            </button>
            <button onClick={HandleFaceboolLogin} className="text-sm font-semibold text-[#03014C] font-Nunito flex items-center gap-[10px] py-[22px] px-[45px] border-[2px] border-[#03014C] rounded-[8px] mt-[15px] lg:mt-0">
              {" "}
              <FaFacebook className="text-[20px]" /> Login with Facebook
            </button>
          </div>
          <div className="w-[268px] h-[62px] mt-[61px] relative lg:w-[368px] lg:h-[82px] md:w-[368px] md:h-[82px] mx-auto lg:mx-0">
            <label className="absolute -top-[14px] left-[50px] bg-[#ffff] py-1 px-3 text-sm font-semibold text-[#11175D] font-Nunito">
              Email Addres
            </label>
            <input
              onChange={handleEmailChange}
              value={email}
              className={`w-full h-full border-b-2 ${
                emailerr ? "border-lal" : "border-[#11175D]/50"
              }  lg:pl-[52px] md:pl-[26px] pl-[15px] text-xl font-semibold text-[#11175D]`}
              type="email"
              placeholder="Enter your email"
            />
            {emailerr && (
              <p className="text-lal text-xl font-Nunito font-normal">
                {emailerr}
              </p>
            )}
          </div>
          <div className="w-[268px] h-[62px] mt-[61px] relative lg:w-[368px] lg:h-[82px] md:w-[368px] md:h-[82px] mx-auto lg:mx-0">
            <label className="absolute -top-[14px] left-[50px] bg-[#ffff] py-1 px-3 text-sm font-semibold text-[#11175D] font-Nunito">
              Password
            </label>

            <input
              onChange={handlePassChange}
              className={`w-full h-full border-b-2 ${
                passworderr ? "border-lal" : " border-[#11175D]/50"
              } lg:pl-[52px] md:pl-[26px] pl-[15px] text-xl font-semibold text-[#11175D] `}
              type={showpass ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
            />
            {passworderr && (
              <p className="text-lal text-xl font-normal font-Nunito">
                {passworderr}
              </p>
            )}
            {showpass ? (
              <p
                onClick={hanlepassShow}
                className="absolute top-[50%] right-4 translate-y-[-50%] cursor-pointer"
              >
                <FaEye />{" "}
              </p>
            ) : (
              <p
                onClick={hanlepassShow}
                className="absolute top-[50%] right-4 translate-y-[-50%] cursor-pointer "
              >
                <FaEyeSlash />{" "}
              </p>
            )}
          </div>
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={handleLoginSubmit}
              className=" py-4 px-[70px]  lg:py-[20px] lg:px-[110px] md:py-[20px] md:px-[110px] bg-Secondary rounded-xl text-xl font-semibold font-Nunito text-[#ffffff] mt-[51px]"
            >
              Login to Continue
            </button>
          </div>
          <p className="text-sm text-[#03014C] font-normal font-Nunito mt-[35px] ">
            Don’t have an account ?
            <Link to="/signin" className="font-bold font-Nunito text-[#EA6C00]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full h-full ">
        <img
          className="w-full object-cover max-h-screen mt-4 lg:mt-0"
          src={Signupimg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Signup;
