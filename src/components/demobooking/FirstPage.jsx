/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FirstPage = ({ onNextPage }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [course, setCourse] = useState("");
  const [isAdult, setIsAdult] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [yourName, setYourName] = useState("");
  const [childName, setChildName] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (value) => {
    setPhone(value);
  };

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{10,14}$/;
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!yourName) {
      errors.yourName = "Your name is required";
    } else if (!nameRegex.test(yourName)) {
      errors.yourName = "Your name can only contain letters";
    }

    if (!childName) {
      errors.childName = "Child's name is required";
    } else if (!nameRegex.test(childName)) {
      errors.childName = "Child's name can only contain letters";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email is not valid";
    }

    if (!phone) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Phone number is not valid";
    }

    if (!grade) {
      errors.grade = "Grade is required";
    }

    if (!course) {
      errors.course = "Grade is required";
    }

    if (!isAdult) {
      errors.isAdult = "Please check the required";
    }

    if (!agreeTerms) {
      errors.agreeTerms =
        "You must agree to the terms of use and privacy policy";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onNextPage(); // Call this to navigate to the second page
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded">
      <div>
        <h1 className="text-gray-80t0 font-bold pt-8  p-4 text-xl text-center">
          Book your FREE trial <br></br> class in just
          <span className="text-[#E91E63]"> 1 minute!</span>
        </h1>
        <p className="text-center text-[#673AB7]">
          Equip your kids with education for tomorrow!!
        </p>

        {/* Flexbox container for two rows */}
        <div className="flex flex-wrap justify-between p-6">
          {/* Left Side Inputs */}
          <div className="w-[48%]">
            <div className="m-4">
              <label className="block text-gray-700 font-bold mb-2">
                Your Name
              </label>
              <input
                placeholder="Your Name"
                type="text"
                className={`shadow appearance-none border ${
                  errors.yourName ? "border-red-500" : "border-gray-300"
                } rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
              />
              {errors.yourName && (
                <p className="text-red-500 text-xs italic">{errors.yourName}</p>
              )}
            </div>

            <div className="m-4">
              <label className="block text-gray-700 font-bold mb-2">
                Child's Name
              </label>
              <input
                placeholder="Child's Name"
                type="text"
                className={`shadow appearance-none border ${
                  errors.childName ? "border-red-500" : "border-gray-300"
                } rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
              />
              {errors.childName && (
                <p className="text-red-500 text-xs italic">
                  {errors.childName}
                </p>
              )}
            </div>

            <div className="m-4">
              <label className="block text-gray-700 font-bold mb-2">
                Parent's Email Address
              </label>
              <input
                placeholder="Enter Parent's email ID"
                type="email"
                className={`shadow appearance-none border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Right Side Inputs */}
          <div className="w-[48%]">
            <div className="m-4">
              <label className="block text-gray-700 font-bold mb-2">
                Parent's Phone Number
              </label>
              <PhoneInput
                inputStyle={{
                  width: "75%",
                }}
                containerClass="w-full"
                inputClass="border border-gray-300 rounded shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline"
                country={"de"}
                value={phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs italic">{errors.phone}</p>
              )}
            </div>

            <div className="m-4">
              <label className="block text-gray-700 font-bold mb-2">
                Student's Grade
              </label>
              <select
                className={`shadow appearance-none border ${
                  errors.grade ? "border-red-500" : "border-gray-300"
                } rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select grade
                </option>
                <option value="grade1">Grade 1</option>
                <option value="grade2">Grade 2</option>
                <option value="grade3">Grade 3</option>
                <option value="grade4">Grade 4</option>
                <option value="grade5">Grade 5</option>
                <option value="grade1">Grade 6</option>
                <option value="grade2">Grade 7</option>
                <option value="grade3">Grade 8</option>
                <option value="grade4">Grade 9</option>
                <option value="grade5">Grade 10</option>
                <option value="grade4">Grade 11</option>
                <option value="grade5">Grade 12</option>
              </select>
              {errors.grade && (
                <p className="text-red-500 text-xs italic">{errors.grade}</p>
              )}
            </div>

            <div className="m-4">
              <label className="block text-gray-700 font-bold mb-2">
                Course Preference
              </label>
              <select
                className={`shadow appearance-none border ${
                  errors.course ? "border-red-500" : "border-gray-300"
                } rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Course
                </option>
                <option value="webdev">Web Dev</option>
                <option value="scratch">Scratch</option>
                <option value="dsa">DSA</option>
              </select>
            </div>
          </div>
        </div>

        <div className="m-2 pl-8">
          <label className="block text-gray-700 font mb-2">
            <input
              type="checkbox"
              className="mr-2 leading-tight"
              checked={isAdult}
              onChange={(e) => setIsAdult(e.target.checked)}
            />
            I'm 18+ and I'm booking this trial class for a child related to me
          </label>
          {errors.isAdult && (
            <p className="text-red-500 text-xs italic">{errors.isAdult}</p>
          )}
        </div>

        <div className="m-2 pl-8">
          <label className="block text-gray-700  mb-2">
            <input
              type="checkbox"
              className="mr-2 leading-tight"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            I agree with Codojo’s terms of use and privacy policy
          </label>
          {errors.agreeTerms && (
            <p className="text-red-500 text-xs italic">{errors.agreeTerms}</p>
          )}
        </div>
        <div className="pl-10 p-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
          >
            Next, let us know your slot preference
          </button>
        </div>
      </div>
    </form>
  );
};

export default FirstPage;
