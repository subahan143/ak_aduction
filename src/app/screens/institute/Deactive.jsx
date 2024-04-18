/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Deactive = ({ setUser }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setUser(true);
  
  }, []);

  return (
    <>
      <div className="flex h-screen w-2/2 items-center bg-gray-100 justify-center ml-[10rem] ">
        <div className="w-4/5 h-full flex flex-col">
          <div className="w-full h-[15vh] flex border-b-4 items-center justify-center text-4xl font-semibold border-black ">
            <h1>Inactive</h1>
          </div>
          <div className="w-full h-[85vh] flex items-center justify-around">
     
              <div onClick={() => setShowPopup(true)} className="flex hover:bg-red-200 hover:border-black w-72 h-44 bg-white rounded-md shadow-lg cursor-pointer hover:text-cyan-800 hover:scale-95 hover:shadow-cyan-600 transition-all duration-150 ease-in border-2 items-center justify-evenly ">
                <i className="fa-sharp fa-solid text-4xl fa-graduation-cap"></i>
                <span className="w-[5px] h-[100px] flex bg-black rounded-md"></span>
                <span  className="font-bold text-lg">Inactive Student</span>
              </div>
            
            <div onClick={() => setShowPopup(true)}
              className="flex  w-72 h-44 bg-white rounded-md shadow-lg cursor-pointer hover:text-orange-500 hover:scale-95 hover:bg-red-200 hover:border-black hover:shadow-orange-500 transition-all duration-150 ease-in border-2 items-center justify-evenly "
            
            >
              <i className="fa-sharp fa-solid text-4xl fa-clipboard-user"></i>
              <span className="w-[5px] h-[100px] flex bg-black rounded-md"></span>
              <span className="font-bold text-lg">Inactive Staff</span>{" "}
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white relative rounded-lg w-[60%] h-[60vh] flex items-center justify-center flex-col">
          <input type="text" className="bg-blue-50 w-[80%] h-[54px] absolute top-9 border-gray-200 border-2 rounded-lg focus:outline-none pl-10 focus:border-black text-sm " placeholder="search Email" />
          <i className=" absolute text-gray-500 left-24 top-14 fa-solid fa-magnifying-glass"></i>
          <button className="flex bg-blue-700 border-2 rounded-md text-yellow-50 border-blue-400 px-5 py-2 absolute top-[42px] right-20">
            search 
          </button>
            <button
              className="mt-4 px-4 py-2 absolute bottom-2 right-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Deactive;
