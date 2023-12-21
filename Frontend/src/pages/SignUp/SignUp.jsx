import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import RegisterForm from "../../containers/RegisterForm/RegisterForm";
import "./SignUp.scss";

function SignUp() {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="signIn">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign Up</h1>
          <RegisterForm />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignUp;
