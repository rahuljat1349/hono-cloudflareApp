import Quote from "../components/Quote";
import { SigninInput } from "@rahuljat1349/common-schema";
import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/Input";

function Signin() {
  const [inputValues, setInputValues] = useState<SigninInput>({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
    console.log(inputValues);
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div>
          <div className="flex justify-center items-center h-screen ">
            <form className="flex flex-col gap-3 ">
              <h1 className="text-center font-extrabold text-3xl">
                Create an account
              </h1>
              <h4 className="text-center text-gray-400">
                Don't have an account?
                <Link to={"/signup"} className="underline">
                  {" "}
                  SignUp
                </Link>
              </h4>

              <Input
                label="Email"
                placeholder="john@example.com"
                id="email"
                name="email"
                type="email"
                onchange={inputChangeHandler}
              />
              <Input
                label="Password"
                placeholder="********"
                id="password"
                name="password"
                type="password"
                onchange={inputChangeHandler}
              />
              <button className="p-2 font-semibold text-white bg-black rounded-md">
                Sign In
              </button>
            </form>
          </div>
        </div>
        <div className="md:visible invisible">
          <Quote />
        </div>
      </div>
    </>
  );
}

export default Signin;
