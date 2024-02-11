import React, { useState, useEffect } from "react";

function UserTable() {
    const [userData, setUserData]=useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => {
            const sortedUserData = data.sort((a, b) => a.id - b.id);
            setUserData(sortedUserData);
          })
          .catch(error => console.error('Error fetching user data:', error));
      }, []);
      return(
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {userData.map(user=>(
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}

export default UserTable;
