import React, { useEffect,useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button } from "bootstrap";
import '../assets/css/style.css'
import customer01 from '../assets/imgs/customer01.jpg'
import customer02 from '../assets/imgs/customer02.jpg'

import { RiDashboardFill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoIosHome } from "react-icons/io";
import { RiHome6Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { GoSignOut } from "react-icons/go";


export default function Home1() {
      const [rooms,setRooms]=useState([]);
      const [count,setCount]=useState(0);
     

      const{id}=useParams()

      useEffect(() => {
        loadRooms();
      },[]);

      const loadRooms=async () => {
        const result =await axios.get("http://localhost:8080/rooms");
        setRooms(result.data);
      }

      const deleteRoom=async (rid)=>{
        await axios.delete(`http://localhost:8080/room/${rid}`);
        loadRooms()
      }

      const func = () => {
        // let toggle = document.querySelector(".toggle");
        let navigation = document.querySelector(".navigation");
        let main = document.querySelector(".main");
        navigation.classList.toggle("active");
        main.classList.toggle("active");
      }
      const [value, onChange] = useState(new Date());

      // Search Bar/////////////////////////////////////////
  const [searchTerm, setSearchTerm] = useState("");
  //////////////////////////////////////////////////////////

  return (
    <>
    {/* < !-- =============== Navigation ================ --> */}
    <div Class="container100">
    

    {/* <!-- ========================= Main ==================== --> */}
    <div class="main">
      <div class="topbar">
        <div class="toggle">
        <AiOutlineMenuFold onClick={() => {func()}} size='2rem' />
        </div>
   
        <div class="search">
              <label>
                <input type="text" placeholder="Search here...." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
                <i id="eyeIcon" class="fa-regular fa-eye"></i>
              </label>
            </div>

        <div class="user">
          <img src={customer01} alt=""/>
        </div>
      </div>

      {/* <!-- ======================= Cards ================== --> */}
      <div class="cardBox">
        <div class="card">
          <div>
          <div class="numbers">{count}</div>
            <div class="cardName">Daily Views</div>
          </div>

          <div class="iconBx">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
        </div>

        <div class="card">
          <div>
            <div class="numbers">80</div>
            <div class="cardName">Sales</div>
          </div>

          <div class="iconBx">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>

        
      </div>

      {/* <!-- ================ Order Details List ================= --> */}
      <div class="details">
        <div class="recentOrders">
          <div class="cardHeader">
            <h2>Room Summary</h2>
            <Link className="btn" to="/viewrooms">View All</Link>
            
            
          </div>

          <table>
            <thead>
              <tr>
              <th scope="col">#</th>
                    <th scope="col">Room ID</th>
                    <th scope="col">Room Type</th>
                    <th scope="col">Location</th>
                    <th scope="col">Status</th>
                    <th scope="col">Facilities</th>
                    
              </tr>
            </thead>

            <tbody>
            {
        rooms.filter((val) => {
            if(searchTerm == ""){
              return val;
            }else if(val.roomType.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
        }).map((room,index)=>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{room.rid}</td>
            <td>{room.roomType}</td>
            <td>{room.location}</td>
            <td>{room.status}</td>
            <td>{room.facilities}</td>
            
            
            
          </tr>
          
        ))
    }

            </tbody>
          </table>
        </div>

        {/* <!-- ================= Calander ================ --> */}
        <div class="recentCustomers">
          <div class="cardHeader">
            <h2>Calendar</h2>
            </div>
            <Calendar onChange={onChange} value={value} />
    
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
