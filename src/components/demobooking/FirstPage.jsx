/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FirstPage = ({ onNextPage }) => {
  const [parent_name, setParent_name] = useState("");
  const [child_name, setChild_name] = useState("");
  const [parent_email, setParent_email] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [student_grade, setStudent_grade] = useState("");
  const [selected_course, setSelected_course] = useState("");
  const [isAdult, setIsAdult] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [errors, setErrors] = useState({});

  const yourNameInputRef = useRef(null); // Step 2: Create ref

  useEffect(() => {
    yourNameInputRef.current.focus(); // Step 3: Focus on the input
  }, []);

  const handleChange = (value) => {
    setPhone_number(value);
  };

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{10,14}$/;
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!parent_name) {
      errors.yourName = "Your name is required";
    } else if (!nameRegex.test(parent_name)) {
      errors.yourName = "Your name can only contain letters";
    }

    if (!child_name) {
      errors.child_name = "Child's name is required";
    } else if (!nameRegex.test(child_name)) {
      errors.child_name = "Child's name can only contain letters";
    }

    if (!parent_email) {
      errors.parent_email = "Email is required";
    } else if (!emailRegex.test(parent_email)) {
      errors.parent_email = "Email is not valid";
    }

    if (!phone_number) {
      errors.phone_number = "Phone number is required";
    } else if (!phoneRegex.test(phone_number)) {
      errors.phone_number = "Phone number is not valid";
    }

    if (!student_grade) {
      errors.grade = "Grade is required";
    }

    if (!selected_course) {
      errors.selected_course = "Grade is required";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      parent_name,
      child_name,
      parent_email,
      phone_number,
      student_grade,
      selected_course,
    };
    //
    if (validate()) {
      try {
        const response = await fetch(
          "https://api.codojo.in/demos",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          // const result = await response.json();
          const result = await response.body
          console.log("Success:", result);
          // Navigate to the next page
          // Pass data to BookADemo
          onNextPage(formData);
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     onNextPage(); // Call this to navigate to the second page
  //   }
  // };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 shadow-md rounded min-h-screen"
    >
      <div>
        <h1 className="text-gray-80t0 font-bold pt-8  p-4 text-xl text-center">
          Book your FREE trial <br></br> class in just
          <span className="text-[#E91E63]"> 1 minute!</span>
        </h1>
        <p className="text-center text-[#673AB7]">
          Equip your kids with education for tomorrow!!
        </p>

        {/* Flexbox container for two rows */}
        <div className="flex flex-col md:flex-row justify-between p-6">
          {/* Left Side Inputs */}
          <div className="md:w-[48%] sm:w-[56%] mb-4 md:mb-0">
            <div className="m-4">
              <label className="block text-gray-700 font-bold mb-2">
                Your Name*
              </label>
              <input
                ref={yourNameInputRef}
                placeholder="Your Name"
                type="text"
                className={`shadow appearance-none border ${
                  errors.parent_name ? "border-red-500" : "border-gray-300"
                } rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                value={parent_name}
                onChange={(e) => setParent_name(e.target.value)}
              />
              {errors.yourName && (
                <p className="text-red-500 text-xs italic">
                  {errors.parent_name}
                </p>
              )}
            </div>

            <div className="m-4">
              <label className="block text-gray-700 font-bold mb-2">
                Child's Name*
              </label>
              <input
                placeholder="Child's Name"
                type="text"
                className={`shadow appearance-none border ${
                  errors.child_name ? "border-red-500" : "border-gray-300"
                } rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                value={child_name}
                onChange={(e) => setChild_name(e.target.value)}
              />
              {errors.child_name && (
                <p className="text-red-500 text-xs italic">
                  {errors.child_name}
                </p>
              )}
            </div>

            <div className="m-4">
              <label className="block text-gray-700 font-bold mb-2">
                Parent's Email Address*
              </label>
              <input
                placeholder="Enter Parent's email ID"
                type="email"
                className={`shadow appearance-none border ${
                  errors.parent_email ? "border-red-500" : "border-gray-300"
                } rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                value={parent_email}
                onChange={(e) => setParent_email(e.target.value)}
              />
              {errors.parent_email && (
                <p className="text-red-500 text-xs italic">
                  {errors.parent_email}
                </p>
              )}
            </div>
          </div>

          {/* Right Side Inputs */}
          <div className="md:w-[48%] sm:w-[56%]">
            <div className="m-4">
              <label className="block text-gray-700 font-bold mb-2">
                Parent's Phone Number*
              </label>
              <PhoneInput
                inputStyle={{
                  width: "75%",
                }}
                containerClass="w-full"
                inputClass="border border-gray-300 rounded shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline"
                country={"de"}
                value={phone_number}
                onChange={handleChange}
                placeholder="Enter phone number"
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
              />
              {errors.phone_number && (
                <p className="text-red-500 text-xs italic">
                  {errors.phone_number}
                </p>
              )}
            </div>

            <div className="m-4">
              <label className="block text-gray-700 font-bold mb-2">
                Student's Grade*
              </label>
              <select
                className={`shadow appearance-none border ${
                  errors.student_grade ? "border-red-500" : "border-gray-300"
                } rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                value={student_grade}
                onChange={(e) => setStudent_grade(e.target.value)}
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
              {errors.student_grade && (
                <p className="text-red-500 text-xs italic">
                  {errors.student_grade}
                </p>
              )}
            </div>

            <div className="m-4">
              <label className="block text-gray-700 font-bold mb-2">
                Course Preference*
              </label>
              <select
                className={`shadow appearance-none border ${
                  errors.selected_course ? "border-red-500" : "border-gray-300"
                } rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                value={selected_course}
                onChange={(e) => setSelected_course(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Course
                </option>
                <option value="webdev">Web Dev</option>
                <option value="scratch">Scratch</option>
                <option value="dsa">DSA</option>
                <option value="java">Java</option>
                <option value="graphic-design">Graphic Design</option>
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
