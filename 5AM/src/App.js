import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';

//这里导入组件相对地址
import LoginPage from "./page/loginPage/loginPage";
import SignUpPage from "./page/signUpPage/signUpPage";
import ResetPasswordPage from "./page/resetPasswordPage/resetPasswordPage";
import HomePage from "./page/homePage/homePage";

function App() {
  return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signUpPage" component={SignUpPage} />
          <Route exact path="/resetPasswordPage" component={ResetPasswordPage} />
          <Route path="/homePage" component={HomePage} />
        </div>
      </Router>
  );
}

export default App;
