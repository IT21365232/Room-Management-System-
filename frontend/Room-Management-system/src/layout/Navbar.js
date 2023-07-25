import React from 'react'
import { Link } from 'react-router-dom'
import { RiDashboardFill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoIosHome } from "react-icons/io";
import { RiHome6Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { GoSignOut } from "react-icons/go";

export default function Navbar() {


    
  return (
    <div >
         <div class="navigation">
      <ul>
        <li>
          <a href="#">
            <span class="icon">
              <ion-icon name="logo-apple"></ion-icon>
            </span>
            <span class="title">FRESCO</span>
          </a>
        </li>

        <li>
          <a href="/">
            <span class="icon">
            <RiDashboardFill size='2rem' />
            </span>
            
            <span class="title">Dashboard</span>
          </a>
        </li>

        <li>
          <a href="/viewrooms">
            <span class="icon">
            <AiTwotoneHome size='2rem' />
            </span>
            <span class="title">Room List</span>
          </a>
        </li>

        <li>
          <a href="/boardrooms">
            <span class="icon">
            <RiHome6Fill size='2rem' />
            </span>
            <span class="title">Board Rooms</span>
          </a>
        </li>

        <li>
          <a href="/checkup">
            <span class="icon">
            <IoIosHome size='2rem' />
            </span>
            <span class="title">Check-Ups</span>
          </a>
        </li>

        <li>
          <a href="/roomservice">
            <span class="icon">
            <IoIosPeople size='2rem' />
            </span>
            <span class="title">Room Service</span>
          </a>
        </li>

        <li>
          <a href="#">
            <span class="icon">
            <GoSignOut size='2rem' />
            </span>
            <span class="title">Sign out</span>
          </a>
        </li>
      </ul>
    </div>

    
        


    </div>
    
  )
}
