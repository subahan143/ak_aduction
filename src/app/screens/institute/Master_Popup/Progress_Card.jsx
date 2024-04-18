/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Progress_Card = ({setUser}) => {
    useEffect(() => {
        setUser(true);
      }, []);
  return (
   <>
   
   <div className="flex flex-col h-screen w-2/2 ml-[10rem] items-center bg-gray-100 justify-center"> 
<div className="w-full h-[15vh] border-b-4 border-black flex items-center justify-center text-3xl font-bold">
  <span>Marks</span>
</div>

 <div className="w-full h-[85vh] flex items-center justify-center flex-col">

 <div className="w-full h-[75px] flex items-center justify-center gap-48">
  <select className="w-[20%] h-[40px] border-2 border-gray-700 rounded-md ">
<option value="">---Class---</option>

  </select>
  <button className="hover:bg-blue-600  hover:text-white w-[80px] h-[40px] rounded-lg text-white bg-blue-600">
Search
  </button>
 </div>
 <div className="w-full h-[85%] flex"></div>


 </div>
    </div>
   
   </>
  )
}

export default Progress_Card
