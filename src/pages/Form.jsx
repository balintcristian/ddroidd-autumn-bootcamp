import { useForm, useWatch } from "react-hook-form";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setForm } from "../features/form/formSlice";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Form = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      addressLine1: "",
      addressLine2: "",
      country: "",
      state: "",
      city: "",
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [countries, setCountries] = useState([""]);
  const selectedCountry = useWatch({ control, name: "country" });
  const [states, setStates] = useState([""]);
  const selectedState = useWatch({ control, name: "state" });
  const [cities, setCities] = useState([""]);
  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/positions"
      );
      const newData = await response.json();
      setCountries(newData?.data?.map((country) => country.name));
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
      setStates(newData?.data?.states?.map((state) => state.name));
    };

    selectedCountry && fetchData();
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

    selectedCountry && selectedState && fetchData();
  }, [selectedState]);
  const onSubmit = (data) => {
    dispatch(setForm(data));
    navigate("/submission");
  };
  useEffect(() => {
    if (
      errors.firstName ||
      errors.lastName ||
      errors.phoneNumber ||
      errors.email ||
      errors.addressLine1 ||
      errors.addressLine2 ||
      errors.country ||
      errors.state ||
      errors.city
    )
      setIsValidForm(false);
    else setIsValidForm(true);
  }, [errors]);

  return (
    <>
      <Header />
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
                className={
                  errors.firstName &&
                  errors.firstName.type === "required" &&
                  "error"
                }
                placeholder="First name"
                id="firstName"
                {...register("firstName", { required: true }, { unique: true })}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="lastName">
                Last Name<span>*</span>
              </label>
              <input
                className={
                  errors.lastName &&
                  errors.lastName.type === "required" &&
                  "error"
                }
                placeholder="Last name"
                id="lastName"
                {...register("lastName", { required: true }, { unique: true })}
              />
            </div>
          </div>
          <div className="flex mb">
            <div className="input-wrapper">
              <label htmlFor="phoneNumber">
                Phone number<span>*</span>
              </label>
              <input
                className={
                  errors.phoneNumber &&
                  errors.phoneNumber.type === "required" &&
                  "error"
                }
                placeholder="+40 711 111 111"
                id="phoneNumber"
                {...register(
                  "phoneNumber",
                  { required: true },
                  { unique: true }
                )}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="email">
                Email address<span>*</span>
              </label>
              <input
                className={
                  errors.email && errors.email.type === "required" && "error"
                }
                placeholder="john@doe.com"
                id="email"
                {...register("email", { required: true }, { unique: true })}
              />
            </div>
          </div>
          <h2>Address</h2>
          <div className="input-wrapper mb">
            <label htmlFor="addressLine1">
              Address Line 1<span>*</span>
            </label>
            <input
              className={
                errors.addressLine1 &&
                errors.addressLine1.type === "required" &&
                "error"
              }
              placeholder="Addres Line 1"
              id="addressLine1"
              {...register("addressLine1", { required: true })}
            />
          </div>
          <div className="input-wrapper mb">
            <label htmlFor="addressLine2">Address Line 2</label>
            <input
              className={
                errors.addressLine2 &&
                errors.addressLine2.type === "required" &&
                "error"
              }
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
              <select
                className={
                  errors.country &&
                  errors.country.type === "required" &&
                  "error"
                }
                {...register("country", { required: true })}
                id="country"
                defaultValue=""
              >
                <option key="0" value="" hidden>
                  Country
                </option>
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
              <select
                className={
                  errors.state && errors.state.type === "required" && "error"
                }
                {...register("state")}
                id="state"
                defaultValue=""
              >
                <option key="0" value="" hidden>
                  State
                </option>
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
              <select
                className={
                  errors.city && errors.city.type === "required" && "error"
                }
                {...register("city", { required: true })}
                id="city"
                defaultValue=""
              >
                <option key="0" value="" hidden>
                  City
                </option>
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
              {!isValidForm && (
                <p>Please fix the following errors to proceed:</p>
              )}
              <ul className="form-list">
                {errors.firstName && errors.firstName.type === "required" && (
                  <li>First Name is required</li>
                )}

                {errors.lastName && errors.lastName.type === "required" && (
                  <li>Last Name is required</li>
                )}

                {errors.phoneNumber &&
                  errors.phoneNumber.type === "required" && (
                    <li>Phone Number is required</li>
                  )}

                {errors.email && errors.email.type === "required" && (
                  <li>Email is required</li>
                )}

                {errors.addressLine1 &&
                  errors.addressLine1.type === "required" && (
                    <li>Address Line 1 is required</li>
                  )}

                {errors.addressLine2 &&
                  errors.addressLine2.type === "required" && (
                    <li>Address Line 2 is required</li>
                  )}

                {errors.country && errors.country.type === "required" && (
                  <li>Country is required</li>
                )}

                {errors.state && errors.state.type === "required" && (
                  <li>State is required</li>
                )}

                {errors.city && errors.city.type === "required" && (
                  <li>City is required</li>
                )}
              </ul>
            </div>
            <Button type="submit" />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Form;
