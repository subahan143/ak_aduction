/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';

const Transport = ({setUser}) => {
  useEffect(() => {
    setUser(true);
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered_two,setIsHovered_two] = useState(false);
  const [isHovered_three,setIsHovered_three]=useState(false);
  const [tracking,setTracking]=useState(false);
  const [allVehicles,setAll_Vehicles]=useState(false);
  const [Vehicle_Drivers, set_Vehicle_Drivers]=useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter_two = () => {

    setIsHovered_two(true);
  };

  const handleMouseLeave_two = () => {

    setIsHovered_two(false);
  };
  const handleMouseEnter_three = () => {

    setIsHovered_three(true);
  };

  const handleMouseLeave_three = () => {

    setIsHovered_three(false);
  };

  return (
    <>
    <div className=" flex h-screen w-2/2 items-center justify-center ml-[10rem] flex-col">
      <div className='w-full h-[15vh] flex border-b-4 border-black items-center justify-center text-4xl font-extrabold'>
        <h1>Transport</h1>
      </div>
      <div className='flex-wrap w-full  h-full flex items-center justify-center gap-10'>
      
        <div className="hover-card hover:shadow-xl text-center hover:shadow-[#FF4500] hover:duration-300 hover:scale-95" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div onClick={() => setTracking(true)} className={`card-content ${isHovered ? 'active' : ''}`}>
            <div className="scroll-content flex items-center justify-center ">
              <p className='text-sm font-extrabold'>Track The Location of Vehicle( login to Driver Dashboard for Location </p>
            </div>
          </div>
          <div  onClick={() => setTracking(true)} className="card-header flex items-center justify-center flex-col">
          <i className="fa-solid fa-location-crosshairs text-3xl text-[#FF4500]"></i>
          <h1 className='text-2xl font-extrabold'>Vehicle Tracking</h1>
          </div>
        </div>
        <div onClick={()=>setAll_Vehicles(true)} className="hover-card hover:shadow-xl text-center hover:shadow-[#b5d549] hover:duration-300 hover:scale-95 " onMouseEnter={handleMouseEnter_two} onMouseLeave={handleMouseLeave_two}>
          <div className={`card-content ${isHovered_two ? 'active' : ''}`}>
            <div className="scroll-content  flex items-center justify-center ">
              <p className='text-sm font-extrabold'>All Transport Vehicle like(Winger,Van,Bus)</p>
            </div>
          </div>
          <div className="card-header flex items-center justify-center flex-col">
          <i className="fa-solid fa-bus text-[#b5d549] text-3xl"></i>
          <h1 className='text-2xl font-extrabold'>All Vehicles</h1>
          </div>
          
        </div>
       
        <div onClick={()=>set_Vehicle_Drivers(true)} className="hover-card hover:shadow-xl text-center hover:shadow-[#fde047] hover:duration-300 hover:scale-95 " onMouseEnter={handleMouseEnter_three} onMouseLeave={handleMouseLeave_three}>
          <div className={`card-content ${isHovered_three ? 'active' : ''}`}>
            <div className="scroll-content flex items-center justify-center ">
              <p className='text-sm font-extrabold pl-32'>Drivers</p>
            </div>
          </div>
          <div className="card-header flex items-center justify-center flex-col">
          <i className="fa-solid fa-address-card text-[#fde047] text-3xl"></i>
          <h1 className='text-2xl font-extrabold'>All Vehicle Drivers</h1>
          </div>
          
        </div>
       
      </div>
    
     
        </div>
        
        {tracking &&(
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="flex border-2 border-black w-[70%] h-[75vh] bg-white rounded-lg flex-col items-center justify-center">
            <div className="w-full relative h-1/5 border-b-2 flex items-end text-2x1 font-extrabold justify-center">
              <h1>Track Vehicle Through Driver</h1>
              <i
                onClick={() => setTracking(false)}
                className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
              ></i>
            </div>
            <div className="relative w-[80%] h-3/4 overflow-x-auto top-1 shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className=" text-xs w-full text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="px-6 py-2">DRIVER</th>
                    <th className="px-6 py-2">EMAIL</th>
                    <th className="px-6 py-2">ACTION</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>

        )}
        {allVehicles &&(
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="flex border-2 border-black w-[70%] h-[75vh] bg-white rounded-lg flex-col items-center justify-center">
            <div className="w-full relative h-1/5 border-b-2 flex items-end text-2x1 font-extrabold justify-center">
              <h1>All Transport Vehicle</h1>
              <i
                onClick={() => setAll_Vehicles(false)}
                className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
              ></i>
            </div>
            <div className="relative w-[80%] h-3/4 overflow-x-auto top-1 shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className=" text-xs w-full text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="px-6 py-2">VEHICLE NUMBER</th>
                    <th className="px-6 py-2">VEHICLE ROUTE</th>
                    <th className="px-6 py-2">ADDED ON</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>

        )}
        {Vehicle_Drivers &&(
    <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="flex border-2 border-black w-[70%] h-[75vh] bg-white rounded-lg flex-col items-center justify-center">
            <div className="w-full relative h-1/5 border-b-2 flex items-end text-2x1 font-extrabold justify-center">
              <h1>All Drivers</h1>
              <i
                onClick={() => set_Vehicle_Drivers(false)}
                className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
              ></i>
            </div>
            <div className="relative w-[80%] h-3/4 overflow-x-auto top-1 shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className=" text-xs w-full text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="px-6 py-2">NAME</th>
                    <th className="px-6 py-2">EMAIL</th>
                    <th className="px-6 py-2">JOINED ON</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>

        )}
         

    
   </>
     
  
  );
};

export default Transport;
