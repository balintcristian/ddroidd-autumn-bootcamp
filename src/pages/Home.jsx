import Button from "../components/Button";

const Home = () => {
  const handleClick = () => {
    console.log("it works");
  };
  return (
    <div className="container page">
      <div className="logo-wrapper">
        <div className="img-container">
          <img src="/assets/img/destructuring.svg" />
        </div>
        <div className="img-container">
          <img src="/assets/img/WebPage_logo.svg" />
        </div>
      </div>
      <div className="button-container">
        <Button onClick={handleClick} />
      </div>
    </div>
  );
};

export default Home;
