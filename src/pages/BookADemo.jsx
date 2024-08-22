/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react";
//
// const BookADemo = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     grade: "",
//     email: "",
//   });
//
//   const [errors, setErrors] = useState({});
//
//   const validate = () => {
//     let tempErrors = {};
//     tempErrors.firstName = /^[a-zA-Z]+$/.test(formData.firstName)
//       ? ""
//       : "First name should only contain letters";
//     tempErrors.lastName = /^[a-zA-Z]+$/.test(formData.lastName)
//       ? ""
//       : "Last name should only contain letters";
//     tempErrors.email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(formData.email)
//       ? ""
//       : "Email is not valid";
//     tempErrors.grade = formData.grade ? "" : "Please select a grade";
//
//     setErrors(tempErrors);
//
//     return Object.values(tempErrors).every((x) => x === "");
//   };
//
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       // Form is valid, submit the data
//       console.log("Form data submitted:", formData);
//     }
//   };
//
//   return (
//     <div className="p-8 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold mb-6">Book a Demo</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//           {errors.firstName && (
//             <p className="text-red-500 text-sm">{errors.firstName}</p>
//           )}
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//           {errors.lastName && (
//             <p className="text-red-500 text-sm">{errors.lastName}</p>
//           )}
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Grade</label>
//           <select
//             name="grade"
//             value={formData.grade}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           >
//             <option value="">Select Grade</option>
//             <option value="1">Grade 1</option>
//             <option value="2">Grade 2</option>
//             <option value="3">Grade 3</option>
//             <option value="4">Grade 4</option>
//             <option value="5">Grade 5</option>
//             <option value="6">Grade 6</option>
//             <option value="7">Grade 7</option>
//             <option value="8">Grade 8</option>
//             <option value="9">Grade 9</option>
//             <option value="10">Grade 10</option>
//             <option value="11">Grade 11</option>
//             <option value="12">Grade 12</option>
//           </select>
//           {errors.grade && (
//             <p className="text-red-500 text-sm">{errors.grade}</p>
//           )}
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm">{errors.email}</p>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-700"
//         >
//           Book Now
//         </button>
//       </form>
//     </div>
//   );
// };
//
// export default BookADemo;

import { useState } from "react";

const BookADemo = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [errors, setErrors] = useState({});

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
      // Handle form submission (e.g., send to API)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded"
    >
      <div className="mb-4">
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

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Parent's Phone Number
        </label>
        <div className="flex">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="shadow appearance-none border border-gray-300 rounded-l py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="+1">+1 (US)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+91">+91 (India)</option>
          </select>
          <input
            type="tel"
            className={`shadow appearance-none border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-xs italic">{errors.phone}</p>
        )}
      </div>

      <div className="mb-4">
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

export default BookADemo;
