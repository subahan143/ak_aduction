/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Staff = ({setUser}) => {
  useEffect(() => {
    setUser(true);
  }, []);
  return (
   <>
     <div className="flex h-screen w-2/2 items-center bg-slate-200 flex-col justify-center ml-[10rem] ">


     <div className="w-full items-center h-full flex flex-col">
      <span className="w-full h-24 items-center flex justify-between px-28">
      <span className="font-bold text-2xl">Management-Staff</span>
     <a className="w-32 h-1/3 hover:text-white hover:bg-cyan-700 transition-all duration-100 ease-in rounded-md bg-cyan-900 justify-center flex items-center" href="/institute/home"><i className="fa-sharp fa-solid fa-arrow-left"></i></a>
     </span>
     </div>
  </div>
   
   
   </>
  )
}

export default Staff