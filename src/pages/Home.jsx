import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const handleClick = () => {
    console.log("it works");
  };
  return (
    <>
      <Header />
      <div className="container page">
        <div className="logo-wrapper">
          <div className="img-container">
            <img src="/assets/img/destructuring.svg" />
          </div>
          <div className="img-container">
            <img src="/assets/img/WebPage_logo.svg" />
          </div>
        </div>
        <div className="button-container align-center">
          <Button onClick={handleClick} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
