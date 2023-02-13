import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineInbox } from "react-icons/hi";
import {MdDownloadDone} from 'react-icons/md'
import {BsCalendar2Date, BsExclamation} from 'react-icons/bs'
import {CgCalendarDates} from 'react-icons/cg'
import {RiAddCircleFill} from 'react-icons/ri'
import { Link } from "react-router-dom";

const SideBar = () => {
  const menus = [
    { name: "Inbox", link: "/inbox", icon: HiOutlineInbox },
    { name: "Today", link: "/today", icon: BsCalendar2Date },
    { name: "Upcoming", link: "/tomorrow", icon: CgCalendarDates },
    { name: "Completed", link: "/completed", icon: MdDownloadDone, margin: true },
    { name: "Expired", link: "/expired", icon: BsExclamation },
    { name: "Add task", link: "/home", icon: RiAddCircleFill },


  ];
  // flex gap-6
  const [open, setOpen] = useState(true);
  return (
    <section className="mt-3">
      <div
        className={`bg-red-600 h-screen sticky top-0 ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-500 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SideBar