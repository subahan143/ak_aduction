/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState} from "react";

const Attendance = ({setUser}) => {
    const [showOverall, setShowOverall] = useState(false);
    const [showClass_wise, setshowClass_wise] = useState(false);
    
    useEffect(() => {
        setUser(true);
    }, []);
    
    const handleReportTypeChange = (e) => {
        setShowOverall(e.target.value === "Overall");
        setshowClass_wise(e.target.value === "Class wise");
    };
    
    return (
        <>
        <div className="flex flex-col h-screen w-2/2 ml-[10rem] items-center bg-gray-100 justify-center"> 
        <div className="w-full h-[15vh] border-b-4 border-black flex items-center justify-center text-3xl font-bold">
        <span>Choose Export</span>
        </div>
        
        <div className="w-full h-[85vh] flex items-center justify-center gap-2">
        
        <div className="w-[32%] h-[85%] flex flex-col items-center gap-5">
        <span className="text-2xl font-extrabold">Attendance Reports</span>
        <form className="flex flex-col gap-10 items-center justify-center">
        <select className="w-56 h-10 rounded-md border-2">
        <option value="">Select Class</option>
        </select>
        <input className="w-56 pl-3 h-12 text-white font-extrabold bg-gray-700 rounded-md border-2" type="date" name="" id="" />
        <button className="w-24 h-12 bg-blue-700 text-white rounded-md hover:bg-blue-500 font-semibold">search</button>
        </form>
        </div>
        
        <div className="w-[32%] h-[85%] flex items-center gap-2 flex-col">
        <span className="text-2xl font-extrabold">Caste Reports</span>
        <select className="w-56 h-10 rounded-md border-2" onChange={handleReportTypeChange} >
        <option value="">Select</option>
        <option value="Class wise">Class wise</option>
        <option value="Overall">Overall</option>
        </select>
        
        {showOverall && (
            <div className="w-full h-44 flex flex-col items-center justify-between ">
            <span className="text-red-500">ONLY ACTIVE STUDENT REPORTS</span>
            <input className="w-56 h-10 rounded-md border-2 bg-gray-200 placeholder:text-gray-400" type="text"  placeholder="Caste name"/>
          
            <button className="w-24 h-12 bg-blue-700 text-white rounded-md hover:bg-blue-500 font-semibold">search</button>

            </div>
            )}
            {showClass_wise && (
                <div className="w-full h-64 flex  flex-col items-center justify-center gap-5">
                       <span className="text-red-500">ONLY ACTIVE STUDENT REPORTS</span>
            <input className="w-56 h-10 rounded-md border-2 bg-gray-200 placeholder:text-gray-400" type="text"  placeholder="Caste name"/>
            <select className="w-56 h-10 rounded-md border-2">
            <option value="">Select</option>
            </select>
            <button className="w-24 h-12 bg-blue-700 text-white rounded-md hover:bg-blue-500 font-semibold">search</button>
                </div>
                )}
                </div>
                
                <div className="w-[32%] h-[85%] flex items-center flex-col">
                <span className="text-2xl font-extrabold">Fee Reports</span>
                <form className="h-48 flex flex-col items-center justify-center gap-10">
                <select className="w-56 h-10 rounded-md border-2">
                <option value="">Select</option>
                </select>
                <button className="w-24 h-12 bg-blue-700 text-white rounded-md hover:bg-blue-500 font-semibold">Search</button>
                </form>
                </div>
                </div>
                </div>
                </>
                )
            }
            
            export default Attendance;
            
            