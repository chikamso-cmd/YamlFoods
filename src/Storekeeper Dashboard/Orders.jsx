import React from 'react'
import Ordercategory from './Dashboard component/Ordercategory';

export default function Orders() {
  return (
    <div className="w-full">
      <div className="flex gap-3 w-70 lg:w-full flex-wrap rounded items-center">
        <div className="rounded w-[100px] font-bold px-4 py-2 bg-green-600  text-white flex gap-2 items-center ">
          <h1 className="text-[10px] text-center ">All Orders</h1>
          <p className="text-[6px] rounded-full w-[10px] h-[10px] bg-gray-200 text-center text-black font-bold">
            5
          </p>
        </div>
        <div className="rounded w-[100px] font-bold px-4 py-2 bg-white   text-black shadow shadow-gray-200 flex gap-2 items-center ">
          <h1 className="text-[10px] text-center ">InProgress</h1>
          <p className="text-[6px] rounded-full w-[10px] h-[10px] bg-gray-200 text-center text-black font-bold">
            5
          </p>
        </div>
        <div className="rounded w-[100px] font-bold px-4 py-2 bg-white  text-black shadow shadow-gray-200  flex gap-2 items-center ">
          <h1 className="text-[10px] text-center "> Pending</h1>
          <p className="text-[6px] rounded-full w-[10px] h-[10px] bg-gray-200 text-center text-black font-bold">
            5
          </p>
        </div>
        <div className="rounded w-[100px] font-bold px-4 py-2 bg-white  text-black shadow shadow-gray-200 flex gap-2 items-center ">
          <h1 className="text-[10px] text-center "> Delivered</h1>
          <p className="text-[6px] rounded-full w-[10px] h-[10px] bg-gray-200 text-center text-black font-bold">
            5
          </p>
        </div>
      </div>

      <Ordercategory />
    </div>
  );
}
