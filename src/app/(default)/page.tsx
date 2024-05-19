"use client";
import React from "react";
import Home from "@/pages/Home";
import Tables from "@/pages/Tables";
import Orders from "@/pages/Orders";
import Feedback from "@/pages/Feedback";
import Menus from "@/pages/Menus";

export default function page() {
  const [menu, setMenu] = React.useState(false);
  const [tabs, setTabs] = React.useState("");
  const tabName = [
    <Home menu={menu} setMenu={setMenu} />,
    <Tables menu={menu} setMenu={setMenu} />,
    <Orders menu={menu} setMenu={setMenu} />,
    <Menus menu={menu} setMenu={setMenu} />,
    <Feedback menu={menu} setMenu={setMenu} />,
  ];

  return (
    <div className="overflow-hidden">
      {menu && (
        <div className="absolute left-0 flex flex-col w-96 bg-[#f7f4ea] border-r-2 border-white shadow-lg h-screen">
          <div className="flex justify-between items-center py-5 px-10">
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              <h1 className="flex">Dashboard</h1>
            </button>
            <button onClick={() => setMenu(!menu)}>
              <img src="/icons/close.svg" alt="menu" className="w-9" />
            </button>
          </div>
          <hr />
          <div className="flex flex-col gap-10 py-5">
            <button
              onClick={() => {
                setTabs("Tables");
                setMenu(!menu);
              }}
            >
              <h1 className="text-center">Tables</h1>
            </button>
            <button
              onClick={() => {
                setTabs("Orders");
                setMenu(!menu);
              }}
            >
              <h1 className="text-center">Orders</h1>
            </button>
            <button
              onClick={() => {
                setTabs("Menus");
                setMenu(!menu);
              }}
            >
              <h1 className="text-center">Menus</h1>
            </button>
            <button
              onClick={() => {
                setTabs("Feedback");
                setMenu(!menu);
              }}
            >
              <h1 className="text-center">Feedback</h1>
            </button>
          </div>
        </div>
      )}
      {tabs === "" && tabName[0]}
      {tabs === "Tables" && tabName[1]}
      {tabs === "Orders" && tabName[2]}
      {tabs === "Menus" && tabName[3]}
      {tabs === "Feedback" && tabName[4]}
    </div>
  );
}
