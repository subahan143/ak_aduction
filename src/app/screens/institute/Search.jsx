/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const Search = ({setUser}) => {
  useEffect(() => {
    setUser(true);
  }, []);
  return (
<>
<div className="flex h-screen w-2/2 items-center bg-slate-200 flex-col  ml-[10rem]  ">
  <div className="w-[100%] h-[10vh] flex items-center justify-center p-10 ">
<span className=" w-full flex items-center justify-between ">
<h1 className="text-2xl font-bold">Search</h1>
<span>
<i className="fa-sharp text-yellow-400 font-bold text-2xl fa-solid fa-triangle-exclamation"></i>
    <select className="border-2 border-black rounded-md w-40 h-7" name="" id="">
      <option value="">--Choose--</option>
      <option value="STD">Student</option>
      <option value="STF">Staff</option>
      <option value="DEP">Department</option>
    </select>
</span>
    

</span>
  </div>
  <div className="w-full h-[20vh] flex items-center justify-center ">
  <div className="flex w-5/6 h-5/6 items-center text-sm  flex-col ">
    <form className="w-5/6 h-12  mb-3  flex  justify-center  px-4 items-center  rounded h">
    <input type=" text" required="" className="border-2 w-64 h-3/4 rounded-xl mr-1 p-1  "/>
    <button type="submit" className="hover:bg-orange-600 border-2 border-black hover:border-none hover:text-white   duration-150 ease-in transition-all  hover:shadow-lg hover:shadow-orange-500 w-24 h-3/4 ml-1 rounded-xl bg-orange-300 ">
    <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
    </button>
  </form>
  </div>
  </div>
  </div>



</>
  );
};

export default Search;
