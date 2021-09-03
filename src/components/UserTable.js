import React from "react";

function UserTable({ users }) {
  const rows = Object.values(users).map((user, index) => (
    <tr key={index}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.salary}</td>
    </tr>
  ));

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}
export default UserTable;
