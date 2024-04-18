/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Adding = ({ setUser }) => {
  const [AddingForm , setAddingForm ]=useState(true)
  const [studentForm, setStudentForm] = useState(false);
  const [department,setDepartment] =useState(false)
  const [staff,setStaff]=useState(false)
  const [hostel,setHostel]=useState(false)
  const [transport,setTransport] =useState(false)
  useEffect(() => {
    setUser(true);
    
  }, []);
  return (
    <>
      {studentForm && (
        <div
       
          className="flex h-screen w-2/2 ml-[10%] flex-col relative overflow-y-scroll items-center justify-center "
        >
          <div className="w-[90%] h-24 bg-blue-300 rounded-xl flex items-center justify-between  overflow-y-scroll border-b-4 absolute top-0 border-red-300 px-2 font-bold">
            <h1 className="text-2xl">Fill the form</h1>

            <i    onClick={() =>{ setStudentForm(false) ; setAddingForm(true); } } className="fa-solid fa-xmark bg-pink-200 w-[30px] h-[30px] rounded-md flex items-center justify-center hover:bg-gray-600 hover:text-white"></i>
          </div>
          <div className="w-[90%] h-screen bg-white shadow-lg   rounded-t-xl overflow-scroll flex items-center justify-center ">
            <form className="w-[90%] pt-60 h-[150vh] flex items-center justify-center flex-col ">
              <div className="w-full h-[10%]  border-b-2 border-black flex items-center justify-between">
                <span className="flex flex-col">
                  <label className="text-sm ">Name:-</label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    Father-Name:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    Mother-Name:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                  />
                </span>
              </div>
              <div className="w-full h-[35%]  border-b-2 border-black flex items-center justify-between flex-wrap">
                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    Contact:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="number"
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm" htmlFor="">
                    Email:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="Email"
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    Password:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="Password"
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm" htmlFor="">
                    Religion:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    Caste:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    Sub -Caste:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm" htmlFor="">
                    Father Contact:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    Father Occupation:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    Father Qulification:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    Mother Contact:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    Mother Occupation:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    Mother Qulification:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                  />
                </span>
              </div>
              <div className="w-full h-[10%]  border-b-2 border-black flex items-center justify-between">
                <span className="flex flex-col">
                  <label className="text-sm">Academic year:-</label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    placeholder="24"
                    value={18}
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    Admission Number:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                    value={20}
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    DOB*:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="date"
                  />
                </span>
              </div>
              <div className="w-full h-[10%]  border-b-2 border-black flex items-center justify-between">
                <span className="flex flex-col">
                  <label className="text-sm ">Class *:-</label>
                  <select
                    className="w-[150px] h-7 border-2 border-black rounded-md"
                    id=""
                  >
                    <option value="">Select</option>
                    <input
                      className="rounded-md border-2 border-black"
                      type="text"
                    />
                  </select>
                </span>

                <span className="flex flex-col">
                  <label className="text-sm" htmlFor="">
                    Department:-
                  </label>
                  <select
                    className="w-[150px] h-7 border-2 border-black rounded-md"
                    id=""
                  >
                    <option value="">Select</option>
                    <option value="">main</option>
                    <input
                      className="  rounded-md border-2 border-black"
                      type="text"
                    />
                  </select>
                </span>

                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    Section:-
                  </label>
                  <select
                    className="w-[150px] h-7 border-2 rounded-md border-black"
                    id=""
                  >
                    <option value="">select</option>
                    <option value="">A</option>
                    <option value="">B</option>
                    <option value="">C</option>
                    <option value="">D</option>
                    <option value="">E</option>
                    <option value="">F</option>
                    <option value="">G</option>
                  </select>
                </span>
              </div>
              <div className="w-full h-[10%]  border-b-2 border-black flex items-center justify-between">
                <span className="flex flex-col">
                  <label className="text-sm ">Aadhaar Number:-</label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    Mother Aadhaar:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                  />
                </span>

                <span className="flex flex-col">
                  <label className="text-sm " htmlFor="">
                    Father Aadhaar:-
                  </label>
                  <input
                    className="w-[150px] rounded-md border-2 border-black"
                    type="text"
                  />
                </span>
              </div>
              <div className="w-full h-[10%]  border-b-2 border-black flex items-center justify-between">
                <span className="flex  items-center justify-start">
                  <label className="text-sm ">Address:-</label>

                  <textarea
                    className="border-2 rounded-md resize-none w-2/4 h-[50px] border-black rounde"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </span>
              </div>
              <div className="w-full h-[8%] flex items-center justify-center">
                <button className="border-2 text-sm bg-green-200 border-blue-500 rounded-md py-2 px-7 font-bold">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      { department &&(
         <div className="flex h-screen w-2/2 ml-[10%] flex-col relative overflow-y-scroll items-center justify-center ">
         <div className="w-[90%] h-24 bg-purple-700 rounded-xl flex items-center justify-between  overflow-y-scroll border-b-4 absolute top-0 border-red-300 px-2 font-bold">
         <h1 className="text-2xl text-yellow-50">Fill the form</h1>
         
         <i  onClick={()=>{ setDepartment(false); setAddingForm(true);}} className="fa-solid fa-xmark bg-pink-200 w-[30px] h-[30px] rounded-md flex items-center justify-center hover:bg-gray-600 hover:text-white"></i>
         </div>
         <div className="w-[90%] h-screen bg-white shadow-lg   rounded-t-xl  flex items-center justify-center ">
         <form className="w-[90%] h-screen flex items-center justify-center flex-col ">
         <div className="w-full h-[20vh] border-b-2 border-black flex items-center justify-between">
         
         <span className="flex flex-col">
         <label className="text-sm " >Department Name *:-</label>
         <input className="w-[150px] rounded-md border-2 border-black" type="text" />
         </span>
         
         <span className="flex flex-col">
         <label className="text-sm " htmlFor="">Department Head *:-</label>
         <input className="w-[150px] rounded-md border-2 border-black" type="text" />
         </span>
         <span className="flex flex-col">
         <label className="text-sm " htmlFor="">Contact *:-</label>
         <input className="w-[150px] rounded-md border-2 border-black" type="text" />
         </span>
         
         </div>
         <div className="w-full h-[30vh] flex items-center justify-between">
         
         <span className="flex flex-col">
         <label className="text-sm " htmlFor="">Email *:-</label>
         <input className="w-[150px] rounded-md border-2 border-black" type="text" />
         </span>
         
         <span className="flex flex-col">
         <label className="text-sm " htmlFor="">Password *:-</label>
         <input className="w-[150px] rounded-md border-2 border-black" type="text" />
         </span>
         
         
         </div>
         <div className="w-full h-[15vh] flex items-center justify-center">
         
         <button className="border-2 border-purple-700 hover:bg-purple-400 hover:text-white rounded-md font-bold px-4 py-2">SUBMIT</button>
         
         </div>
         
         
         </form>
         </div>
            </div>
      )}
      {staff &&(
          <div  className="flex h-screen w-2/2 ml-[10%] flex-col relative overflow-y-scroll items-center justify-center ">
          <div className="w-[90%] h-24 bg-yellow-200 rounded-xl flex items-center justify-between  overflow-y-scroll border-b-4 absolute top-0 border-red-300 px-2 font-bold">
          <h1 className="text-2xl">Fill the form</h1>
          
          <i onClick={()=> {setStaff(false); setAddingForm(true);}} className="fa-solid fa-xmark bg-pink-200 w-[30px] h-[30px] rounded-md flex items-center justify-center hover:bg-gray-600 hover:text-white"></i>
          </div>
          <div className="w-[90%] h-screen bg-white shadow-lg   rounded-t-xl overflow-scroll flex items-center justify-center ">
          <form className="w-[90%] pt-60 h-[150vh] flex items-center justify-center flex-col ">
          <div className="w-full h-[10%]  border-b-2 border-black flex items-center justify-between">
          
          <span className="flex flex-col">
          <label className="text-sm " >Name:-</label>
          <input className="w-[150px] rounded-md border-2 border-black" type="text" />
          </span>
          
          <span className="flex flex-col">
          <label className="text-sm " htmlFor="">Father-Name:-</label>
          <input className="w-[150px] rounded-md border-2 border-black" type="text" />
          </span>
          
          <span className="flex flex-col">
          <label className="text-sm " htmlFor="">Mother-Name:-</label>
          <input className="w-[150px] rounded-md border-2 border-black" type="text" />
          </span>
          
          </div>
          <div className="w-full h-[40%]  border-b-2 border-black flex items-center justify-between flex-wrap">
          
          <span className="flex flex-col">
          <label className="text-sm " htmlFor="">Contact:-</label>
          <input className="w-[150px] rounded-md border-2 border-black" type="number" />
          </span>
          
          <span className="flex flex-col">
          <label className="text-sm" htmlFor="">Email:-</label>
          <input className="w-[150px] rounded-md border-2 border-black" type="Email" />
          </span>
          
          <span className="flex flex-col">
          <label className="text-sm " htmlFor="">Password:-</label>
          <input className="w-[150px] rounded-md border-2 border-black" type="Password" />
          </span>
          
          <span className="flex flex-col">
          <label className="text-sm" htmlFor="">Father Contact:-</label>
          <input className="w-[150px] rounded-md border-2 border-black" type="text" />
          </span>
          
          <span className="flex flex-col">
          <label className="text-sm " htmlFor="">DOB:-</label>
          <input className="w-[150px] rounded-md border-2 border-black" type="date" />
          
          </span>
          <span className="flex flex-col">
          <label className="text-sm " >Class:-</label>
          <select className="w-[150px] h-7 border-2 border-black rounded-md" id="">
            <option value="">Select</option>
          <input className="rounded-md border-2 border-black" type="text" />
          </select>
          </span>
          <span className="flex flex-col">
          <label className="text-sm" htmlFor="">Department:-</label>
          <select className="w-[150px] h-7 border-2 border-black rounded-md" id="">
            <option value="">Select</option>
            <option value="">main</option>
          <input className="  rounded-md border-2 border-black" type="text" />
          </select>
          </span>
          <span className="flex flex-col">
          <label className="text-sm " htmlFor="">Section:-</label>
          <select className="w-[150px] h-7 border-2 rounded-md border-black" id="">
            <option value="">select</option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="">C</option>
            <option value="">D</option>
            <option value="">E</option>
            <option value="">F</option>
            <option value="">G</option>
          </select>
          </span>
        
          </div>
          
          <div className="w-full h-[25%]  border-b-2 border-black flex items-center justify-between">
          <span className="flex flex-col">
          <label className="text-sm " >Aadhaar Number:-</label>
          <input className="w-[150px] rounded-md border-2 border-black" type="text" />
          </span>
          
          
          <span className="flex flex-col">
          <label className="text-sm " htmlFor="">Address:-</label>
          <textarea className="border-2 rounded-md border-black" id="" cols="25" rows="2"></textarea>
          </span>
          
          <span className="flex flex-col">
          <label className="text-sm " htmlFor="">Role:-</label>
          <select className="w-[150px] h-7 border-2 rounded-md border-black" id="">
            <option value="">select</option>
            <option value="">TEACHER</option>
            <option value="">ACCOUNTANT</option>
            <option value="">DRIVER</option>
            <option value="">OTHER</option>
          
          </select>
          </span>
          
          </div>
          
          <div className="w-full h-[10%] flex items-center justify-center">
            <button className="border-2 text-sm hover:bg-yellow-200 border-yellow-500 rounded-md py-2 px-7 font-bold">SUBMIT</button>
          </div>
          
          </form>
          </div>
             </div>
      )}
      { hostel &&(
    <div  className="flex h-screen w-2/2 ml-[10%] flex-col relative items-center justify-center ">
    <div className="w-[90%] h-24 bg-green-300 rounded-xl flex items-center justify-between   border-b-4 absolute top-0 border-red-300 px-2 font-bold">
    <h1 className="text-2xl">Fill the form</h1>
    
    <i onClick={()=>{setHostel(false); setAddingForm(true);}} className="fa-solid fa-xmark bg-pink-200 w-[30px] h-[30px] rounded-md flex items-center justify-center hover:bg-gray-600 hover:text-white"></i>
    </div>
    <div className="w-[90%] h-screen bg-white shadow-lg   rounded-t-xl flex items-center justify-center ">
    <form className="w-[90%] pt-10 h-[90vh] flex items-center justify-center flex-col ">
    <div className="w-full h-[20%]  border-b-2 border-black flex items-center justify-between">
    
    <span className="flex flex-col">
    <label className="text-sm " >Hostel Name:-</label>
    <input className="w-[150px] rounded-md border-2 border-black" type="text" />
    </span>
    
    <span className="flex flex-col">
    <label className="text-sm " htmlFor="">Warden Name:-</label>
    <input className="w-[150px] rounded-md border-2 border-black" type="text" />
    </span>
    
    <span className="flex flex-col">
    <label className="text-sm " htmlFor="">Contact:-</label>
    <input className="w-[150px] rounded-md border-2 border-black" type="text" />
    
    </span>
    
    
    </div>
    <div className="w-full h-[30%]  border-b-2 border-black flex items-center justify-between flex-wrap">
    
    <span className="flex flex-col">
    <label className="text-sm " htmlFor="">Address:-</label>
    <textarea className="border-2 rounded-md border-black" id="" cols="25" rows="2"></textarea>
    </span>
    
    </div>
    
    <div className="w-full h-[25%]  border-b-2 border-black flex items-center justify-between">
    <span className="flex flex-col">
    <p className="text-sm">Beds <b className="text-red-600">( go in the format of 101 102 103 104 / after every room number leave a space) *</b></p>
    <textarea className="border-2 rounded-md border-black" id="" cols="25" rows="2"></textarea>
    </span>
    
    </div>
    
    <div className="w-full h-[15%] flex items-center justify-center">
      <button className="border-2 text-sm hover:bg-green-300 border-green-500 rounded-md py-2 px-7 font-bold">SUBMIT</button>
    </div>
    
    </form>
    </div>
       </div>
      )}
      { transport &&(
        
        <div  className="flex h-screen w-2/2 ml-[10%] flex-col relative items-center justify-center ">
        <div className="w-[90%] h-24 bg-purple-600 rounded-xl flex items-center justify-between   border-b-4 absolute top-0 border-red-300 px-2 font-bold">
        <h1 className="text-2xl">Fill the form</h1>
        
        <i onClick={()=>{ setTransport(false); setAddingForm(true);}} className="fa-solid fa-xmark bg-pink-200 w-[30px] h-[30px] rounded-md flex items-center justify-center hover:bg-gray-600 hover:text-white"></i>
        </div>
        <div className="w-[90%] h-screen bg-white shadow-lg   rounded-t-xl flex items-center justify-center ">
        <form className="w-[90%] pt-10 h-[90vh] flex items-center justify-center flex-col ">
        <div className="w-full h-[40%]  border-b-2 border-black flex items-center justify-between">
        
        <span className="flex flex-col">
        <label className="text-sm " >Vehicle Number:-</label>
        <input className="w-[150px] rounded-md border-2 border-black" type="text" />
        </span>
        
        <span className="flex flex-col">
        <label className="text-sm " htmlFor="">Vehicle Route:-</label>
        <input className="w-[150px] rounded-md border-2 border-black" type="text" />
        </span>
        
        <span className="flex flex-col">
        <label className="text-sm " htmlFor="">Vehicle Type:-</label>
        <input className="w-[150px] rounded-md border-2 border-black" type="text" />
        
        </span>
        
        </div>
        
        <div className="w-full h-[25%] flex items-center justify-center">
          <button className="border-2 text-sm hover:bg-purple-500 border-purple-600 rounded-md py-2 px-7 font-bold">SUBMIT</button>
        </div>
        
        </form>
        </div>
           </div>
      )

      }
{ AddingForm && (
        <div
        id="student"
        className="flex flex-col h-screen w-2/2 ml-[10rem] items-center bg-gray-100 justify-center"
      >
        <div className="flex-wrap w-full flex items-center justify-center gap-20">
        
          <span
       onClick={() => {
        setStudentForm(true);
        setAddingForm(false);
      }}
      
            className="w-[150px] h-[150px] cursor-pointer flex items-center gap-5 flex-col justify-center rounded-[50%] shadow-lg shadow-black  transition-all  duration-700 ease-in-out  hover:rounded-lg hover:text-white hover:shadow-sky-300 hover:bg-[url('https://media.istockphoto.com/id/621484894/photo/abstract-background-green.webp?b=1&s=170667a&w=0&k=20&c=QIfZL_O-aMALU8dndiBfi6WnNL__5c0V4Gi9WO5gs9Q=')]"
          >
            <i className="fa-sharp fa-solid text-4xl fa-graduation-cap"></i>
            <h1 className="text-sm font-bold">Add Student</h1>
          </span>

    

            <span onClick={()=>{setDepartment(true) ;setAddingForm(false); }} className="w-[150px] h-[150px] cursor-pointer   flex  items-center gap-5 flex-col justify-center rounded-[50%] shadow-lg shadow-black transition-all duration-700 ease-in-out  hover:rounded-lg hover:text-white hover:shadow-[#CD853F] hover:bg-[url('https://media.istockphoto.com/id/1178390169/photo/modern-abstract-background.jpg?s=1024x1024&w=is&k=20&c=7yFSegXWBbXj8cq-4C9vyftk6ILJoxyIPpF7DugWdBs=')]">
              <i className="fa-sharp fa-solid text-4xl fa-building-user"></i>
              <h1 className="text-sm font-bold">Add Department</h1>
            </span>
          

        
      
            <span onClick={()=>{setStaff(true) ; setAddingForm(false);} }  className="w-[150px] h-[150px] cursor-pointer flex items-center gap-5 flex-col justify-center rounded-[50%] shadow-lg shadow-black transition-all duration-700 ease-in-out  hover:rounded-lg hover:text-white hover:shadow-[#9ACD32] hover:bg-[url('https://media.istockphoto.com/id/1138844199/photo/blurred-abstract-background.webp?b=1&s=170667a&w=0&k=20&c=2glIrARrhkfWPv54qJOPOrqh9OAV1jNA7Llc0879uBg=')]">
              <i className="fa-sharp fa-solid text-4xl fa-clipboard-user"></i>
              <h1 className="text-sm font-bold">Add Staff</h1>
            </span>
     
          <div className="flex-wrap w-full flex items-center justify-center gap-20">
          
              <span onClick={()=>{setHostel(true); setAddingForm(false);}} className="w-[150px] h-[150px] cursor-pointer flex items-center gap-5 flex-col justify-center rounded-[50%] shadow-lg shadow-black transition-all duration-700 ease-in-out  hover:rounded-lg hover:text-white hover:shadow-[#D2691E] hover:bg-[url('https://media.istockphoto.com/id/837011094/photo/defocused-blurred-motion-abstract-background-orange-yellow.webp?b=1&s=170667a&w=0&k=20&c=PPVNPKJMhYJSeNzMRBqifhXgIiFkeNLOI_jpIWlpTmg=')]">
                <i className="fa-sharp fa-solid text-4xl fa-building-lock"></i>
                <h1 className="text-sm font-bold">Add Hostel</h1>
              </span>
            

              <span onClick={()=>{ setTransport(true) ; setAddingForm(false);}} className="w-[150px] h-[150px] cursor-pointer flex items-center gap-5 flex-col justify-center rounded-[50%] shadow-lg shadow-black transition-all duration-700 ease-in-out  hover:rounded-lg hover:text-white hover:shadow-[#9370DB] hover:bg-[url('https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D')]">
                <i className="fa-sharp fa-solid text-4xl fa-van-shuttle"></i>
                <h1 className="text-sm font-bold">Add Transport</h1>
              </span>
          </div>
        </div>
      </div>
)}
    </>
  );
};

export default Adding;
