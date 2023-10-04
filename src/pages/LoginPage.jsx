import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({setIsAuth}) => {
  const navigate = useNavigate();
  const [login,setLogin] = useState({username:"",password:""});
  const {username,password} = login;

  const checkUser =(e)=>{
    e.preventDefault();
    if(username==="nodirbek" && password==="P@ssw0rd"){
      navigate("/");
      localStorage.setItem("isauth","1");
      setIsAuth("1");
    }
  }
  const Handle = (e) => {
    setLogin({...login,[e.target.name]:e.target.value})
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={checkUser}
        className="loginForm font-serif flex flex-col gap-4  p-10 rounded-lg h-96"
      >
        <h2 className="text-black text-3xl text-center">Login</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-xl">
            UserName
          </label>
          <input
            type="text"
            onChange={Handle}
            id="username"
            placeholder="nodirbek"
            value={username}
            name="username"
            className="outline-none py-2 rounded-md border text-gray-700 px-5 text-xl"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-xl">
            Password
          </label>
          <input
            type="password"
            onChange={Handle}
            id="password"
            placeholder="P@ssw0rd"
            value={password}
            name="password"
            className="outline-none py-2 rounded-md border text-gray-700 px-5 text-xl"
          />
        </div>
        <button className="py-2 px-5 rounded-md m-3 bg-blue-600 mx-auto w-40 text-white text-xl">
          LogIn
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
