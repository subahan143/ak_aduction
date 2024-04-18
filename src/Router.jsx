import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import Loader from "./app/components/Loader";


// institue imports
const InstituteRegister = lazy(() =>
import("./app/screens/institute/Register")
);
// management imports
const MangamentRegister = lazy(() =>
import("./app/screens/managements/Register")
);

const HomePage = lazy(() => import("./app/screens/HomePage"));

// this is home_pge
const Home = lazy(() => import("./app/screens/institute/Home"));
// search import
const Search = lazy(() => import("./app/screens/institute/Search"));
// adding page import
const Adding = lazy(() => import("./app/screens/institute/Adding"));
// Navbar import
const Navbar = lazy(() => import("./app/components/Navbar"));
// Deactive page import
const Deactive = lazy(() => import("./app/screens/institute/Deactive"));
// Accounts page import
const Accounts = lazy(() => import("./app/screens/institute/Accounts"));
// Hotels page import
const Hotels = lazy(() => import("./app/screens/institute/Hotels"));
// Libary page import
const Libary = lazy(() => import("./app/screens/institute/Library"));
// Transport page import
const Transport = lazy(() => import("./app/screens/institute/Transport"));
// Masterpage import

const Master = lazy(() => import("./app/screens/institute/Master"));


{/* .....Dashboard home...... */}

// Home student
const Student = lazy(()=>import("./app/screens/institute/Popup/Student"));
// Home staff
const Staff= lazy(()=>import("./app/screens/institute/Popup/Staff"));
// Home Departments
const Departments=lazy(()=>import("./app/screens/institute/Popup/Departments"));
// Home Transport
const HomeTransport= lazy(()=>import("./app/screens/institute/Popup/Transport"));
// Home Library
const HomeLibrary=lazy(()=>import("./app/screens/institute/Popup/Library"));
// Home Access
const Access=lazy(()=>import("./app/screens/institute/Popup/Access"));
// Home Hostel
const HomeHostel=lazy(()=>import("./app/screens/institute/Popup/Hostel"));
// Notifications page
const Notifications=lazy(()=>import("./app/screens/institute/Popup/Notifications"));
// {....Master popup page...}
{/* Attendance popup page */}
const Attendance = lazy(()=> import("./app/screens/institute/Master_Popup/Attendance"));
//  {.....Progress_Card popup page..}
const Progress_Card = lazy (()=>import("./app/screens/institute/Master_Popup/Progress_Card"));
// {...Export Reports popup page...}
const Export_Reports=lazy(()=>import("./app/screens/institute/Master_Popup/Export_Reports"))

const Router = () => {
  
  
  const [user, setUser]   = useState(false);
  
  
  return (
    <BrowserRouter>
    <Suspense fallback={<Loader/>}>
    <Routes>
    <Route path="/components/Navbar" element={<Navbar/>} />
    <Route path="/" element={<HomePage />} />
    {/* Institute  */}
    <Route path="/institute/register" element={<InstituteRegister setUser={setUser} />} />
    {/* managements */}
    
    <Route path="/managment/register" element={<MangamentRegister />} />
    
    {/* this is home_page */}
    <Route path="/institute/home" element={<Home setUser={setUser} />} />
    {/* search page */}
    <Route path="/institute/search" element={<Search setUser={setUser}/>} />
    {/* Adding page */}
    <Route path="/institute/Adding" element={<Adding setUser={setUser}/>}/>
    {/* Deactive page */}
    <Route path="/institute/Deactive" element={<Deactive setUser={setUser}/>}/>
    
    {/* Accounts page */}
    <Route path="/institute/Accounts" element={<Accounts setUser={setUser}/>}/>
    {/* Hotels page */}
    <Route path="/institute/Hotels" element={<Hotels setUser={setUser}/>}/>
    {/* Libary page */}
    <Route path="/institute/Libary" element={<Libary setUser={setUser}/>}/>
    {/* Transport page */}
    <Route path="/institute/Transport" element={<Transport setUser={setUser}/>}/>
    {/* Master page */}
    <Route path="/institute/Master" element={<Master setUser={setUser}/>}/>
    
    
    {/* .....Dashboard home...... */}
    
    {/* home student */}
    <Route path='/home/student' element={<Student setUser={setUser}/>}/>
    {/* home staff */}
    <Route path="/home/staff" element={<Staff setUser={setUser}/>} />
    {/* home Departments */}
    <Route path="/home/Departments" element={<Departments setUser={setUser}/>}/>
    {/* home Transport */}
    <Route path="/home/Transport" element={<HomeTransport setUser={setUser}/>}/>
    {/* home Library */}
    <Route path='/home/Library' element={<HomeLibrary setUser={setUser}/>}/>
    {/* home Access */}
    <Route path='/home/Access' element={<Access setUser={setUser}/>}/>
    {/* home Hostel */}
    <Route path="/home/Hostel" element={<HomeHostel setUser={setUser}/>}/>
    {/* Notifications page */}
    <Route path="/home/Notifications" element={<Notifications setUser={setUser}/>}/>
    
{/*....Master popup page...*/}
    {/* Attendance popup page */}
    <Route path="/Master/Attendance" element={<Attendance setUser={setUser}/>}/>
  {/*Progress_Card popup page */}
  <Route path="/Master/Progress_Card" element={<Progress_Card setUser={setUser}/>}/>
{/*...Export Reports popup page...*/}
<Route path="/Master/Export_Reports" element={<Export_Reports setUser={setUser}/>}/>

    </Routes>
    </Suspense>
    
    <div className="flex  bg-slate-400">
    {user ?    
      <div className="flex border-black">
      <Navbar />
      </div>  :  null}
      
      
      
      </div>
      
      </BrowserRouter>
      );
    };
    
    export default Router;
    