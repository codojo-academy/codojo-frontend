import Nav from "./components/codojo-homepage/Nav";
// import Content from "./components/Content";
import BookADemo from "./pages/BookADemo";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <main>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-a-demo" element={<BookADemo />} />
        <Route />
      </Routes>
    </main>
  );
}

export default App;
