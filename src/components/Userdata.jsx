import React from "react";

const Usersdata = ({ userDetails, deleteUser, editUser }) => {
  return (
    <div className="mt-4">
      <table className="table w-50 mx-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center text-muted">
                No Users Found
              </td>
            </tr>
          ) : (
            userDetails.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => deleteUser(index)}
                  >
                    Delete
                  </button>

                  <button
                    className="btn btn-warning"
                    onClick={() => editUser(index)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Usersdata;
