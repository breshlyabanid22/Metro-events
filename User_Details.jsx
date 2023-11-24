import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const User_Details = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend when the component mounts
    axios.get('http://localhost:8081/admin/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  const acceptRequest = (userId) => {
    // Implement the logic to accept the user's request (you may need an endpoint on the backend)
    // Example:
    axios.post(`http://localhost:8081/admin/acceptRequest/${userId}`)
      .then(res => {
        // Handle the response (update state, show a message, etc.)
        console.log(res.data);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="content-container">
      <h1>User Details</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr className='table100-head'>
              <th className='column1'>User ID</th>  
              <th>User Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className='column1'>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <button onClick={() => acceptRequest(user.id)}>
                    Accept Request
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User_Details;
