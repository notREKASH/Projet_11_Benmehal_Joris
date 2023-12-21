import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ConnectionForm from "../../containers/ConnectionForm/ConnectionForm";
import "./SignIn.scss";

function SignIn() {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="signIn">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <ConnectionForm />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
