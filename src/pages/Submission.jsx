import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Submission = () => {
  const navigate = useNavigate();
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    addressLine1,
    addressLine2,
    country,
    state,
    city,
  } = useSelector((state) => state.formSlice);

  useEffect(() => {
    !firstName && navigate("/");
  }, []);

  return (
    <>
      <Header />
      <div className="container page">
        <h1>Excellent!</h1>
        <h1 className="mb">See you in November 2023!</h1>
        <h2>Submission summary:</h2>
        <ul className="form-values">
          <li>First Name: {firstName}</li>
          <li>Last Name: {lastName}</li>
          <li>Phone Number: {phoneNumber}</li>
          <li>Email: {email}</li>
          <li>Address Line1 : {addressLine1}</li>
          <li>Address Line2 : {addressLine2}</li>
          <li>Country: {country}</li>
          <li>State: {state}</li>
          <li>City: {city}</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Submission;
