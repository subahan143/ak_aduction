/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Master = ({setUser}) => {
  
  
  const Nav = useNavigate("");
  
  const [set_up,setSet_up]=useState(false);
  const [all_Details,setAll_Details]=useState(false);
  const [reports,setReports]=useState(false);
  const [Edit,setEdit]=useState(false);
  const [Notification,setNotification]=useState(false);
  const [leave_Info,setLeave_Info]=useState(false)
  
  
  useEffect(() => {
    setUser(true);
  }, []);
  return (
    <>
    <div className="flex h-screen w-2/2 items-center justify-center ml-[10rem] flex-col">
    <div className="w-full h-[15vh] border-b-4  border-black font-extrabold text-4xl items-center justify-center flex">Master</div> 
    <section className="flex px-2 py-2 overflow-y-scroll  justify-evenly items-center flex-wrap w-full h-[85vh]">
    <div onClick={()=> setSet_up(true)} className=" spin flex flex-col h-40 hover:shadow-lg hover:shadow-[#06b6d4] hover:border-[#06b6d4] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md ">
    <i className="fa-solid fa-school text-4xl text-[#06b6d4]"></i>
    <span className="font-bold text-xl">Academic SetUP</span>
    <span className="text-xs">Setup Your Academic year </span>
    </div>
    
    <div onClick={()=> setAll_Details(true)} className="spin flex flex-col h-40 hover:shadow-lg hover:shadow-[#f43f5e] hover:border-[#f43f5e] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md">
    
    <i className="fa-solid fa-school text-4xl text-[#f43f5e]"></i>
    <span className="font-bold text-xl">Academic Details</span>
    <span className="text-xs">See Your Academic Details Here </span>
    </div>
    
    <div onClick={()=> setReports(true)} className= " spin flex flex-col h-40 hover:shadow-lg hover:shadow-[#fa7acd] hover:border-[#fa7acd] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md">
    <i className="fa-solid fa-file text-4xl text-[#fa7acd]"></i>
    <span className="font-bold text-xl">Reports</span>
    <span className="text-xs">See All Reports</span>
    </div>
    
    
    <div onClick={() => Nav('/Master/Attendance')} className=" spin flex flex-col  h-40 hover:shadow-lg hover:shadow-[#d4cd06] hover:border-[#d4cd06] justify-center items-center m-2 cursor-pointer w-1/5 border-2 duration-150 ease-in transition-all hover:scale-95  rounded-md">
    <i className="fa-solid fa-clipboard text-4xl text-[#d4cd06]"></i>
    <span className="font-bold text-xl">Attendance</span>
    <span className="text-xs">Take Attendance Staff/Students</span>
    </div>
    
    
    <div onClick={()=>setEdit(true)} className=" spin flex flex-col h-40 hover:shadow-lg hover:shadow-[#f59e0b] hover:border-[#f59e0b] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md">
    <i className="fa-solid fa-pen-to-square text-4xl text-[#f59e0b]"></i>
    <span className="font-bold text-xl">Edit Details</span>
    <span className="text-xs">Edit Details of Staff/Students</span>
    </div>
    
    <div onClick={()=> Nav('/Master/Progress_Card')}   className=" spin flex flex-col h-40 hover:shadow-lg hover:shadow-[#6c4252] hover:border-[#6c4252] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md">
    <i className="fa-solid fa-envelope text-2xl text-[#6c4252]"></i>
    <span className="font-bold text-xl">Progress Card</span>
    <span className="text-xs text-center">Make Progress card for student based upon performance </span>
    </div>
    
    <div onClick={()=>setNotification(true)} className=" spin flex flex-col h-40 hover:shadow-lg hover:shadow-[#febe57] hover:border-[#febe57] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md">
    <i className="fa-sharp fa-solid fa-bullhorn text-2xl text-[#febe57]"></i>
    <span className="font-bold text-xl">Notification/Alerts</span>
    <span className="text-xs">Alerts For institute level </span>
    </div>
    
    <div onClick={()=>setLeave_Info(true)} className="  spin flex flex-col h-40 hover:shadow-lg hover:shadow-[#468462ba] hover:border-[#468462ba] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md">
    <i className="fa-solid fa-user-clock text-2xl text-[#468462ba]"></i>
    <span className="font-bold text-xl">Leave Info</span>
    <span className="text-xs text-center">Check all the leave information for student and staff </span>
    </div>
    
    <div  onClick={()=> Nav('/Master/Export_Reports')} className=" spin flex  flex-col h-40 hover:shadow-lg hover:shadow-[#7b4c94] hover:border-[#7b4c94] justify-center items-center m-2 cursor-pointer w-1/5 bg-white border-2 duration-150 ease-in transition-all hover:scale-95 rounded-md">
    <i className="fa-solid fa-user-clock text-2xl text-[#7b4c94]"></i>
    <span className="font-bold text-xl">Export Reports</span>
    <span className="text-xs text-center">Caste, Attandance and Fee Reports Export </span>
    </div>
    
    </section>
    </div>
    
    { set_up &&(
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="flex border-2 border-cyan-300 w-[70%] h-[75vh] bg-white rounded-lg flex-col items-center justify-center">
      <div className="w-full relative h-1/5  flex items-end text-2x1 font-extrabold justify-center">
      <h1 className="text-xl font-bold">Set-Up</h1>
      <i
      onClick={()=> setSet_up(false)}
      className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
      ></i>
      </div>
      <div className="w-full h-[80vh] flex flex-wrap items-center justify-center gap-2">
      
      <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
      <i className=" text-3xl fa-solid fa-layer-group"></i>
      <h1 className="text-lg font-bold">Class Creation</h1>
      </span>
      
      <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
      <i className=" text-3xl fa-solid fa-list"></i>                <h1 className="text-lg font-bold">Section Creation</h1>
      </span>
      
      <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
      <i className=" text-3xl fa-solid fa-bookmark"></i>                <h1 className="text-lg font-bold">Subject Creation</h1>
      </span>
      
      <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
      <i className=" text-3xl fa-solid fa-money-bills"></i>                <h1 className="text-lg font-bold">Fee Creation</h1>
      </span>
      
      <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
      <i className=" text-3xl fa-solid fa-quote-left"></i>                <h1 className="text-lg font-bold">Time-Table Creation</h1>
      </span>
      
      <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
      <i className=" text-3xl fa-solid fa-arrow-down-up-lock"></i>                <h1 className="text-lg font-bold">Prmotion / Demotion</h1>
      </span>
      
      </div>
      
      </div>
      </div> )}
      {all_Details &&(
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div className="flex border-2 border-red-400 w-[70%] h-[75vh] bg-white rounded-lg flex-col items-center justify-center">
        <div className="w-full relative h-1/5  flex items-end text-2x1 font-extrabold justify-center">
        <h1 className="text-xl font-bold"> All Details</h1>
        <i
        onClick={()=> setAll_Details(false)}
        className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
        ></i>
        </div>
        <div className="w-full h-[80vh] flex flex-wrap items-center justify-center gap-2">
        
        <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
        <i className=" text-3xl fa-solid fa-timeline"></i>
        <h1 className="text-lg font-bold">Class Details</h1>
        </span>
        
        <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
        <i className=" text-3xl fa-solid fa-magnifying-glass-arrow-right"></i>
        <h1 className="text-lg font-bold">Advanced Search</h1>
        </span>
        <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
        <i className=" text-3xl fa-solid fa-circle-user"></i>
        <h1 className="text-lg font-bold">Time Table</h1>
        </span>
        </div>
        
        </div>
        </div>
        )}
        {reports &&(
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="flex border-2 border-pink-400 w-[70%] h-[75vh] bg-white rounded-lg flex-col items-center justify-center">
          <div className="w-full relative h-1/5  flex items-end text-2x1 font-extrabold justify-center">
          <h1 className="text-xl font-bold">Reports</h1>
          <i
          onClick={()=> setReports(false)}
          className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
          ></i>
          </div>
          <div className="w-full h-[80vh] flex flex-wrap items-center justify-center gap-2">
          
          <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
          <i className=" text-3xl fa-solid fa-hand"></i>
          <h1 className="text-lg font-bold">Attendance Report</h1>
          </span>
          
          <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
          <i className=" text-3xl fa-solid fa-user-xmark"></i>             
          <h1 className="text-lg font-bold">Inactive Report</h1>
          </span>
          
          <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
          <i className=" text-3xl fa-sharp fa-solid fa-tarp"></i>          
          <h1 className="text-lg font-bold">Subjective Report</h1>
          </span>
          
          <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
          <i className=" text-3xl fa-solid fa-code-pull-request"></i>                           
          <h1 className="text-lg font-bold">Admission Reports</h1>
          </span>
          
          <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
          <i className=" text-3xl fa-solid fa-money-check-dollar"></i>       
          <h1 className="text-lg font-bold">Receipts</h1>
          </span>
          
          <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
          <i className=" text-3xl fa-solid fa-receipt"></i>             
          <h1 className="text-lg font-bold">Student Receipt</h1>
          </span>
          
          <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
          <i className=" text-3xl text-orange-400 fa-solid fa-receipt"></i>             
          <h1 className="text-lg font-bold">I/E Reports</h1>
          </span>
          
          <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
          <i className=" text-3xl text-purple-400 fa-solid fa-receipt"></i>               
          <h1 className="text-lg font-bold">Fee Reports</h1>
          </span>
          
          </div>
          
          </div>
          </div>
          
          )}
          {Edit&&(
            <div className="absolute  top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="flex border-2 border-[#f59e0b] w-[60%] h-[60vh] bg-white rounded-lg flex-col items-center justify-center">
            <div className="w-full relative h-1/5  flex items-end text-2x1 font-extrabold justify-center">
            <h1 className="text-xl font-bold">Reports</h1>
            <i
            onClick={()=> setEdit(false)}
            className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
            ></i>
            </div>
            <div className="w-full h-[80vh] flex flex-wrap items-center justify-center gap-2">
            
            <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
            <i className=" text-3xl fa-solid fa-layer-group"></i>
            <h1 className="text-lg font-bold">Student</h1>
            </span>
            
            <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-95 hover:duration-150 hover:transition-all hover:ease-in ">
            <i className="fa-sharp fa-solid fa-chalkboard-user text-3xl"></i>         <h1 className="text-lg font-bold">Staff</h1>
            </span>
            
            
            
            
            
            </div>
            
            </div>
            </div>
            )}
            {Notification&&(
              
            <div className="absolute  top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="flex border-2 border-[#e4b15b] w-[60%] h-[60vh] bg-white rounded-lg flex-col items-center justify-center">
            <div className="w-full relative h-1/3  flex items-end text-2x1 font-extrabold justify-center">
            <h1 className="text-xl font-bold">Create Institute Notifications</h1>
            <i
          onClick={()=>setNotification(false)}
            className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
            ></i>
            </div>
            <div className="w-full h-[80vh] flex flex-wrap items-center justify-center gap-10 flex-col">
            
            <div className="relative w-3/4  z-0">
            <input type="text" required="" id="floating_standard" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
            <label htmlFor="floating_standard" className="absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Matter</label></div>
            <div className="relative w-3/4  z-0">
            <input type="text" required="" id="floating_standard" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
            <label htmlFor="floating_standard" className="absolute text-sm text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Matter</label></div>
            <button className="bg-blue-600 px-5 py-2.5 rounded-lg text-white hover:bg-blue-800">submit</button>
            
            </div>
            
            </div>
            </div>
            )}
            {leave_Info&&(

               <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div className="flex border-2 border-red-400 w-[70%] h-[70vh] bg-white rounded-lg flex-col items-center justify-center">
        <div className="w-full relative h-[20vh]  flex items-end text-2x1 font-extrabold justify-center">
        <h1 className="text-3xl font-bold "> Select</h1>
        <i
        onClick={()=> setLeave_Info(false)}
        className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
        ></i>
        </div>
        <div className="w-full h-[50vh] flex flex-wrap items-center justify-center gap-10">
        
        <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-110 hover:duration-150 hover:transition-all hover:ease-in shadow-lg  hover:shadow-yellow-300  ">
        <i className=" text-3xl text-yellow-300 fa-solid fa-users"></i>      
          <h1 className="text-lg font-bold">Class Wise Data</h1>
        </span>
        
        <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-110 hover:duration-150 hover:transition-all hover:ease-in hover:shadow-lg hover:shadow-purple-400">
        <i className=" text-3xl text-purple-400 fa-solid fa-user"></i>       
         <h1 className="text-lg font-bold">Specific Student</h1>
        </span>
        <span className="w-48 h-36 flex bg-white rounded-lg border-2 border-black items-center justify-center flex-col gap-4 cursor-pointer hover:border-none hover:bg-gray-400 hover:scale-110 hover:duration-150 hover:transition-all hover:ease-in ">
        <i className=" text-3xl text-blue-600 fa-solid fa-user-secret"></i>    
            <h1 className="text-lg font-bold">Staff</h1>
        </span>
        </div>
        
        </div>
        </div>
            )}
            
            </>
            )
          }
          
          export default Master
          