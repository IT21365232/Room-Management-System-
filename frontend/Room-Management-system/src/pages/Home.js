import React, { useEffect,useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Button } from "bootstrap";
export default function Home() {
      const [users,setUsers]=useState([]);

      const{id}=useParams()

      useEffect(() => {
        loadUsers();
      },[]);

      const loadUsers=async () => {
        const result =await axios.get("http://localhost:8080/users");
        setUsers(result.data);
      }

      const deleteUser=async (rid)=>{
        await axios.delete(`http://localhost:8080/user/${rid}`);
        loadUsers()
      }

  return (
    <div className="main">
        <div class="topbar">
                <div class="toggle">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

            </div>
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Room ID</th>
      <th scope="col">Room Type</th>
      <th scope="col">Location</th>
      <th scope="col">Status</th>
      <th scope="col">Facilities</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{user.rid}</td>
            <td>{user.roomType}</td>
            <td>{user.location}</td>
            <td>{user.status}</td>
            <td>{user.facilities}</td>
            <td>
                 <Link className="btn btn-success mx-2" 
                 to={`/editroom/${user.rid}`}>Edit</Link>

                 <Link
                    className="btn btn-primary mx-2"
                    to={`/viewroom/${user.rid}`}
                  >
                    View
                  </Link>

                  <Link className="btn btn-outline-light" 
                  to="/addroom">Add Room</Link>

                 <button type="button" class="btn btn-danger mx-2"
                 onClick={()=>deleteUser(user.rid)}>
                  Delete</button>
            </td>
          </tr> 
        ))
    }
    
  </tbody>
</table>
        </div>
    </div>
    </div>
  )
}
