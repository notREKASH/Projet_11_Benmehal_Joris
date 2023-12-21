import { useNavigate } from "react-router-dom";
import { getToken } from "../../actions/auth.action";
import "./ConnectionForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function ConnectionForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.auth?.token);
  const isAuth = useSelector((state) => state?.auth?.isAuth);

  const handleForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    dispatch(getToken(email, password));
    e.target.reset();
  };

  useEffect(() => {
    if (isAuth && token) {
      sessionStorage.setItem("token", token);
      navigate("/user");
    }
  }, [isAuth, token, navigate]);

  return (
    <form className="form" onSubmit={(e) => handleForm(e)}>
      <div className="form__wrapper">
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form__wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="form__remember">
        <input type="checkbox" id="remember-me" name="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="form--submitBtn" type="submit">
        Sign In
      </button>
    </form>
  );
}

export default ConnectionForm;
