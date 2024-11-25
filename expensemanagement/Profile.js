import React, { useEffect, useState } from "react";
import axios from "../services/api";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/auth/user")
      .then((response) => setUser(response.data))
      .catch(() => setUser(null));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="text-center">
      <h2>Welcome, {user.displayName}</h2>
      <p>Email: {user.emails[0].value}</p>
    </div>
  );
};

export default Profile;
