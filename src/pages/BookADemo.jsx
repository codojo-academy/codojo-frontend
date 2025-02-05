// /* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import SecondPage from "../components/demobooking/SecondPage";
import FirstPage from "../components/demobooking/FirstPage";
const BookADemo = () => {
  const [currentPage, setCurrentPage] = useState("first");
  const [formData, setFormData] = useState({ parent_name: "", parent_email: "" });

  const handleNextPage = (data) => {
    setFormData(data); // Store form data in state
    setCurrentPage("second"); // Move to the second page
  };

  return (
      <>
        {currentPage === "first" && <FirstPage onNextPage={handleNextPage} />}
        {currentPage === "second" && <SecondPage parent_name={formData.parent_name} parent_email={formData.parent_email} />}
      </>
  );
};

export default BookADemo;
