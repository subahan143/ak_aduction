import { Link } from "react-router-dom"
import logo from "../components/logo.png"
const Home_page = () => {
  return (
  <>
  <section className="  w-full h-screen bg-gray-200 ">

<div className="w-full h-screen  flex flex-col ">

  <nav className="w-full h-1/6  border-b-2  flex items-center justify-between px-5 ">

  <img className="w-[200px] h-[90px] " src={logo} alt="logo"/>
  
  <button className="hover:bg-gray-500 text-blue-300 hover:text-white hover:rounded-xl px-2 py-3 font-bold ">Need Help</button>
  </nav>

  <div className="w-full h-screen flex items-center justify-around flex-col   ">
    <h1 className="text-slate-800 font-extrabold text-4xl">Login As</h1>
<div className="w-full  flex items-center justify-evenly ">
<div className=" relative  w-[40%] h-[50vh] flex bg-[url('https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D')] bg-no-repeat bg-cover bg-center rounded-2xl ">
<div className="w-full h-[50vh] rounded-2xl  bg-black absolute top-0 opacity-30 "></div>
<div className="w-full h-[50vh] absolute top-0  flex items-center justify-center ">
<Link to="/managment/register"><button className="py-4 px-5  hover:bg-blue-400 bg-blue-500 rounded-md  text-white">Mangament</button>
</Link>
</div>
</div>
<div className=" relative  w-[40%] h-[50vh] flex bg-[url('https://img.freepik.com/free-vector/illustration-university-graduates_53876-28466.jpg')] bg-no-repeat bg-cover bg-center rounded-2xl ">
<div className="w-full h-[50vh] rounded-2xl  bg-black absolute top-0 opacity-30 "></div>
<div className="w-full h-[50vh] absolute top-0  flex items-center justify-center ">
<Link to="/institute/register"><button className="py-4 px-5 hover:bg-blue-300 text-white bg-blue-500 rounded-md  ">Institute</button>
</Link></div>
</div>

</div>
<p className="text-slate-800 font-extrabold text-xl">Download the App for students And Management/Staff</p>
   
  </div>

</div>



  </section>
  
  </>
  )
}

export default Home_page
