/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Attendance = ({setUser}) => {
    useEffect(() => {
        setUser(true);
      }, []);
  return (
   <>
   
   <div className="flex flex-col h-screen w-2/2 ml-[10rem] items-center bg-gray-100 justify-center"> 
<div className="w-full h-[15vh] border-b-4 border-black flex items-center justify-center text-3xl font-bold">
  <span>Attendance</span>
</div>

 <div className="w-full h-[85vh] flex items-center justify-center flex-col">

 <div className="w-full h-[75px] flex items-center justify-center gap-48">
  <select className="w-[20%] h-[40px] border-2 border-gray-700 rounded-md ">
<option value="">choose</option>
<option value="">staff</option>
<option value="">Class</option>
  </select>
  <button className="hover:bg-blue-600 border-2 border-blue-500 text-blue-500 hover:text-white w-[50px] h-[50px] rounded-full text-2xl">
  <i className="fa-solid fa-arrow-right"></i>
  </button>
 </div>
 <div className="w-full h-[85%] flex"></div>


 </div>
    </div>
   
   </>
  )
}

export default Attendance
