import { useForm } from "react-hook-form";
import Button from "../components/Button";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
            <select name="country" id="country" defaultValue="romania">
              <option value="romania">Romania</option>
              <option value="romania">Romania</option>
              <option value="romania">Romania</option>
              <option value="romania">Romania</option>
            </select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>
          </div>
          <div className="input-wrapper">
            <label htmlFor="city">
              City<span>*</span>
            </label>
            <select name="city" id="city"></select>
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
