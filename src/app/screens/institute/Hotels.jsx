/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Hotels = ({setUser}) => {
  useEffect(() => {
    setUser(true);
  }, []);
  return (
   <>
     <div className="flex h-screen w-2/2  bg-gray-100 items-center justify-center ml-[10rem] flex-col"> 
     <div className="w-full h-[15vh] border-b-4 border-black flex items-center justify-center text-3xl font-semibold">
      <h1>Hostel</h1>
     </div>
     <div className="w-full h-[85vh] flex items-center justify-center gap-20">
<div className="flex w-[300px] h-[200px] bg-white shadow-xl shadow-orange-150 rounded-xl flex-col text-center gap-2 justify-center hover:shadow-xl hover:shadow-red-500 hover:duration-200 hover:scale-95 hover:border-2 hover:border-red-600">
<i className="fa-solid fa-building-user  text-4xl text-red-500 "></i>
  <h1 className="text-2xl font-extrabold">Hostels</h1>
<p>All the Hostels in Managed by Institite</p>
</div>
<div className="flex w-[300px] h-[200px] bg-white rounded-xl shadow-xl shadow-yellow-150   gap-2 text-center flex-col justify-center  hover:shadow-xl hover:shadow-cyan-500 hover:duration-200 hover:scale-95 hover:border-2 hover:border-cyan-700">
<i className="fa-solid fa-users text-4xl text-cyan-500"></i>
  <h1 className="text-2xl font-extrabold">Hosteler</h1>
  <p>All the Hosteler in Hostel</p>
</div>
     </div>
    </div>
   
   </>
  )
}

export default Hotels
