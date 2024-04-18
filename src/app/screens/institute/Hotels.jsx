/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Hotels = ({setUser}) => {
  const [table,setTable]=useState(false)
  const [hosteler,setHosteler]=useState(false)
  useEffect(() => {
    setUser(true);
  }, []);
  return (
   <>
     <div className="flex h-screen w-2/2 relative   bg-gray-100 items-center justify-center ml-[10rem] flex-col"> 
     <div className="w-full h-[15vh] border-b-4 border-black flex items-center justify-center text-3xl font-semibold">
      <h1>Hostel</h1>
     </div>
     <div className="w-full h-[85vh] flex items-center justify-center gap-20">
<div onClick={()=>setTable(true)} className="flex w-[300px] cursor-pointer h-[200px] bg-white shadow-xl shadow-orange-150 rounded-xl flex-col text-center gap-2 justify-center hover:shadow-xl hover:shadow-red-500 hover:duration-200 hover:scale-95 hover:border-2 hover:border-red-600">
<i className="fa-solid fa-building-user  text-4xl text-red-500 "></i>
  <h1 className="text-2xl font-extrabold">Hostels</h1>
<p>All the Hostels in Managed by Institite</p>
</div>
<div onClick={()=> setHosteler(true)} className="flex w-[300px] cursor-pointer h-[200px] bg-white rounded-xl shadow-xl shadow-yellow-150   gap-2 text-center flex-col justify-center  hover:shadow-xl hover:shadow-cyan-500 hover:duration-200 hover:scale-95 hover:border-2 hover:border-cyan-700">
<i className="fa-solid fa-users text-4xl text-cyan-500"></i>
  <h1 className="text-2xl font-extrabold">Hosteler</h1>
  <p>All the Hosteler in Hostel</p>
</div>
     </div>
    { table &&(
       <div  className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
       <div className="flex w-[80%] h-[70vh] bg-white rounded-lg flex-col items-center justify-center">
         <div className="w-full relative h-1/5 border-b-2 flex items-end text-2xl font-extrabold justify-center">
           <h1>All Hostels (1)</h1>
           <i onClick={()=> setTable(false)} className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 rounded-lg fa-solid fa-xmark"></i>
           </div> 
           <div className="relative w-[80%] h-3/4 overflow-x-auto top-1 shadow-md sm:rounded-lg">
             <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
 <thead className=" text-xs w-full text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
   <tr>
     <th className="px-6 py-2">Hostel Name</th>
     <th className="px-6 py-2">ADDRESS</th>
     <th className="px-6 py-2">BEDS TOTAL</th>
     <th className="px-6 py-2">AVL. TOTAL</th>
   </tr>
 </thead>
 <tbody>
 <tr>
     <th className="px-6 py-3">ertyui</th>
     <td className="px-6 py-3">sdfghjkl.,mnbvcwertyui</td>
     <td className="px-6 py-3">1</td>
     <td className="px-6 py-3 font-bold text-lg text-green-400">1</td>
   </tr>
 </tbody>
 
             </table>
           </div>
         </div>
       </div>
    )}
    { hosteler &&(
      
      <div  className="absolute top-0 left-0  w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="flex w-[80%] h-[75vh] bg-white rounded-lg flex-col items-center justify-center">
        <div className="w-full relative h-1/5 border-b-2 flex items-end text-2x1 font-extrabold justify-center">
          <h1>All Hostels (0)</h1>
          <i onClick={()=> setHosteler(false)} className=" absolute text-xl right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer px-2 py-1 rounded-lg fa-solid fa-xmark"></i>
          </div> 
          <div className="relative w-[80%] h-3/4 overflow-x-auto top-1 shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
<thead className=" text-xs w-full text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
  <tr>
    <th className="px-6 py-2">STUDENT NAME</th>
    <th className="px-6 py-2">STUDENT MAIL</th>
    <th className="px-6 py-2">HOSTEL NAME</th>
    <th className="px-6 py-2">HOSTEL BED</th>
    <th className="px-6 py-2">JOINED</th>
  </tr>
</thead>


            </table>
          </div>
        </div>
      </div>
    )

    }
   
    </div>
  
   
   </>
  )
}

export default Hotels
