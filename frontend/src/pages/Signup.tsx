import Quote from "../components/Quote";
import { SignupInput } from "@rahuljat1349/common-schema";
import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/Input";

function Signup() {
  const [inputValues, setInputValues] = useState<SignupInput>({
    name: "",
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
                Already have an account?
                <Link to={"/signin"} className="underline">
                  {" "}
                  Login
                </Link>
              </h4>

              <Input
                label="Name"
                placeholder="Enter your name"
                id="name"
                name="name"
                onchange={inputChangeHandler}
              />

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
                Sign Up
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

export default Signup;
