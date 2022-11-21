import "./App.css";
import About from "./coponents/About";
import Navbar from "./coponents/Navbar";
import TextForm from "./coponents/TextForm";
import Alert from "./coponents/Alert";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "textUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "textUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          {/* <About /> */}
          {/* <TextForm
          showAlert={showAlert}
          heading="Enter the text below"
          mode={mode}
        /> */}

          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word counter, Character counter, Copy text"
                  mode={mode}
                ></TextForm>
              }
            ></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
