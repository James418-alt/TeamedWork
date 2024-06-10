"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <div className="flex p-5 bg-gray-400 h-25 justify-end">
        <Link
          onClick={() => {
            setToggle(!toggle);
          }}
          className=" border bg-gray-400 p-2 text-white font-bold rounded-md"
          href="#"
        >
          Sign In
        </Link>
      </div>
      {toggle ? (
        ""
      ) : (
        <div className="flex justify-end">
          <div className="flex flex-col w-[15%] bg-gray-400  p-3 gap-4 text-[17px] text-white justify-end">
            <Link className="border p-2 rounded-md hover:bg-gray-500" href="#">
              AGENT
            </Link>
            <Link className="border p-2 rounded-md hover:bg-gray-500" href="#">
              CLIENT
            </Link>
            <Link className="border p-2 rounded-md hover:bg-gray-500" href="#">
              DELIVERY
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
