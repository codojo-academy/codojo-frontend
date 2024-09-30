import { useNavigate } from "react-router-dom";

const useBookADemo = () => {
  const navigate = useNavigate();

  const bookADemoPage = () => {
    navigate("/book-a-demo");
  };

  return { bookADemoPage };
};

export default useBookADemo;
