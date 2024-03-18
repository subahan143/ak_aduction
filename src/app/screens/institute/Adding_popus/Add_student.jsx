
const Add_student = () => {
  return (
   <>
   
   <div className="flex h-screen w-2/2 ml-[10%] flex-col relative overflow-y-scroll items-center justify-center bg-lime-300 ">
<div className="w-[90%] h-24 bg-white rounded-xl overflow-y-scroll border-b-4 absolute top-0 border-red-600"></div>
<div className="w-[90%] h-full bg-red-400 rounded-t-xl ">
<section className="flex px-2 py-2 overflow-y-scroll  justify-evenly items-center flex-wrap w-full h-[85vh]">
    <div className=" spin flex flex-col h-40 hover:shadow-lg hover:shadow-[#06b6d4] hover:border-[#06b6d4] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md ">
    <i className="fa-solid fa-school text-4xl text-[#06b6d4]"></i>
    <span className="font-bold text-xl">Academic SetUP</span>
    <span className="text-xs">Setup Your Academic year </span>
    </div>

    <div className="spin flex flex-col h-40 hover:shadow-lg hover:shadow-[#f43f5e] hover:border-[#f43f5e] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md">
    
    <i className="fa-solid fa-school text-4xl text-[#f43f5e]"></i>
    <span className="font-bold text-xl">Academic Details</span>
    <span className="text-xs">See Your Academic Details Here </span>
    </div>

    <div className= " spin flex flex-col h-40 hover:shadow-lg hover:shadow-[#fa7acd] hover:border-[#fa7acd] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md">
    <i className="fa-solid fa-file text-4xl text-[#fa7acd]"></i>
    <span className="font-bold text-xl">Reports</span>
    <span className="text-xs">See All Reports</span>
    </div>

    <div className=" spin flex flex-col h-40 hover:shadow-lg hover:shadow-[#d4cd06] hover:border-[#d4cd06] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md">
    <i className="fa-solid fa-clipboard text-4xl text-[#d4cd06]"></i>
    <span className="font-bold text-xl">Attendance</span>
    <span className="text-xs">Take Attendance Staff/Students</span>
    </div>

    <div className=" spin flex flex-col h-40 hover:shadow-lg hover:shadow-[#f59e0b] hover:border-[#f59e0b] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md">
    <i className="fa-solid fa-pen-to-square text-4xl text-[#f59e0b]"></i>
    <span className="font-bold text-xl">Edit Details</span>
    <span className="text-xs">Edit Details of Staff/Students</span>
    </div>

    <div className=" spin flex flex-col h-40 hover:shadow-lg hover:shadow-[#6c4252] hover:border-[#6c4252] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md">
    <i className="fa-solid fa-envelope text-2xl text-[#6c4252]"></i>
    <span className="font-bold text-xl">Progress Card</span>
    <span className="text-xs text-center">Make Progress card for student based upon performance </span>
    </div>
    
    <div className=" spin flex flex-col h-40 hover:shadow-lg hover:shadow-[#febe57] hover:border-[#febe57] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md">
    <i className="fa-sharp fa-solid fa-bullhorn text-2xl text-[#febe57]"></i>
    <span className="font-bold text-xl">Notification/Alerts</span>
    <span className="text-xs">Alerts For institute level </span>
    </div>

    <div className="  spin flex flex-col h-40 hover:shadow-lg hover:shadow-[#468462ba] hover:border-[#468462ba] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md">
    <i className="fa-solid fa-user-clock text-2xl text-[#468462ba]"></i>
    <span className="font-bold text-xl">Leave Info</span>
    <span className="text-xs tec">Check all the leave information for student and staff </span>
    </div>

    <div className=" spin flex  flex-col h-40 hover:shadow-lg hover:shadow-[#7b4c94] hover:border-[#7b4c94] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md">
    <i className="fa-solid fa-user-clock text-2xl text-[#7b4c94]"></i>
    <span className="font-bold text-xl">Export Reports</span>
    <span className="text-xs text-center">Caste, Attandance and Fee Reports Export </span>
    </div>
    
    </section>
</div>
   </div>
   
   </>
  )
}

export default Add_student
