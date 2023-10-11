import Button from "./Button";

const Header = () => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <img src="/assets/img/ddroidd_logo.svg"></img>
      <p>Autumn - Winter Bootcamp</p>
      <div className="button-container">
        <Button onClick={handleClick} text="Join us" />
      </div>
    </header>
  );
};

export default Header;
