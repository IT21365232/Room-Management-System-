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


export default function EditRoom() {

       let navigate=useNavigate();

       const {rid} = useParams();
       const [rooms,setRooms]=useState([]);

       const [room,setRoom]=useState({
        rid:"",
        ac:"",
        status:"",
        bedType:"",
        checkStatus:"",
        facilities:"",
        location:"",
        roomType:"",
        servieType:""
        

       })

       const{ac,status,bedType,checkStatus,facilities,location,roomType,serviceType}=room;

       const onInputChange=(e)=>{
        setRoom({...room,[e.target.name]:e.target.value});
       };

       useEffect(()=>{
         loadroom();
         loadRooms();
       },[])

       const onSubmit=async (e)=>{
           e.preventDefault();
           await axios.put(`http://localhost:8080/room/${rid}`,room)
           navigate("/viewrooms");
       };

       const loadroom = async()=>{
         const result=await axios.get(`http://localhost:8080/room/${rid}`)
         setRoom(result.data)
       }

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
                   <h2 className="text-center m-6">Edit Room Details</h2> 
                    <form onSubmit={(e)=>onSubmit(e)}>
                   
                   
                   <div className="col-sm-5 ms-3 mb-2" >
                      <label htmlFor="Room No" className="form-lable">
                        Room No
                      </label>
                      <input type="text" className="form-control" placeholder="Enter Room Number" 
                      name="rid"
                      value={rid}
                      onChange={(e)=>onInputChange(e)}
                      />
                   </div>

                   <div className="col-sm-5 ms-3 mb-2">
                      <label htmlFor="AC" className="form-lable">
                      A/C
                      </label>
                      <select class="form-select" aria-label="Default select example" 
                      name="ac" 
                      value={ac}
                      onChange={(e)=>onInputChange(e)}>
                        <option value="">Choose A/C option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </select>
                   </div>


                   <div className="col-sm-5 ms-3 mb-2">
                      <label htmlFor="RoomStatus" className="form-lable">
                      Room Status
                      </label>
                      <select class="form-select" aria-label="Default select example" 
                      name="status" 
                      value={status}
                      onChange={(e)=>onInputChange(e)}>
                        <option value="">Choose room status</option>
                        <option value="Arrived">Arrived</option>
                        <option value="Free">Free</option>
                        </select>
                   </div>

                  

                   <div className="col-sm-5 ms-3 mb-2">
                      <label htmlFor="BedType" className="form-lable">
                      Bed Type
                      </label>
                      <select class="form-select" aria-label="Default select example" 
                      name="bedType" 
                      value={bedType}
                      onChange={(e)=>onInputChange(e)}>
                        <option value="">Choose bed type</option>
                        <option value="2 Bed X 1">2 Bed X 1</option>
                        <option value="3 Bed X 1">3 Bed X 1</option>
                        <option value="2 Bed X 2">2 Bed X 2</option>
                        <option value="3 Bed X 1 + 2 Bed X 1">3 Bed X 1 + 2 Bed X 1</option>
                        </select>
                   </div>

                   <div className="col-sm-5 ms-3 mb-2">
                      <label htmlFor="Checking Status" className="form-lable">
                      Checking Status
                      </label>
                      <select class="form-select" aria-label="Default select example" 
                      name="checkStatus" 
                      value={checkStatus}
                      onChange={(e)=>onInputChange(e)}>
                        <option value="">Choose checking status</option>
                        <option value="Checking">Checking</option>
                        <option value="Repaire">Repaire</option>
                        <option value="Ready">Ready</option>
                        </select>
                   </div>

                   <div className="col-sm-5 ms-3 mb-2" >
                      <label htmlFor="Facilities" className="form-lable">
                        Facilities
                      </label>
                      <input type="text" className="form-control" placeholder="Enter Facilities" 
                      name="facilities"
                      value={facilities}
                      onChange={(e)=>onInputChange(e)}
                      />
                   </div>


                   <div className="col-sm-5 ms-3 mb-2" >
                      <label htmlFor="Room Location" className="form-lable">
                        Room Location
                      </label>
                      <input type="text" className="form-control" placeholder="Enter Room Location" 
                      name="location"
                      value={location}
                      onChange={(e)=>onInputChange(e)}
                      />
                   </div>

                   <div className="col-sm-5 ms-3 mb-2">
                      <label htmlFor="Room Type" className="form-lable">
                      Room Type
                      </label>
                      <select class="form-select" aria-label="Default select example" 
                      name="roomType" 
                      value={roomType}
                      onChange={(e)=>onInputChange(e)}>
                        <option value="">Choose room type</option>
                        <option value="Superior Room">Superior Room</option>
                        <option value="Deluxe Room">Deluxe Room</option>
                        <option value="Premium Room">Premium Room</option>
                        <option value="Executive Room">Executive Room</option>
                        </select>
                   </div>

                   <div className="col-sm-5 ms-3 mb-2">
                      <label htmlFor="Service Status" className="form-lable">
                      Service Status
                      </label>
                      <select class="form-select" aria-label="Default select example" 
                      name="serviceType" 
                      value={serviceType}
                      onChange={(e)=>onInputChange(e)}>
                        <option value="">Choose serviceType type</option>
                        <option value="Full Service">Full Service</option>
                        <option value="Repaire">Repaire</option>
                        <option value="Done">Done</option>
                        </select>
                   </div>

                   
                   <button type="submit" class="btn btn-primary mb-3 ms-3 mt-3 btn-lg">Edit Room Details</button>
                   <Link type="submit" to="/viewrooms"><button type="button" class="btn btn-danger mb-3 ms-3 mt-3 btn-lg"
                 onClick={()=>deleteRoom(room.rid)}>
                  Delete</button></Link>

                   </form>

                </div>
                
                </div>
                
             </div>

  </div>
  </div>
  </div>
  );
  
}
