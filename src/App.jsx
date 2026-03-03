import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";

import Usersdata from "./components/Userdata.jsx";
import Usersfiled from "./components/Usersfiled.jsx";

const App = () => {
  // ✅ Load data from localStorage on first load
  const [users, setusers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  // ✅ Save to localStorage whenever users change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // ✅ Add or Update user
  const registerUser = (data) => {
    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = data;
      setusers(updatedUsers);
      setEditIndex(null);
    } else {
      setusers([...users, data]);
    }
  };

  // ✅ Delete user safely
  const deleteUser = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      const filteredUsers = users.filter((_, i) => i !== index);
      setusers(filteredUsers);
    }
  };

  const editUser = (index) => {
    setEditIndex(index);
  };

  return (
    <div>
      <h2 className="text-center mt-3">Register User Data</h2>

      <Usersfiled register={registerUser} editIndex={editIndex} users={users} />

      <Usersdata
        userDetails={users}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    </div>
  );
};

export default App;
