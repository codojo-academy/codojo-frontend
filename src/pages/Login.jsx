import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const goToStudentPortal = () => {
    navigate("/student-portal");
  };
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form submitted with: ", form);

    // Email validation check
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return; // Stop further execution if the email is invalid
    }

    setError(""); // Clear error if any

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Response:", data); // Log the successful response data

      if (data.token) {
        // If login is successful, navigate to the student portal
        goToStudentPortal();
      } else {
        console.error("Invalid credentials");
        // display an error message to the user here
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error during the login process:", error); // Catch and log any errors
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="mt-[-1px] w-full h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex flex-col items-center justify-around bg-base-300 pt-2 rounded overflow-hidden mx-auto my-0 w-2/3 sm:w-1/2 2xl:w-1/3 transition-all"
      >
        <h1 className="mt-2 mb-6 lg:mb-8 text-2xl font-semibold text-[#673AB7]">
          Login to your account
        </h1>
        {/* Display error message if it exists */}
        {error && <div className="text-red-600 mb-4">{error}</div>}

        <div className="flex flex-col items-center justify-around h-1/2 w-full text-white">
          <input
            required
            type="text"
            placeholder="Please Enter Student Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-3/5 mb-8 p-2 text-gray-700 outline-none border-b border-transparent focus:border-slate-100  rounded transition-all"
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-3/5 mb-8 p-2 text-gray-700 outline-none border-b border-transparent focus:border-slate-100  rounded transition-all"
          />
        </div>
        <br />
        <button
          type="submit"
          className="w-3/5 bg-[#d43a6e] hover:bg-[#E91E63] font-semibold text-white font-normal text-lg py-3 transition-none uppercase rounded"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
