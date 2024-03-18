

import { Link } from "react-router-dom"

const Navbar = () => {

  return (
   <>
   
   <div  className=" w-[13%] p-2 border-r-2 h-screen fixed bg-white  left-0 top-0 flex items-start flex-col justify-evenly">
    
          <Link to="/institute/home">
            <span className="  py-1 w-[8rem] px-2 flex items-center justify-start hover:bg-green-300 cursor-pointer hover:scale-105  gap-5 rounded-lg  ">
              <i className="fa-solid fa-house text-xl "></i> Home
            </span>
          </Link>

         <Link to="/institute/search">
         <span className=" py-1 w-[8rem] px-2 flex items-center justify-start  hover:bg-green-300 cursor-pointer hover:scale-105  gap-5 rounded-lg ">
            <i className="fa-solid fa-magnifying-glass text-xl"></i> Search
          </span>
         </Link>

         <Link to="/institute/Adding">
         <span className="py-1 w-[8rem] px-2 flex items-center justify-start  hover:bg-green-300 cursor-pointer hover:scale-105  gap-5 rounded-lg ">
            <i className="fa-solid fa-user-plus text-xl"></i>Adding{" "}
          </span>
         </Link>

        <Link to="/institute/Deactive">
        <span className="py-1 w-[8rem] px-2 flex items-center justify-start  hover:bg-green-300 cursor-pointer hover:scale-105  gap-5 rounded-lg ">
            <i className="fa-solid fa-user-minus text-xl"></i>Deactive
          </span>
        </Link>

         <Link to="/institute/Accounts">
         <span className="py-1 w-[8rem] px-2 flex items-center justify-start  hover:bg-green-300 cursor-pointer hover:scale-105  gap-5 rounded-lg ">
            <i className="fa-solid fa-file-invoice text-xl"></i>Accounts
          </span>
         </Link>

         <Link to="/institute/Hotels">
         <span className="py-1 w-[8rem] px-2 flex items-center justify-start  hover:bg-green-300 cursor-pointer hover:scale-105  gap-5 rounded-lg ">
            <i className="fa-solid fa-square-h text-xl"></i>Hotels
          </span>
         </Link>
        
        <Link to="/institute/Libary">
        <span className="py-1 w-[8rem] px-2 flex items-center justify-start  hover:bg-green-300 cursor-pointer hover:scale-105  gap-5 rounded-lg ">
            <i className="fa-solid fa-book text-xl"></i>Libary
          </span>
        </Link>

          <Link to="/institute/Transport">
          <span className="py-1 w-[8rem] px-2 flex items-center justify-start  hover:bg-green-300 cursor-pointer hover:scale-105  gap-5 rounded-lg ">
            <i className="fa-solid fa-truck text-xl"></i>Transport
          </span>
          </Link>
         <Link to="/institute/Master">
         <span className="py-1 w-[8rem] px-2 flex items-center justify-start  hover:bg-green-300 cursor-pointer hover:scale-105  gap-5 rounded-lg ">
            <i className="fa-solid fa-circle-info text-xl"></i>Master
          </span>
         </Link>
        </div>
   
   </>
  )
}

export default Navbar
