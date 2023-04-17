import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import userService from "../services/userService";
import toast from "react-hot-toast";
import Profile from "../views/Profile"

export default function UserEdit() {
  const { isLoggedIn, user, logOutUser, authenticateUser } = useContext(AuthContext);
  const [userEdit, setUserEdit] = useState(null);
  const [,setError] = useState(false);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await userService.getUser(user._id);
      setUserEdit(response);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    if (userEdit) {
      setUserEdit((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
    }
  };

  const handleEdit = async () => {
    try {
      const thisEditedUser = await userService.editUser(user._id, userEdit);

      authenticateUser();
      setUserEdit(thisEditedUser);

      toast.success("Profile saved!");
    } catch (error) {
      setError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleEdit();
    navigate('/')
  };

  return (
    <div>
      <Profile />
      <h2>Edit user:</h2>

      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={userEdit?.username || ""}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userEdit?.email || ""}
          onChange={handleChange}
          required
        />

        <button type="submit">Save profile</button>
      </form>
    </div>
  );
}
