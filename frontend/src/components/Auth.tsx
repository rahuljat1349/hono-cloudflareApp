import { SignupInput } from "@rahuljat1349/common-schema";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const Auth = () => {
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
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <form className="flex flex-col gap-3 ">
          <h1 className="text-center font-extrabold text-3xl">
            Create an account
          </h1>
          <h4 className="text-center text-gray-400">
            Already have an account?{" "}
            <Link to={"/Signin"} className="underline">
              Login
            </Link>
          </h4>
          <LabelledInput
            label="Name"
            placeholder="Enter your name"
            id="name"
            name="name"
            onchange={inputChangeHandler}
          />
          <LabelledInput
            label="Email"
            placeholder="john@example.com"
            id="email"
            name="email"
            type="email"
            onchange={inputChangeHandler}
          />
          <LabelledInput
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
    </>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  id?: string;
  name: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelledInput = ({
  label,
  placeholder,
  onchange,
  type,
  id,
  name,
}: LabelledInputType) => {
  return (
    <>
      <label className="font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        className="border-[1px] focus:border-gray-700 border-solid rounded-md p-2 bg-gray-50 outline-none duration-200"
        type={type || "text"}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onchange}
      />
    </>
  );
};

export default Auth;
