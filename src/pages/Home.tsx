import React from "react";

const Home = ({menu, setMenu}: menu_type) => {
  return (
    <div className="flex flex-col gap-2 px-10 py-5 h-screen">
      <div>
        <button onClick={() => setMenu(!menu)}>
          <img src="/icons/menu.svg" alt="menu" className="w-7" />
        </button>
      </div>
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <div className="flex gap-5 mt-5">
          <div className="flex flex-col w-1/2 bg-[#f7f4ea] p-5 rounded-xl">
            <h1 className="text-center">Total Tables</h1>
            <h1 className="text-center text-4xl font-bold">50</h1>
          </div>
          <div className="flex flex-col w-1/2 bg-[#f7f4ea] p-5 rounded-xl">
            <h1 className="text-center">Reserved</h1>
            <h1 className="text-center text-4xl font-bold">25</h1>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="flex flex-col w-1/2 bg-[#f7f4ea] p-5 rounded-xl">
            <h1 className="text-center">Total Orders</h1>
            <h1 className="text-center text-4xl font-bold">100</h1>
          </div>
          <div className="flex flex-col w-1/2 bg-[#f7f4ea] p-5 rounded-xl">
            <h1 className="text-center">Total Revenue</h1>
            <h1 className="text-center text-4xl font-bold">$1000</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
