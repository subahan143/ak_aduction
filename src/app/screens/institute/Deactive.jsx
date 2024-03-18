/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Deactive = ({setUser}) => {
  useEffect(() => {
    setUser(true);
  }, []);
  return (
    <>
      <div className="flex h-screen w-2/2 items-center bg-gray-100  justify-center ml-[10rem] "> 
      <div className="w-4/5 h-full  flex flex-col">
        <div className="w-full h-[15vh] flex border-b-4 items-center justify-center text-4xl font-semibold border-black ">
          <h1>Inactive</h1>
        </div>
        <div className="w-full h-[85vh] flex items-center justify-between">
  
          <div className="flex hover:bg-red-200 hover:border-black w-[260px] bg-white rounded-md shadow-lg cursor-pointer hover:text-cyan-800  hover:scale-95  hover:shadow-cyan-200  transition-all duration-150 ease-in border-2 items-center justify-evenly  h-1/3"> <i className="fa-sharp fa-solid text-4xl  fa-graduation-cap"></i>
          <span className="w-[5px] h-[100px] flex bg-black rounded-md"></span>
           <span className="font-bold text-lg">Inactive Student</span>
           </div>
           <div className="flex   w-[250px] bg-white rounded-md shadow-lg cursor-pointer hover:text-orange-500  hover:scale-95 hover:bg-red-200 hover:border-black hover:shadow-orange-500 transition-all duration-150 ease-in border-2 items-center justify-evenly h-1/3"> 
           <i className="fa-sharp fa-solid text-4xl fa-clipboard-user"></i>
           <span className="w-[5px] h-[100px] flex bg-black rounded-md"></span>
           <span className="font-bold text-lg">Inactive Staff</span> </div>
        </div>
      </div> 
    </div>
    
    </>
  )
}

export default Deactive
