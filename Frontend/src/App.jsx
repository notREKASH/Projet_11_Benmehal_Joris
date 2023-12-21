import "./App.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/User/User";
import SignUp from "./pages/SignUp/SignUp";
import { useSelector } from "react-redux";

function VerifyToken() {
  const isAuth = useSelector((state) => state?.auth?.isAuth);

  if (isAuth) {
    return <Outlet />;
  }

  return <Navigate to={"/"} />;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<VerifyToken />}>
          <Route path="/user" element={<User />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
