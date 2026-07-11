import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./TodoApp.css";
import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import LoginComponent from "./LoginComponent";

export default function TodoApp() {
  return (
    <div className="TodoApp">
    
      <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/welcome/:username" element={<WelcomeComponent />}></Route>
          <Route path="/todos" element={<ListTodosComponent/>}></Route>
          <Route path="/logout" element={<LogoutComponent/>}></Route>
          <Route path="*" element={<ErrorComponent/>}></Route>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
      
    </div>
  );
}


















