import { useState } from "react";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
  const padding = {
    padding: 5
  };

  return (
    <BrowserRouter>

      <div>
        <Link style={padding} to="/authors">author</Link>
        <Link style={padding} to="/books">books</Link>
        <Link style={padding} to="/add">add</Link>

      </div>

      <Routes>
        <Route path="/" element={<Authors />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add" element={<NewBook />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
