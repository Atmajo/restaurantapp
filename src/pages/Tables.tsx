import React from "react";

const Tables = ({ menu, setMenu }: menu_type) => {
  return (
    <div className="flex flex-col gap-2 px-10 py-5 h-screen">
      <div>
        <button onClick={() => setMenu(!menu)}>
          <img src="/icons/menu.svg" alt="menu" className="w-7" />
        </button>
      </div>
      <div>
        <h1 className="text-4xl font-bold">Tables</h1>
        <div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Table</th>
                <th className="text-left">Status</th>
                <th className="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Table 1</td>
                <td>Available</td>
                <td>
                  <button className="bg-green-500 text-white px-2 py-1 rounded">
                    Book
                  </button>
                </td>
              </tr>
              <tr>
                <td>Table 2</td>
                <td>Booked</td>
                <td>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">
                    Cancel
                  </button>
                </td>
              </tr>
              <tr>
                <td>Table 3</td>
                <td>Available</td>
                <td>
                  <button className="bg-green-500 text-white px-2 py-1 rounded">
                    Book
                  </button>
                </td>
              </tr>
              <tr>
                <td>Table 4</td>
                <td>Booked</td>
                <td>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tables;
