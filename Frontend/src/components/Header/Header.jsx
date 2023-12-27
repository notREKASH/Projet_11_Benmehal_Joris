import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/argentBankLogo.webp";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../actions/user.action";

function Header() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user?.userData);

  const handleSignOut = () => {
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    dispatch(logoutUser());
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__nav__link">
          <img src={logo} alt="" />
          <h1 className="sr_only">Argent Bank</h1>
        </Link>
        <div>
          {userData ? (
            <Link to="/user" className="header__nav__signin">
              <i className="fa fa-user-circle"></i>
              {userData?.userName}
            </Link>
          ) : (
            <Link to="/sign-in" className="header__nav__signin">
              <i className="fa fa-user-circle"></i>Sign In
            </Link>
          )}

          {userData ? (
            <Link className="header__nav__signin" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>Sign Out
            </Link>
          ) : (
            <Link to="/sign-up" className="header__nav__signin">
              <i className="fa fa-user-circle"></i>Sign Up
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
