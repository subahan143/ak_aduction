/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const Departments = ({setUser}) => {
  useEffect(() => {
    setUser(true);
  }, []);
  return (
  <>
  
  <div className="flex h-screen w-2/2 items-center bg-slate-200 flex-col justify-center ml-[10rem] ">
<div className="w-full h-28 flex items-center justify-between px-20">

<h1 className="text-2xl font-extrabold">Departments</h1>
<a className="w-32 h-1/3 hover:text-white hover:bg-cyan-700 transition-all duration-100 ease-in rounded-md bg-cyan-900 justify-center flex items-center" href="/institute/home"><i className="fa-sharp fa-solid fa-arrow-left"></i></a>

</div>
<div className="w-full h-full flex flex-col items-center gap-5 ">
  <span className="w-[70%] h-[60px] bg-white flex items-center justify-between px-4  rounded-md">
    <h1>EMail</h1>
    <p>Name</p>
  </span>
  <span className="w-[70%] h-[80px] bg-white flex items-center justify-between px-4  rounded-md">
    <h1 className="text-blue-600">main@gmail.com</h1>
    <p>main</p>
  </span>
</div>

  </div>
  </>
  )
}

export default Departments