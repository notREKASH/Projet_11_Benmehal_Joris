import "./RegisterForm.scss";
import { useDispatch } from "react-redux";
import { addUser } from "../../actions/user.action";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const userName = e.target.userName.value;

    dispatch(addUser(email, password, firstName, lastName, userName));
    e.target.reset();
    navigate("/sign-in");
  };
  return (
    <>
      <form className="form" onSubmit={(e) => handleForm(e)}>
        <div className="form__wrapper">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form__wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form__wrapper">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className="form__wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className="form__wrapper">
          <label htmlFor="userName">User Name</label>
          <input type="text" id="userName" name="userName" />
        </div>
        <button className="form--submitBtn" type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
}

export default RegisterForm;
