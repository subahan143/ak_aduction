/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Adding = ({setUser}) => {
  useEffect(() => {
    setUser(true);
  }, []);
  return (
    <>
      <div className="flex flex-col h-screen w-2/2 ml-[10rem] items-center bg-gray-100 justify-center">
        <div className="flex-wrap w-full flex items-center justify-center gap-20">
         <Link to="/Adding/Add_student">
         <span className="w-[150px] h-[150px] cursor-pointer flex items-center gap-5 flex-col justify-center rounded-[50%] shadow-lg shadow-black  transition-all  duration-700 ease-in-out  hover:rounded-lg hover:text-white hover:shadow-sky-300 hover:bg-[url('https://media.istockphoto.com/id/621484894/photo/abstract-background-green.webp?b=1&s=170667a&w=0&k=20&c=QIfZL_O-aMALU8dndiBfi6WnNL__5c0V4Gi9WO5gs9Q=')]">
            <i className="fa-sharp fa-solid text-4xl fa-graduation-cap"></i>
            <h1 className="text-sm font-bold">Add Student</h1>
          </span>
         
         </Link>

          <span className="w-[150px] h-[150px] cursor-pointer   flex  items-center gap-5 flex-col justify-center rounded-[50%] shadow-lg shadow-black transition-all duration-700 ease-in-out  hover:rounded-lg hover:text-white hover:shadow-[#CD853F] hover:bg-[url('https://media.istockphoto.com/id/1178390169/photo/modern-abstract-background.jpg?s=1024x1024&w=is&k=20&c=7yFSegXWBbXj8cq-4C9vyftk6ILJoxyIPpF7DugWdBs=')]">
            <i className="fa-sharp fa-solid text-4xl fa-building-user"></i>
            <h1 className="text-sm font-bold">Add Department</h1>
          </span>

          <span className="w-[150px] h-[150px] cursor-pointer flex items-center gap-5 flex-col justify-center rounded-[50%] shadow-lg shadow-black transition-all duration-700 ease-in-out  hover:rounded-lg hover:text-white hover:shadow-[#9ACD32] hover:bg-[url('https://media.istockphoto.com/id/1138844199/photo/blurred-abstract-background.webp?b=1&s=170667a&w=0&k=20&c=2glIrARrhkfWPv54qJOPOrqh9OAV1jNA7Llc0879uBg=')]">
            <i className="fa-sharp fa-solid text-4xl fa-clipboard-user"></i>
            <h1 className="text-sm font-bold">Add Staff</h1>
          </span>
          <div className="flex-wrap w-full  flex items-center justify-center gap-20">

          <span className="w-[150px] h-[150px] cursor-pointer flex items-center gap-5 flex-col justify-center rounded-[50%] shadow-lg shadow-black transition-all duration-700 ease-in-out  hover:rounded-lg hover:text-white hover:shadow-[#D2691E] hover:bg-[url('https://media.istockphoto.com/id/837011094/photo/defocused-blurred-motion-abstract-background-orange-yellow.webp?b=1&s=170667a&w=0&k=20&c=PPVNPKJMhYJSeNzMRBqifhXgIiFkeNLOI_jpIWlpTmg=')]">
            <i className="fa-sharp fa-solid text-4xl fa-building-lock"></i>
            <h1 className="text-sm font-bold">Add Hostel</h1>
          </span>

          <span className="w-[150px] h-[150px] cursor-pointer flex items-center gap-5 flex-col justify-center rounded-[50%] shadow-lg shadow-black transition-all duration-700 ease-in-out  hover:rounded-lg hover:text-white hover:shadow-[#9370DB] hover:bg-[url('https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D')]">
            <i className="fa-sharp fa-solid text-4xl fa-van-shuttle"></i>
            <h1 className="text-sm font-bold">Add Transport</h1>
          </span>
        </div>
        </div>
      </div>
    </>
  );
};

export default Adding;
