import React from "react";
import {
  FaHome,
  FaClipboardList,
  FaShoppingCart,
  FaHeart,
  FaBell,
  FaQuestionCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import Logo from "../../assets/offical_logo.png";
import { useNavigate } from "react-router-dom";

const Aside = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      const confirmed = window.confirm("Are you sure you want to logout?");
      if (confirmed) {
        localStorage.removeItem("isloggedin");
        alert("Logout Successful.");
        navigate("/login");
      } else {
        // User cancelled logout
        return;
      }
    } catch (error) {
      alert("Logout failed. Please try again later.");
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <aside
        className="w-64 bg-[#393d3cff] text-white flex flex-col sticky top-0 "
        style={{ position: "sticky" }}
      >
        <div className="flex items-center justify-center h-20  ">
          <img
            className="mt-10"
            src={Logo}
            alt="Logo"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <nav className="flex-1 px-4 py-8 space-y-2">
          <a
            href="#"
            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
          >
            <FaHome />
            <span>Home</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
          >
            <FaClipboardList />
            <span>My Order</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md relative"
          >
            <FaShoppingCart />
            <span>My Cart</span>
            <span className="absolute right-2 top-1 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center mt-1">
              5
            </span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
          >
            <FaHeart />
            <span>Wishlist</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md relative"
          >
            <FaBell />
            <span>Notifications</span>
            <span className="absolute right-2 top-1 bg-red-500 text-xs text-white rounded-full w-5 h-5 flex items-center justify-center mt-1">
              2
            </span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
          >
            <FaQuestionCircle />
            <span>Help</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-md"
          >
            <FaPhoneAlt />
            <span>Contact Us</span>
          </a>
          <a className="flex items-center space-x-2 p-2 relative justify-center">
            <button
              onClick={handleLogout}
              className="mt-20 bg-green-500"
              style={{
                padding: "13px 13px",
                borderRadius: "10px",
                border: "1px solid #98bf8cff",
              }}
            >
              Logout
            </button>
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
