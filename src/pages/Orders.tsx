import React from "react";

const Orders = ({ menu, setMenu }: menu_type) => {
  return (
    <div className="flex flex-col gap-2 px-10 py-5 h-screen">
      <div>
        <button onClick={() => setMenu(!menu)}>
          <img src="/icons/menu.svg" alt="menu" className="w-7" />
        </button>
      </div>
    </div>
  );
};

export default Orders;
