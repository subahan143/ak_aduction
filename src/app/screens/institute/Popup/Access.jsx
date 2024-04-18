/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Access = ({setUser}) => {
  useEffect(() => {
    setUser(true);
  }, []);
  return (
   <>
     <div className="flex h-screen w-2/2 items-center bg-slate-200 flex-col justify-center ml-[10rem] ">
  
     <div className="w-full h-28 flex items-center justify-between px-20">

<h1 className="text-2xl font-extrabold">Provide Access</h1>
<span>
<i className="fa-sharp text-yellow-400 font-bold text-2xl fa-solid fa-triangle-exclamation"></i>
    <select className="border-2 border-black rounded-md w-40 h-7" name="" id="">
      <option value="">--Choose--</option>
      <option value="STD">Student</option>
      <option value="STF">Staff</option>
      <option value="DEP">Department</option>
    </select>
</span>

</div>
<div className="w-full h-full flex flex-col items-center gap-5 ">
<form className="w-5/6 h-12  mb-3  flex  justify-center  px-4 items-center  rounded h">
    <input type=" text" required="" className="border-2 w-64 h-3/4 rounded-xl mr-1 p-1  "/>
    <button type="submit" className="hover:bg-green-600 border-2 border-black hover:border-none hover:text-white   duration-150 ease-in transition-all  hover:shadow-lg hover:shadow-green-300 w-24 h-3/4 ml-1 rounded-xl bg-green-300 ">
    <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
    </button>
  </form>
  <span className="w-[70%] h-[60vh] bg-white flex items-center justify-between px-4  rounded-md">
   
  </span>
</div>

  </div>
   
   </>
  )
}

export default Access