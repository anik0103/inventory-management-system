import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-700">No user logged in</h2>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-[#bd78b5] mb-4">User Profile</h2>
      <p><span className="font-semibold">ID:</span> {user.id}</p>
      <p><span className="font-semibold">Name:</span> {user.name}</p>
      <p><span className="font-semibold">Role:</span> {user.role}</p>
    </div>
  );
};

export default UserDetails;
