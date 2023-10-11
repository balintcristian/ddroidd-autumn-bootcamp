const Button = ({ onClick, text = "Join us", type = "button" }) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
