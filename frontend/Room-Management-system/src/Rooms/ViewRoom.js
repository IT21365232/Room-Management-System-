import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
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

export default function ViewRooms() {

    const [room,setRoom]=useState({

        rid:"",
        ac:"",
        status:"",
        bedType:"",
        checkStatus:"",
        facilities:"",
        location:"",
        roomType:""

    })

    const{rid}=useParams();

    useEffect(()=>{
    loadroom()
    },[]);

    const loadroom=async()=>{
        const result=await axios.get(`http://localhost:8080/room/${rid}`);
        setRoom(result.data);
    }

    const func = () => {
      // let toggle = document.querySelector(".toggle");
      let navigation = document.querySelector(".navigation");
      let main = document.querySelector(".main");
      navigation.classList.toggle("active");
      main.classList.toggle("active");
    }


  return  (

   <div>
      
    <div className="main">

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
        <div class="container">
            <div class="row ">
            <div class="col">
                
                <div className="container1">
                   <h2 className="text-center m-6">Insert Room Details</h2> 
                    <form >
                   
                   
                   <div className="col-sm-5 ms-3 mb-2" >
                      <label htmlFor="Room No" className="form-lable">
                        Room No
                      </label>
                      <input type="text" className="form-control"  
                      name="rid"
                      value={room.rid}
                      readOnly
                      />
                   </div>

                   <div className="col-sm-5 ms-3 mb-2">
                      <label htmlFor="AC" className="form-lable">
                      A/C
                      </label>
                      <input type="text" className="form-control"  
                      name="ac"
                      value={room.ac}
                      readOnly
                      />
                   </div>


                   <div className="col-sm-5 ms-3 mb-2">
                      <label htmlFor="RoomStatus" className="form-lable">
                      Room Status
                      </label>
                      <input type="text" className="form-control" 
                      name="status"
                      value={room.status}
                      readOnly
                      />
                   </div>

                  

                   <div className="col-sm-5 ms-3 mb-2">
                      <label htmlFor="BedType" className="form-lable">
                      Bed Type
                      </label>
                      <input type="text" className="form-control" 
                      name="bedType"
                      value={room.bedType}
                      readOnly
                      />
                   </div>

                   <div className="col-sm-5 ms-3 mb-2">
                      <label htmlFor="Checking Status" className="form-lable">
                      Checking Status
                      </label>
                      <input type="text" className="form-control" 
                      name="checkStatus"
                      value={room.checkStatus}
                      readOnly
                      />
                   </div>

                   <div className="col-sm-5 ms-3 mb-2" >
                      <label htmlFor="Facilities" className="form-lable">
                        Facilities
                      </label>
                      <input type="text" className="form-control" 
                      name="facilities"
                      value={room.facilities}
                      readOnly
                      />
                   </div>


                   <div className="col-sm-5 ms-3 mb-2" >
                      <label htmlFor="Room Location" className="form-lable">
                        Room Location
                      </label>
                      <input type="text" className="form-control" 
                      name="location"
                      value={room.location}
                      readOnly
                      />
                   </div>

                   <div className="col-sm-5 ms-3 mb-2">
                      <label htmlFor="Room Type" className="form-lable">
                      Room Type
                      </label>
                      <input type="text" className="form-control" 
                      name="roomType"
                      value={room.roomType}
                      readOnly
                      />
                   </div>

                   
                   <Link className="btn btn-primary mb-3 ms-3 mt-3 btn-lg" to={"/"}>Back to Home</Link>

                   </form>

                </div>
                
                </div>
                
             </div>

  </div>
  </div>
  </div>
  );
  
}
