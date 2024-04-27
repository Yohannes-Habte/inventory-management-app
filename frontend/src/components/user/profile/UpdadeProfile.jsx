import React, { useState } from "react";
import "./UpdadeProfile.scss";
import { Link } from "react-router-dom";
import ReactIcons from "../../reactIcons/ReactIcons";
import axios from "axios";

const initialState = {
  firstName: "",
  lastName: "",
  gender: "",
  birthDate: "",
  profession: "",
  language: "",
  phoneNumber: "",
};
const UpdadeProfile = () => {
  // Global react icons
  const { userIcon, uploadIcon, dateIcon, languageIcon, phoneIcon } =
    ReactIcons();

  // Local State variables
  const [userInfos, setUserInfos] = useState(initialState);
  const [image, setImage] = useState("");
  const [agree, setAgree] = useState(false);

  // Destructurng user infos variables
  const {
    firstName,
    lastName,
    gender,
    birthDate,
    profession,
    language,
    phoneNumber,
  } = userInfos;

  // Update image
  const updateImage = (e) => {
    setImage(e.target.files[0]);
  };

  // Update input Change
  const updateChange = (e) => {
    const { name, value } = e.target;

    setUserInfos({ ...userInfos, [name]: value });
  };

  // Reste state variables into initial state
  const reset = () => {
    setUserInfos({
      firstName: "",
      lastName: "",
      gender: "",
      birthDate: "",
      profession: "",
      language: "",
      phoneNumber: "",
    });
    setAgree(false);
  };

  // Handle submit to update user account
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Image validation

      const updateUserInfo = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        birthDate: birthDate,
        profession: profession,
        language: language,
        phoneNumber: phoneNumber,
        agree: agree,
      };

      const { data } = await axios.put(`/auth/update`, updateUserInfo);

      reset();
    } catch (error) {}
  };
  return (
    <article className="user-profile-container">
      <section className="update-user-profile-wrapper">
        <h2 className="update-user-profile-title">Update Your Profile</h2>

        <aside className="update_user-image-container">
          <img
            className="update-user-image"
            src={"https://i.ibb.co/4pDNDk1/avatar.png"}
            alt={"User"}
          />
          <h5 className="logged-in-user">User Name</h5>
        </aside>

        <fieldset className="update-user-profile-fieldset">
          <legend className="update-user-profile-legend "> User Profile</legend>
          <form onSubmit={handleSubmit} className="update-user-profile-form">
            <div className="inputs-container">
              {/* First Name */}
              <div className="input-container">
                <span className="icon"> {userIcon} </span>
                <input
                  type="text"
                  name={"firstName"}
                  id={"firstName"}
                  autoComplete="name"
                  required
                  value={firstName}
                  onChange={updateChange}
                  placeholder="Enter First Name"
                  className="input-field"
                />

                <label htmlFor={"firstName"} className="input-label">
                  First Name
                </label>
                <span className="input-highlight"></span>
              </div>

              {/* Last Name */}
              <div className="input-container">
                <span className="icon"> {userIcon} </span>
                <input
                  type="text"
                  name={"lastName"}
                  id={"lastName"}
                  autoComplete="lastName"
                  required
                  value={lastName}
                  onChange={updateChange}
                  placeholder="Enter Last Name"
                  className="input-field"
                />

                <label htmlFor={"lastName"} className="input-label">
                  Last Name
                </label>
                <span className="input-highlight"></span>
              </div>

              {/* User Image */}
              <div className="input-container">
                <span className="icon"> {uploadIcon} </span>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={updateImage}
                  className="input-field"
                />
              </div>

              {/* Gender */}
              <div className="input-container">
                <span className="icon"> {userIcon} </span>
                <select
                  name="gender"
                  id="gender"
                  onChange={updateChange}
                  value={gender}
                  className="input-field"
                >
                  <option value="default">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>{" "}
              </div>

              {/* Birth Date */}
              <div className="input-container">
                <span className="icon"> {userIcon} </span>
                <input
                  type="date"
                  name={"birthDate"}
                  id={"birthDate"}
                  autoComplete="birthDate"
                  value={birthDate}
                  onChange={updateChange}
                  placeholder="Enter Birth Date"
                  className="input-field"
                />

                <label htmlFor={"birthDate"} className="input-label">
                  Birth Date
                </label>
                <span className="input-highlight"></span>
              </div>

              {/* Profession */}
              <div className="input-container">
                <span className="icon"> {userIcon} </span>
                <input
                  type="text"
                  name={"profession"}
                  id={"profession"}
                  autoComplete="profession"
                  value={profession}
                  onChange={updateChange}
                  placeholder="Enter Birth Date"
                  className="input-field"
                />

                <label htmlFor={"profession"} className="input-label">
                  Profession
                </label>
                <span className="input-highlight"></span>
              </div>

              {/* language */}
              <div className="input-container">
                <span className="icon"> {userIcon} </span>
                <select
                  name="language"
                  id="language"
                  onChange={updateChange}
                  value={language}
                  className="input-field"
                >
                  <option value="default">Select Language</option>
                  <option value="english">English</option>
                  <option value="german">German</option>
                  <option value="tigrigna">Tigrigna</option>
                </select>
              </div>

              {/* Phone Number */}
              <div className="input-container">
                <span className="icon"> {userIcon} </span>
                <input
                  type="text"
                  name={"phoneNumber"}
                  id={"phoneNumber"}
                  autoComplete="phoneNumber"
                  value={phoneNumber}
                  onChange={updateChange}
                  placeholder="Enter Phone Number"
                  className="input-field"
                />

                <label htmlFor={"profession"} className="input-label">
                  Phone Number
                </label>
                <span className="input-highlight"></span>
              </div>
            </div>

            {/* Consent */}
            <div className="input-consent">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="consent-checkbox"
              />
              <label htmlFor="agree" className="accept">
                I accept
              </label>

              <Link className={"terms-of-user"}> Terms of Use</Link>
            </div>

            <button type="submit" className="update-user-profile-btn">
              Update
            </button>
          </form>
        </fieldset>
      </section>
    </article>
  );
};

export default UpdadeProfile;
