import Nav from "./components/codojo-homepage/Nav";
// import Content from "./components/Content";
import BookADemo from "./pages/BookADemo";
import Home from "./pages/Home";
import Login from "./pages/Login";
import StudentPortal from "./pages/StudentPortal";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <main>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-a-demo" element={<BookADemo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route />
      </Routes>
    </main>
  );
}

export default App;
