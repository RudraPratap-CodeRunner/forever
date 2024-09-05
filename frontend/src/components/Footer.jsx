import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-[#0500000b] px-5 ">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 pt-5 text-sm">
        <div>
          <img src={assets.logo} className="mb-3 w-28" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
            quam! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Possimus, laudantium.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-3">COMPANY</p>
          <ul>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-3">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="cursor-pointer">+5-625-725-727</li>
            <li className="cursor-pointer">contact@forever.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ forver.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
