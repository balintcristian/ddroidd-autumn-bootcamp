import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  addressLine1: "",
  addressLine2: "",
  country: "",
  state: "",
  city: "",
};
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setForm: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.phoneNumber = payload.phoneNumber;
      state.email = payload.email;
      state.addressLine1 = payload.addressLine1;
      state.addressLine2 = payload.addressLine2;
      state.country = payload.country;
      state.state = payload.state;
      state.city = payload.country;
    },
  },
});
export const { setForm } = formSlice.actions;
export default formSlice.reducer;
