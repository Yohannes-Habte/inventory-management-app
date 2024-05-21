import React, { useState } from "react";
import "./UpdateProfile.scss";
import { Link, useNavigate } from "react-router-dom";
import ReactIcons from "../../reactIcons/ReactIcons";
import axios from "axios";
import UserAddresses from "../addresses/UserAddresses";
import ChangePassword from "../changePassword/ChangePassword";
import UserOrders from "../orders/UserOrders";
import TrackOrder from "../trackOrder/TrackOrder";
import { useDispatch, useSelector } from "react-redux";
import * as UpdateAction from "../../../redux/reducers/userReducer";
import {
  API,
  cloud_URL,
  cloud_name,
  upload_preset,
} from "../../utils/security/secreteKey";
import { toast } from "react-toastify";

const initialState = {
  firstName: "",
  lastName: "",
  gender: "",
  birthDate: "",
  profession: "",
  language: "",
  phoneNumber: "",
};
const UpdateProfile = ({ isActive }) => {
  const navigate = useNavigate();
  // Global state variables
  const { u_updateLoading, currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Global react icons
  const {
    userIcon,
    uploadIcon,
    dateIcon,
    languageIcon,
    phoneIcon,
    professionIcon,
  } = ReactIcons();

  // Local State variables
  const [updateUserInfos, setUpdateUserInfos] = useState({
    firstName: currentUser?.firstName || "",
    lastName: currentUser?.lastName || "",
    gender: currentUser?.gender || "",
    birthDate: currentUser?.birthDate || "",
    profession: currentUser?.profession || "",
    language: currentUser?.language || "",
    phoneNumber: currentUser?.phoneNumber || "",
  });
  const [image, setImage] = useState("");
  const [agree, setAgree] = useState(false);

  // Destructuring user infos variables
  const {
    firstName,
    lastName,
    gender,
    birthDate,
    profession,
    language,
    phoneNumber,
  } = updateUserInfos;

  // Update image
  const updateImage = (e) => {
    setImage(e.target.files[0]);
  };

  // Update input Change
  const updateChange = (e) => {
    const { name, value } = e.target;

    setUpdateUserInfos((pre) => {
      return { ...pre, [name]: value };
    });
  };

  // Reset state variables into initial state
  const reset = () => {
    setUpdateUserInfos({
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
      dispatch(UpdateAction.userUpdateStart());
      // Image validation
      const userPhoto = new FormData();
      userPhoto.append("file", image);
      userPhoto.append("cloud_name", cloud_name);
      userPhoto.append("upload_preset", upload_preset);

      // Save image to cloudinary
      const response = await axios.post(cloud_URL, userPhoto);
      const { url } = response.data;

      const updateUserInfo = {
        firstName: firstName,
        lastName: lastName,
        image: url,
        gender: gender,
        birthDate: birthDate,
        profession: profession,
        language: language,
        phoneNumber: phoneNumber,
        agree: agree,
      };

      const { data } = await axios.put(
        `${API}/auths/${currentUser._id}/update`,
        updateUserInfo
      );

      dispatch(UpdateAction.userUpdateSuccess(data.user));
      toast.success(data.message);

      reset();
    } catch (err) {
      dispatch(
        UpdateAction.userUpdateFailure(toast.error(err.response.data.message))
      );
    }
  };
  return (
    <article className="user-profile-container">
      {isActive === 1 && (
        <section className="update-user-profile-wrapper">
          <h2 className="update-user-profile-title">Update Your Profile</h2>

          <aside className="update_user-image-container">
            <img
              className="update-user-image"
              src={"https://i.ibb.co/4pDNDk1/avatar.png"}
              alt={"User"}
            />
            <h5 className="logged-in-user">
              {currentUser ? currentUser.firstName : "User Name"}
            </h5>
          </aside>

          <fieldset className="update-user-profile-fieldset">
            <legend className="update-user-profile-legend ">
              User Profile
            </legend>
            <form onSubmit={handleSubmit} className="update-user-profile-form">
              <div className="inputs-container">
                {/* First Name */}
                <div className="input-container">
                  <span className="icon"> {userIcon} </span>
                  <input
                    type="text"
                    name={"firstName"}
                    id={"firstName"}
                    autoComplete="firstName"
                    value={firstName}
                    onChange={updateChange}
                    placeholder="First Name"
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
                    value={lastName}
                    onChange={updateChange}
                    placeholder="Last Name"
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
                  <span className="icon"> {dateIcon} </span>
                  <input
                    type="date"
                    name={"birthDate"}
                    id={"birthDate"}
                    value={birthDate}
                    onChange={updateChange}
                    placeholder="Birth Date"
                    className="input-field"
                  />

                  <label htmlFor={"birthDate"} className="input-label">
                    Birth Date
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/* Profession */}
                <div className="input-container">
                  <span className="icon"> {professionIcon} </span>
                  <input
                    type="text"
                    name={"profession"}
                    id={"profession"}
                    autoComplete="profession"
                    value={profession}
                    onChange={updateChange}
                    placeholder="Profession"
                    className="input-field"
                  />

                  <label htmlFor={"profession"} className="input-label">
                    Profession
                  </label>
                  <span className="input-highlight"></span>
                </div>

                {/* language */}
                <div className="input-container">
                  <span className="icon"> {languageIcon} </span>
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
                  <span className="icon"> {phoneIcon} </span>
                  <input
                    type="text"
                    name={"phoneNumber"}
                    id={"phoneNumber"}
                    autoComplete="phoneNumber"
                    value={phoneNumber}
                    onChange={updateChange}
                    placeholder="Phone Number"
                    className="input-field"
                  />

                  <label htmlFor={"phoneNumber"} className="input-label">
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
      )}

      {isActive === 2 && <UserAddresses />}

      {isActive === 3 && <ChangePassword />}

      {isActive === 4 && <UserOrders />}

      {isActive === 5 && <TrackOrder />}
    </article>
  );
};

export default UpdateProfile;
