import axios from 'axios';
import React, { useEffect, useState } from 'react';

const User = () => {
    const[user,setUser]=useState([]);
    useEffect(()=>
        {
            fetchData()
        },[])
        const fetchData=async()=>
            {
                await axios.get('https://664de36bede9a2b5565552d2.mockapi.io/api/Users')
                .then(res=>setUser(res.data))
                .catch((error)=>console.log(error));
            }
    return (
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
        </div>
    );
};

export default User;