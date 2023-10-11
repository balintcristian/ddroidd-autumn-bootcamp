import { useForm, useWatch } from "react-hook-form";
import Button from "../components/Button";
import { useEffect, useState } from "react";

const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [countries, setCountries] = useState([]);
  const selectedCountry = useWatch({ control, name: "country" });
  const [states, setStates] = useState([]);
  const selectedState = useWatch({ control, name: "state" });
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/positions"
      );
      const newData = await response.json();
      setCountries(newData.data.map((country) => country.name));
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ country: selectedCountry }),
        }
      );
      const newData = await response.json();
      setStates(newData.data.states.map((state) => state.name));
    };

    fetchData();
  }, [selectedCountry]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/state/cities",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            country: selectedCountry,
            state: selectedState,
          }),
        }
      );
      const newData = await response.json();
      setCities(newData.data);
    };

    fetchData();
  }, [selectedState]);

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container page">
      <h1>Application Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Contact Information</h2>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="flex mb">
          <div className="input-wrapper">
            <label htmlFor="firstName">
              First Name <span>*</span>
            </label>
            <input
              className="error"
              placeholder="First name"
              id="firstName"
              {...register("firstName")}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="lastName">
              Last Name<span>*</span>
            </label>
            <input
              placeholder="Last name"
              id="lastName"
              {...register("lastName")}
            />
          </div>
        </div>
        <div className="flex mb">
          <div className="input-wrapper">
            <label htmlFor="phoneNumber">
              Phone number<span>*</span>
            </label>
            <input
              placeholder="+40 711 111 111"
              id="phoneNumber"
              {...register("phoneNumber")}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="email">
              Email address<span>*</span>
            </label>
            <input
              placeholder="john@doe.com"
              id="email"
              {...register("email")}
            />
          </div>
        </div>
        <h2>Address</h2>
        <div className="input-wrapper mb">
          <label htmlFor="addressLine1">
            First Name <span>*</span>
          </label>
          <input
            placeholder="Addres Line 1"
            id="addressLine1"
            {...register("addressLine1")}
          />
        </div>
        <div className="input-wrapper mb">
          <label htmlFor="addressLine2">
            First Name <span>*</span>
          </label>
          <input
            placeholder="Addres Line 2"
            id="addressLine2"
            {...register("addressLine2")}
          />
        </div>

        <div className="flex mb">
          <div className="input-wrapper">
            <label htmlFor="country">
              Country<span>*</span>
            </label>
            <select {...register("country")} id="country">
              {countries &&
                countries.map((country, idx) => (
                  <option key={idx} value={country}>
                    {country}
                  </option>
                ))}
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="state">State</label>
            <select {...register("state")} id="state">
              {states &&
                states.map((state, idx) => (
                  <option key={idx} value={state}>
                    {state}
                  </option>
                ))}
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="city">
              City<span>*</span>
            </label>
            <select {...register("city")} id="city">
              {cities &&
                cities.map((city, idx) => (
                  <option key={idx} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="button-container">
          <div className="errors">
            <p>Please fix the following errors to proceed:</p>
            <ul>
              <li>First name is required</li>
              <li>Last name is required</li>
              <li>Wrong phone number format</li>
              {/* <li>Email is required</li>
              <li>Address is required</li> */}
              <li>City is required</li>
            </ul>
          </div>
          <Button type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
