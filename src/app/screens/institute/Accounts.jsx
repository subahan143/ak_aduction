/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Accounts = ({setUser}) => {
  useEffect(() => {
    setUser(true);
  }, []);
  return (
  <>
    <div className="flex flex-col h-screen w-2/2 ml-[10rem] items-center bg-gray-100 justify-center"> 
<div className="w-full h-[15vh] border-b-4 border-black flex items-center justify-center text-3xl font-bold">
  <span>Accounts</span>
</div>

 <div className="w-full h-[85vh] flex items-center justify-center gap-10 flex-wrap">

 <span className="flex flex-col items-center justify-center w-1/3 h-40 bg-white shadow-lg shadow-gray-400 rounded-xl hover:border-2 hover:border-black  hover:duration-150 hover:ease-in hover:scale-95 cursor-pointer hover:shadow-orange-400 hover:drop-shadow-lg
 hover:translate-y-5 translate-y-6 ">
 <i className="fa-solid fa-file-invoice-dollar text-4xl"></i>
 <h1 className="text-3xl font-bold ">Fee Assign</h1>
 <p className="text-base text-center ">Assign The Fee To Student(General,Transport,Hostel,Other )</p>
 </span>
 
  <span className="flex flex-col items-center justify-center w-1/3 h-40 bg-white shadow-lg shadow-gray-400 rounded-xl hover:border-2 hover:border-black  hover:duration-150 hover:ease-in hover:scale-95 cursor-pointer hover:shadow-pink-500 hover:drop-shadow-lg
 hover:translate-y-5  translate-y-6">
 <i className="fa-solid text-4xl fa-hand-holding-dollar"></i>
 <h1 className="text-3xl font-bold ">Fee Collect</h1>
 <p className="text-base text-center ">Collect The Fee From Student(General, Transport,Hostel,Other )</p>
 </span>

 <span className="flex flex-col items-center justify-center w-1/3 h-40 bg-white shadow-lg shadow-gray-400 rounded-xl hover:border-2 hover:border-black  hover:duration-150 hover:ease-in hover:scale-95 cursor-pointer hover:shadow-lime-500 hover:drop-shadow-lg
 hover:translate-y-5  translate-y-6">
 <i className="fa-solid fa-money-bill-transfer text-4xl"></i>
 <h1 className="text-3xl font-bold ">Expenses</h1>
 <p className="text-base text-center ">Store A Record of daily expenses(Salary,Renovation,Fuel etc.. )</p>
 </span> 


 </div>
    </div>
  </>
  )
}

export default Accounts