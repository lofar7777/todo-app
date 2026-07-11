import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./TodoApp.css";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider from "./security/AuthContext";


export default function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route
              path="/welcome/:username"
              element={<WelcomeComponent />}
            ></Route>
            <Route path="/todos" element={<ListTodosComponent />}></Route>
            <Route path="/logout" element={<LogoutComponent />}></Route>
            <Route path="*" element={<ErrorComponent />}></Route>
          </Routes>
        </BrowserRouter>
       
      </AuthProvider>
    </div>
  );
}
