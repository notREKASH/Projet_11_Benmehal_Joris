import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TransactionList from "../../containers/TransactionList/TransactionList";
import "./User.scss";
import EditName from "../../containers/EditName/EditName";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUser } from "../../actions/user.action";

function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const token = sessionStorage.getItem("token");
  const userData = useSelector((state) => state?.user?.userData);

  useEffect(() => {
    if (!userData && token) {
      dispatch(getUser(token));
    }

    setIsEditing(false);
  }, [token, userData, dispatch, navigate]);

  return (
    <>
      <Header />
      <main className="main bg-dark user">
        {isEditing ? (
          ""
        ) : (
          <h1>
            Welcome back <br /> {userData?.firstName} {userData?.lastName}!
          </h1>
        )}
        <EditName setIsEditing={setIsEditing} />
        <TransactionList />
      </main>
      <Footer />
    </>
  );
}

export default User;
