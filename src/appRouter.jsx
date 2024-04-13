import React, { useContext } from "react";
import Home from "./Components/NavComponents/Home.jsx";
import SignUp from "./Components/LoginComponents/SignUp.jsx";
import Error from './Components/Error/index.jsx'
import Dashboard from "./Components/Home/Dashboard.jsx";
import { useAuth } from "./contexts/authContext/index.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
export default function appRouter() {

  const { currentUser, userLoggedIn, loading } = useAuth();

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/error" element={<Error />} />
            {userLoggedIn ? (
              <Route path="/home" element={<Dashboard />} />
              ) : (
                <Route path="/home" element={<Navigate to="/error" />} />
                )}
          </Routes>
        </Router>

    </>
  );
}

