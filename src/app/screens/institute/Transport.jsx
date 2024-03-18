/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';

const Transport = ({setUser}) => {
  useEffect(() => {
    setUser(true);
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered_two,setIsHovered_two] = useState(false)
  const [isHovered_three,setIsHovered_three]=useState(false)

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
    <div className=" flex h-screen w-2/2 items-center justify-center ml-[10rem] flex-col">
      <div className='w-full h-[15vh] flex border-b-4 border-black items-center justify-center text-4xl font-extrabold'>
        <h1>Transport</h1>
      </div>
      <div className='flex-wrap w-full  h-full flex items-center justify-center gap-10'>
      
        <div className="hover-card hover:shadow-xl text-center hover:shadow-[#FF4500] hover:duration-300 hover:scale-95" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className={`card-content ${isHovered ? 'active' : ''}`}>
            <div className="scroll-content flex items-center justify-center ">
              <p className='text-sm font-extrabold'>Track The Location of Vehicle( login to Driver Dashboard for Location </p>
            </div>
          </div>
          <div className="card-header flex items-center justify-center flex-col">
          <i className="fa-solid fa-location-crosshairs text-3xl text-[#FF4500]"></i>
          <h1 className='text-2xl font-extrabold'>Vehicle Tracking</h1>
          </div>
        </div>
        <div className="hover-card hover:shadow-xl text-center hover:shadow-[#b5d549] hover:duration-300 hover:scale-95 " onMouseEnter={handleMouseEnter_two} onMouseLeave={handleMouseLeave_two}>
          <div className={`card-content ${isHovered_two ? 'active' : ''}`}>
            <div className="scroll-content flex items-center justify-center ">
              <p className='text-sm font-extrabold'>All Transport Vehicle like(Winger,Van,Bus)</p>
            </div>
          </div>
          <div className="card-header flex items-center justify-center flex-col">
          <i className="fa-solid fa-bus text-[#b5d549] text-3xl"></i>
          <h1 className='text-2xl font-extrabold'>All Vehicles</h1>
          </div>
          
        </div>
       
        <div className="hover-card hover:shadow-xl text-center hover:shadow-[#fde047] hover:duration-300 hover:scale-95 " onMouseEnter={handleMouseEnter_three} onMouseLeave={handleMouseLeave_three}>
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
      
    
   
     
  
  );
};

export default Transport;
