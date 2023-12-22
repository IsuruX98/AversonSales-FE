import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layouts from "./layouts/Layouts";

const App = () => {
  return (
      <div className="App">
        <BrowserRouter>
          <Layouts />
        </BrowserRouter>
      </div>
  );
};

export default App;
