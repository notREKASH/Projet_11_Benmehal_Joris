import "./EditName.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../actions/user.action";

function EditName({ setIsEditing }) {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();

  const userData = useSelector((state) => state?.user?.userData);
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");

  const handleClick = () => {
    setIsClicked(true);
    setIsEditing(true);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsClicked(false);
    setIsEditing(false);
  };

  const handleChange = async (e) => {
    e.preventDefault();
    setIsClicked(false);
    setIsEditing(false);

    const username = e.target.username.value;

    dispatch(updateUser(token, username));
  };

  if (isClicked) {
    return (
      <>
        <h1>Edit user info</h1>
        <form className="editNameForm" onSubmit={handleChange}>
          <div className="editNameForm__container">
            <label htmlFor="username">User name:</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder={userData?.userName}
            />
          </div>
          <div className="editNameForm__container">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder={userData?.firstName}
              disabled
            />
          </div>
          <div className="editNameForm__container">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder={userData?.lastName}
              disabled
            />
          </div>
          <div className="editNameForm__buttons">
            <button className="editBtn">Save</button>
            <button className="editBtn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </>
    );
  }

  return (
    <>
      <button className="editBtn" onClick={handleClick}>
        Edit Name
      </button>
    </>
  );
}

EditName.propTypes = {
  setIsEditing: PropTypes.func.isRequired,
};

export default EditName;
