/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const FirstPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const handleChange = (value) => {
    setPhone(value);
  };

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{10,14}$/;

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

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Handle form submission
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-[#fafafa] shadow-md rounded mt-4"
    >
      <div className="m-4">
        <h1 className="text-gray-800 font-bold p-4 text-xl text-center">
          Book your FREE trial <br></br> class in <span>just 1 minute!</span>
        </h1>
        <p className="text-center">
          Equip your kids with education for tomorrow!!
        </p>
        <label className="block text-gray-700 font-bold mb-2">
          Parent's Email Address
        </label>
        <input
          type="email"
          className={`shadow appearance-none border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email}</p>
        )}
      </div>

      <div className="m-4">
        <label className="block text-gray-700 font-bold mb-2">
          Parent's Phone Number
        </label>
        <div>
          <PhoneInput
            containerClass="w-[200%]"
            inputClass="border border-gray-300 rounded shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline"
            inputStyle={{
              width: "50%",
            }}
            country={"us"}
            value={phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
            disableDropdown={false}
            countryCodeEditable={false}
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-xs italic">{errors.phone}</p>
        )}
      </div>

      <div className="m-4">
        <label className="block text-gray-700 font-bold mb-2">
          Course Preference
        </label>
        <select className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="math">Mathematics</option>
          <option value="science">Science</option>
          <option value="literature">Literature</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default FirstPage;
