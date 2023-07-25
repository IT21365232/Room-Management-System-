import React, { useEffect,useState } from "react";
import axios from "axios";

import { Link } from 'react-router-dom'
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


export default function RoomService() {
      const [customer_rooms,setCustomer_rooms]=useState([]);
      const [rooms,setRooms]=useState([]);

      useEffect(() => {
        loadCustomer_rooms();
        loadRooms();
      },[]);

      const loadCustomer_rooms=async () => {
        const result =await axios.get("http://localhost:8080/customer_rooms");
        setCustomer_rooms(result.data);
      }

      const loadRooms=async () => {
        const result =await axios.get("http://localhost:8080/rooms");
        setRooms(result.data);
      }


      const deleteCustomer_room=async (cid)=>{
        await axios.delete(`http://localhost:8080/customer_room/${cid}`);
        loadCustomer_rooms()
      }

      const func = () => {
        // let toggle = document.querySelector(".toggle");
        let navigation = document.querySelector(".navigation");
        let main = document.querySelector(".main");
        navigation.classList.toggle("active");
        main.classList.toggle("active");
      }

  return (
    <>
    {/* < !-- =============== Navigation ================ --> */}
    <div Class="containe">
    

    {/* <!-- ========================= Main ==================== --> */}
    <div class="main">
      <div class="topbar">
        <div class="toggle">
        <AiOutlineMenuFold onClick={() => {func()}} size='2rem' />
        </div>

        <div class="search">
          <label>
            <input type="text" placeholder="Search here"/>
            {/* <RiDashboardFill size='2rem' /> */}
            <i id="eyeIcon" class="fa-regular fa-eye"></i>
          </label>
        </div>

        <div class="user">
          <img src={customer01} alt=""/>
        </div>
      </div>

      <div class="cardBox">
        <div class="card">
          <div>
            <div class="numbers">1,504</div>
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
      <div class="details1">
        <div class="recentOrders">
          <div class="cardHeader">
            <h2>Room Service Details</h2>
          </div>

          <table>
            <thead>
              <tr>
                    <th scope="col">#</th>
                    <th scope="col">Room No#</th>
                    <th scope="col">Room Type</th>
                    <th scope="col">Customer ID</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Days</th>
                    <th scope="col">Action</th>
                    
                
                    
                    
              </tr>
            </thead>

            <tbody>
            {
        customer_rooms.map((customer_room,index)=>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{customer_room.rid}</td>
            <td>{customer_room.roomType}</td>
            <td>{customer_room.cid}</td>
            <td>{customer_room.cname}</td>
            <td>{customer_room.days}</td>
            
            
            

            
            
          </tr> 
        ))
    }

            </tbody>
          </table>
          
        </div>
        

        {/* <!-- ================= New Customers ================ --> */}
       
      </div>
      
    </div>

    
  </div>
  </>
  )
}
