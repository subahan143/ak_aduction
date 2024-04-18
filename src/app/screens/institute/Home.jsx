/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";
const Home = ({ setUser }) => {
  useEffect(() => {
    setUser(true);
  }, []);
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    setShowPopup(false);
  };

  return (
    <div className="flex h-screen w-2/2 items-center bg-slate-200 flex-col justify-center ml-[10rem] ">
      <div className="w-full h-[10vh] flex items-center justify-around  border-b-2 border-b-black ">
        <Link to="/home/Notifications">
          <i className=" hover:text-blue-400 hover:scale-105 hover:duration-75 fa-sharp text-xl fa-solid fa-bell"></i>
        </Link>

        <h1 className="text-xl font-bold">Dashboard</h1>
        <button
          onClick={() => setShowPopup(true)}
          className="px-4 py-2 rounded-lg border-2 border-gray-700 font-bold transition duration-300 ease-in-out transform hover:bg-blue-400 hover:shadow-md hover:border-2 hover:border-blue-400 hover:shadow-blue-400 hover:scale-105"
        >
          Log out
        </button>

        {showPopup && (
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
              <p>Are you sure you want to log out?</p>
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 rounded-lg border-2 border-gray-700 font-bold mr-2"
                  onClick={() => setShowPopup(false)}>
                  Cancel
                </button>
              
              <a href="/">
              <button
                  className="px-4 py-2 rounded-lg border-2 border-red-600 font-bold text-red-600 hover:bg-red-600 hover:text-white"
                  onClick={handleLogout}>
                  Confirm Logout
                </button>

              </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full h-[88vh] flex ">
        <div className="w-[30%] h-[88vh] flex items-center justify-center  ">
          <div className="flex flex-col relative w-[95%] h-[65vh] pt-3 rounded-md shadow-md shadow-orange-400 bg-white items-start justify-center gap-5   pl-2 ">
            <span className="w-24 h-24 hover:border-2 hover:border-black flex items-center justify-center rounded-lg absolute bg-purple-400 top-[-20px] ">
              <i className="fa-sharp text-4xl fa-solid fa-building-user text-white "></i>
            </span>
            <h1 className="text-xl font-bold ">InstituteName</h1>
            <span className="w-1/2 h-1 rounded-lg bg-purple-400  "></span>
            <span className="flex gap-1 font-bold ">
              <h1 className="text-[#FF66CC]">Address:- </h1>
              <h2 className="text-[#99CCFF]">Andhara Pradesh</h2>
            </span>
            <span className="flex gap-1 font-bold ">
              <h1 className="text-[#FF66CC]">Email:- </h1>
              <h2 className="text-[#99CCFF]">Subahan@gamil.com</h2>
            </span>
            <span className="flex gap-1 font-bold ">
              <h1 className="text-[#FF66CC]">Last-Login:- </h1>
              <h2 className="text-[#99CCFF]">4/5/2024-2/3/2024</h2>
            </span>
            <span className="flex gap-1 font-bold ">
              <h1 className="text-[#FF66CC]">Acadamic Year:- </h1>
              <h2 className="text-[#99CCFF]">00</h2>
            </span>
          </div>
        </div>
        <div className="w-[70%] [88vh] flex items-center justify-center  flex-wrap gap-4 ">
          <div className="flex flex-col w-[30%] h-32 mt-2 relative  bg-slate-50 rounded-md shadow-md shadow-gray-500 ">
            <Link to="/home/student">
              <span className="w-16 h-16  absolute hover:scale-105 cursor-pointer top-[-15px] left-2 flex items-center justify-center hover:border-2 hover:border-black  rounded-lg  bg-[#FF66CC] hover:shadow-md hover:shadow-[#FF66CC] ">
                <i className="fa-sharp text-2xl text-white  fa-solid fa-graduation-cap"></i>
              </span>
            </Link>

            <div className="w-full h-[80px] border-b-2 flex flex-col items-end justify-center pr-2  ">
              <p className="text-xl font-bold ">00</p>
              <h1 className="text-sm font-bold ">Students</h1>
            </div>
            <div className="w-full h-[48px] flex items-center justify-center ">
              <h1 className="">Veiw</h1>
            </div>
          </div>
          <div className="flex flex-col w-[30%] h-32 mt-2 relative bg-slate-50 rounded-md shadow-md shadow-gray-500 ">
            <Link to="/home/staff">
              <span className="w-16 h-16 hover:border-2 hover:border-black  absolute hover:scale-105 cursor-pointer top-[-15px] left-2 flex items-center justify-center  rounded-lg  bg-[#8FBC8F] hover:shadow-md hover:shadow-[#8FBC8F] ">
                <i className="fa-sharp text-2xl text-white fa-solid fa-user-group"></i>
              </span>
            </Link>

            <div className="w-full h-[80px] border-b-2 flex flex-col items-end justify-center pr-2  ">
              <p className="text-xl font-bold ">00</p>
              <h1 className="text-sm font-bold ">Staff</h1>
            </div>
            <div className="w-full h-[48px] flex items-center justify-center ">
              <h1 className="text-sm  font-medium">Veiw</h1>
            </div>
          </div>

          <div className="flex flex-col w-[30%] h-32 mt-2 relative bg-slate-50 rounded-md shadow-md shadow-gray-500 ">
            <Link to="/home/Departments">
              <span className="w-16 h-16 hover:border-2 hover:border-black  absolute hover:scale-105 cursor-pointer top-[-15px] left-2 flex items-center justify-center  rounded-lg  bg-[#0000FF] hover:shadow-md hover:shadow-[#0000FF] ">
                <i className="fa-sharp text-2xl text-white fa-solid fa-house-user"></i>
              </span>
            </Link>
            <div className="w-full h-[80px] border-b-2 flex flex-col items-end justify-center pr-2  ">
              <p className="text-xl font-bold ">00</p>
              <h1 className="text-sm font-bold ">Departments</h1>
            </div>
            <div className="w-full h-[48px] flex items-center justify-center ">
              <h1 className="text-sm font-medium">Veiw</h1>
            </div>
          </div>
          <div className="flex flex-col w-[30%] h-32 mt-2 relative bg-slate-50 rounded-md shadow-md shadow-gray-500 ">
            <Link to="/home/Transport">
              <span className="w-16 h-16 hover:border-2 hover:border-black  absolute hover:scale-105 cursor-pointer top-[-15px] left-2 flex items-center justify-center  rounded-lg  bg-[#696969] hover:shadow-md hover:shadow-[#696969] ">
                <i className="fa-sharp text-2xl text-white fa-solid fa-bus"></i>
              </span>
            </Link>
            <div className="w-full h-[80px] border-b-2 flex flex-col items-end justify-center pr-2  ">
              <p className="text-xl font-bold ">00</p>
              <h1 className="text-sm font-bold ">Transport</h1>
            </div>
            <div className="w-full h-[48px] flex items-center justify-center ">
              <h1 className="text-sm font-medium">Veiw</h1>
            </div>
          </div>

          <div className="flex flex-col w-[30%] h-32 mt-2 relative bg-slate-50 rounded-md shadow-md shadow-gray-500 ">
            <Link to="/home/Library">
              <span className="w-16 h-16 hover:border-2 hover:border-black  absolute hover:scale-105 cursor-pointer top-[-15px] left-2 flex items-center justify-center  rounded-lg  bg-[#D2691E] hover:shadow-md hover:shadow-[#D2691E] ">
                <i className="fa-sharp fa-solid text-2xl text-white fa-book"></i>
              </span>
            </Link>
            <div className="w-full h-[80px] border-b-2 flex flex-col items-end justify-center pr-2  ">
              <p className="text-xl font-bold ">00</p>
              <h1 className="text-sm font-bold ">Library</h1>
            </div>
            <div className="w-full h-[48px] flex items-center justify-center ">
              <h1 className="text-sm font-medium">Veiw</h1>
            </div>
          </div>
          <div className="flex flex-col w-[30%] h-32 mt-2 relative bg-slate-50 rounded-md shadow-md shadow-gray-500 ">
            <Link to="/home/Access">
              <span className="w-16 h-16 hover:border-2 hover:border-black  absolute hover:scale-105 cursor-pointer top-[-15px] left-2 flex items-center justify-center  rounded-lg  bg-[#00FFFF] hover:shadow-md hover:shadow-[#00FFFF] ">
                <i className="fa-sharp fa-solid text-2xl text-white fa-universal-access"></i>
              </span>
            </Link>
            <div className="w-full h-[80px] border-b-2 flex flex-col items-end justify-center pr-2  ">
              <p className="text-xl font-bold ">00</p>
              <h1 className="text-sm font-bold ">Access</h1>
            </div>
            <div className="w-full h-[48px] flex items-center justify-center ">
              <h1 className="text-sm font-medium">Veiw</h1>
            </div>
          </div>

          <div className="flex flex-col w-[30%] h-32 mt-2 relative bg-slate-50 rounded-md shadow-md shadow-gray-500 ">
            <Link to="/home/Hostel">
              <span className="w-16 h-16 hover:border-2 hover:border-black absolute hover:scale-105 cursor-pointer top-[-15px] left-2 flex items-center justify-center  rounded-lg  bg-[#DAA520] hover:shadow-md hover:shadow-[#DAA520] ">
                <i className="fa-sharp fa-solid text-2xl text-white fa-hotel"></i>
              </span>
            </Link>
            <div className="w-full h-[80px] border-b-2 flex flex-col items-end justify-center pr-2  ">
              <p className="text-xl font-bold ">00</p>
              <h1 className="text-sm font-bold ">Hostel</h1>
            </div>
            <div className="w-full h-[48px] flex items-center justify-center ">
              <h1 className="text-sm font-medium">Veiw</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default Home;
