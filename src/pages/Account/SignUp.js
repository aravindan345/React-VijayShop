import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SignUp = () => {
  // State
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [checked, setChecked] = useState(false);

  // Error states
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errCountry, setErrCountry] = useState("");
  const [errZip, setErrZip] = useState("");

  // Success message
  const [successMsg, setSuccessMsg] = useState("");

  // Email validation
  const EmailValidation = (email) =>
    String(email).toLowerCase().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

  // Sign Up handler
  const handleSignUp = (e) => {
    e.preventDefault();

    // Reset errors
    setErrClientName("");
    setErrEmail("");
    setErrPhone("");
    setErrPassword("");
    setErrAddress("");
    setErrCity("");
    setErrCountry("");
    setErrZip("");

    if (!checked) return;

    let isValid = true;

    if (!clientName) {
      setErrClientName("Enter your name");
      isValid = false;
    }
    if (!email) {
      setErrEmail("Enter your email");
      isValid = false;
    } else if (!EmailValidation(email)) {
      setErrEmail("Enter a valid email");
      isValid = false;
    }
    if (!phone) {
      setErrPhone("Enter your phone number");
      isValid = false;
    }
    if (!password) {
      setErrPassword("Create a password");
      isValid = false;
    } else if (password.length < 6) {
      setErrPassword("Passwords must be at least 6 characters");
      isValid = false;
    }
    if (!address) {
      setErrAddress("Enter your address");
      isValid = false;
    }
    if (!city) {
      setErrCity("Enter your city name");
      isValid = false;
    }
    if (!country) {
      setErrCountry("Enter your country");
      isValid = false;
    }
    if (!zip) {
      setErrZip("Enter your zip/postal code");
      isValid = false;
    }

    if (isValid) {
      setSuccessMsg(
        `Hello ${clientName}, welcome to VIJAY SHOPPING 🎉. We received your signup request. A confirmation has been sent to ${email}.`
      );

      // Reset form
      setClientName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setAddress("");
      setCity("");
      setCountry("");
      setZip("");
      setChecked(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-start">
      {/* Left Section */}
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              Get started for free
            </h1>
            <p className="text-base">Create your account to access more</p>
          </div>

          {/* Features */}
          {[
            "Get started fast with VIJAY",
            "Access all VIJAY services",
            "Trusted by online shoppers",
          ].map((text, idx) => (
            <div key={idx} className="w-[300px] flex items-start gap-3">
              <span className="text-green-500 mt-1">
                <BsCheckCircleFill />
              </span>
              <p className="text-base text-gray-300">
                <span className="text-white font-semibold font-titleFont">
                  {text}
                </span>
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}

          {/* Footer */}
          <div className="flex items-center justify-between mt-10 text-sm font-titleFont font-semibold text-gray-300">
            <p className="hover:text-white cursor-pointer duration-300">© VIJAY</p>
            <p className="hover:text-white cursor-pointer duration-300">Terms</p>
            <p className="hover:text-white cursor-pointer duration-300">Privacy</p>
            <p className="hover:text-white cursor-pointer duration-300">Security</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-[500px] px-6">
            <p className="w-full py-6 text-green-600 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/signin">
              <button className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold tracking-wide hover:bg-black hover:text-white duration-300">
                Sign in
              </button>
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSignUp}
            className="w-full lgl:w-[500px] h-screen flex items-center justify-center"
          >
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                Create your account
              </h1>

              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <p className="font-titleFont text-base font-semibold text-gray-600">
                  Full Name
                </p>
                <input
                  onChange={(e) => setClientName(e.target.value)}
                  value={clientName}
                  className="w-full h-8 px-4 text-base rounded-md border border-gray-400 outline-none"
                  type="text"
                  placeholder="eg. John Doe"
                />
                {errClientName && <p className="text-sm text-red-500 px-4">{errClientName}</p>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <p className="font-titleFont text-base font-semibold text-gray-600">Work Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full h-8 px-4 text-base rounded-md border border-gray-400 outline-none"
                  type="email"
                  placeholder="john@workemail.com"
                />
                {errEmail && <p className="text-sm text-red-500 px-4">{errEmail}</p>}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <p className="font-titleFont text-base font-semibold text-gray-600">Phone Number</p>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  className="w-full h-8 px-4 text-base rounded-md border border-gray-400 outline-none"
                  type="text"
                  placeholder="008801234567891"
                />
                {errPhone && <p className="text-sm text-red-500 px-4">{errPhone}</p>}
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1">
                <p className="font-titleFont text-base font-semibold text-gray-600">Password</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full h-8 px-4 text-base rounded-md border border-gray-400 outline-none"
                  type="password"
                  placeholder="Create password"
                />
                {errPassword && <p className="text-sm text-red-500 px-4">{errPassword}</p>}
              </div>

              {/* Address */}
              <div className="flex flex-col gap-1">
                <p className="font-titleFont text-base font-semibold text-gray-600">Address</p>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  className="w-full h-8 px-4 text-base rounded-md border border-gray-400 outline-none"
                  type="text"
                  placeholder="road-001, house-115, example area"
                />
                {errAddress && <p className="text-sm text-red-500 px-4">{errAddress}</p>}
              </div>

              {/* City */}
              <div className="flex flex-col gap-1">
                <p className="font-titleFont text-base font-semibold text-gray-600">City</p>
                <input
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  className="w-full h-8 px-4 text-base rounded-md border border-gray-400 outline-none"
                  type="text"
                  placeholder="Your city"
                />
                {errCity && <p className="text-sm text-red-500 px-4">{errCity}</p>}
              </div>

              {/* Country */}
              <div className="flex flex-col gap-1">
                <p className="font-titleFont text-base font-semibold text-gray-600">Country</p>
                <input
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                  className="w-full h-8 px-4 text-base rounded-md border border-gray-400 outline-none"
                  type="text"
                  placeholder="Your country"
                />
                {errCountry && <p className="text-sm text-red-500 px-4">{errCountry}</p>}
              </div>

              {/* Zip */}
              <div className="flex flex-col gap-1">
                <p className="font-titleFont text-base font-semibold text-gray-600">
                  Zip/Postal Code
                </p>
                <input
                  onChange={(e) => setZip(e.target.value)}
                  value={zip}
                  className="w-full h-8 px-4 text-base rounded-md border border-gray-400 outline-none"
                  type="text"
                  placeholder="e.g. 12345"
                />
                {errZip && <p className="text-sm text-red-500 px-4">{errZip}</p>}
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2 my-2">
                <input
                  onChange={() => setChecked(!checked)}
                  checked={checked}
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                />
                <p className="text-sm text-primeColor">
                  I agree to the VIJAY{" "}
                  <span className="text-blue-500">Terms of Service</span> and{" "}
                  <span className="text-blue-500">Privacy Policy</span>.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`${
                  checked
                    ? "bg-primeColor hover:bg-black"
                    : "bg-gray-500 cursor-not-allowed"
                } w-full text-gray-200 text-base font-medium h-10 rounded-md duration-300`}
              >
                Create Account
              </button>

              {/* Sign in link */}
              <p className="text-sm text-center font-titleFont font-medium mt-2">
                Already have an account?{" "}
                <Link to="/signin">
                  <span className="hover:text-blue-600 duration-300">Sign in</span>
                </Link>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
