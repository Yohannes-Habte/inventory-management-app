import React, { useState } from "react";
import "./AddAddress.scss";
import { toast } from "react-toastify";
import axios from "axios";
import { Country, State, City } from "country-state-city";
import ReactIcons from "../../reactIcons/ReactIcons";

const initialState = {
  addressType: "",
  street: "",
  zipCode: "",
  city: "",
  state: "",
  country: "",
  phoneNumber: "",
};

const AddAddress = ({ setOpenAddAddress }) => {
  // Global icons
  const { closeIcon, addressIcon, zipCodeIcon, phoneIcon, websiteIcon } =
    ReactIcons();

  // Local state variables
  const [addressInfos, setAddressInfos] = useState(initialState);
  const [agree, setAgree] = useState(false);

  // Destructure address variables
  const { addressType, street, zipCode, city, state, country, phoneNumber } =
    addressInfos;

  // Handle change
  const updateChange = (e) => {
    const { name, value } = e.target;
    setAddressInfos({ ...addressInfos, [name]: value });
  };

  // Reset
  const reset = () => {
    setAddressInfos({
      addressType: "",
      street: "",
      zipCode: "",
      city: "",
      state: "",
      country: "",
      phoneNumber: "",
    });
    setAgree(false);
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        addressType === "" ||
        country === "" ||
        state === "" ||
        city === "" ||
        street === "" ||
        zipCode === ""
      ) {
        toast.error("Please fill all the fields!");
      } else {
        const newAddress = {
          country: country,
          state: state,
          city: city,
          street: street,
          zipCode: zipCode,
          addressType: addressType,
          phoneNumber: phoneNumber,
        };

        const { data } = await axios.put(`/update-address`, newAddress);

        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="user-addresses-modal">
      <section className="new-user-address-popup-Box">
        <h4 className="user-address-popup-title">Add Your Current Address</h4>
        <span
          className="address-close-icon"
          onClick={() => setOpenAddAddress(false)}
        >
          {closeIcon}{" "}
        </span>

        <form onSubmit={handleSubmit} action="" className="user-addresses-form">
          {/* Choose Country using select */}
          <div className="select-container">
            <div className="select-label-wrapper">
              <label htmlFor={"country"} className="select-label">
                Country:
              </label>
              <select
                name="country"
                id="country"
                value={country}
                onChange={updateChange}
                className="select-options"
              >
                <option value=""> Choose your country </option>
                {Country &&
                  Country.getAllCountries().map((country) => (
                    <option
                      className="option"
                      key={country.isoCode}
                      value={country.isoCode}
                    >
                      {country.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Choose State using select */}
          <div className="select-container">
            <div className="select-label-wrapper">
              <label htmlFor={"state"} className="select-label">
                State:
              </label>
              <select
                name="state"
                id="state"
                value={state}
                onChange={updateChange}
                className="select-options"
              >
                <option value=""> Choose your state </option>
                {State &&
                  State.getStatesOfCountry(country).map((state) => (
                    <option
                      className="option"
                      key={state.isoCode}
                      value={state.isoCode}
                    >
                      {state.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Choose City using select */}
          <div className="select-container">
            <div className="select-label-wrapper">
              <label htmlFor={"city"} className="select-label">
                City:
              </label>
              <select
                name="city"
                id="city"
                value={city}
                onChange={updateChange}
                className="select-options"
              >
                <option value=""> Choose your city </option>
                {City &&
                  City.getCitiesOfCountry(country).map((city) => (
                    <option
                      className="option"
                      key={city.isoCode}
                      value={city.isoCode}
                    >
                      {city.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Address type using select */}
          <div className="select-container">
            <div className="select-label-wrapper">
              <label htmlFor={"addressType"} className="select-label">
                Address Type:
              </label>
              <select
                name="addressType"
                id="addressType"
                value={addressType}
                onChange={updateChange}
                className="select-options"
              >
                <option value=""> Choose Address Type </option>
              </select>
            </div>
          </div>

          {/* Street */}
          <div className="input-container">
            <span className="icon"> {addressIcon} </span>

            <input
              type="text"
              name={"street"}
              id={"street"}
              autoComplete="street"
              value={street}
              onChange={updateChange}
              placeholder="Street Name"
              className="input-field"
            />

            <label htmlFor={"street"} className="input-label">
              Street Name
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Zip Code */}
          <div className="input-container">
            <span className="icon"> {zipCodeIcon} </span>
            <input
              type="number"
              name={"zipCode"}
              id={"zipCode"}
              autoComplete="zipCode"
              value={zipCode}
              onChange={updateChange}
              placeholder="Enter Zip Code"
              className="input-field"
            />

            <label htmlFor={"zipCode"} className="input-label">
              Zip Code
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Phone Number */}
          <div className="input-container">
            <span className="icon"> {phoneIcon} </span>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              autoComplete="phoneNumber"
              value={phoneNumber}
              onChange={updateChange}
              placeholder="Enter Phone Number"
              className="input-field"
            />
            <label htmlFor="phoneNumber" className="input-label">
              Phone Number
            </label>
            <span className="input-highlight"></span>
          </div>

          <button className="user-address-btn">Submit</button>
        </form>
      </section>
    </section>
  );
};

export default AddAddress;
