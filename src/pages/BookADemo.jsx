// /* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import SecondPage from "../components/demobooking/SecondPage";
import FirstPage from "../components/demobooking/FirstPage";
const BookADemo = () => {
  const [currentPage, setCurrentPage] = useState("first");

  const handleNextPage = () => {
    setCurrentPage("second");
  };
  return (
    <>
      {currentPage === "first" && <FirstPage onNextPage={handleNextPage} />}
      {currentPage === "second" && <SecondPage />}
    </>
  );
};

export default BookADemo;
