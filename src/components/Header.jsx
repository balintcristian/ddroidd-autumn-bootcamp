import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const handleClick = () => {
    navigate("/form");
  };
  return (
    <header className="header">
      <img src="/assets/img/ddroidd_logo.svg"></img>
      <p>Autumn - Winter Bootcamp</p>
      <div className="button-container">
        {pathname == "/" && <Button onClick={handleClick} text="Join us" />}
      </div>
    </header>
  );
};

export default Header;
