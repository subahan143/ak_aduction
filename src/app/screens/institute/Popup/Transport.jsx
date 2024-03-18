

const Transport = () => {
  return (
   <>
   
   <div className="flex h-screen w-2/2 items-center bg-slate-200 border-2 border-red-600 flex-col justify-center ml-[10rem] ">
   <div className="w-full h-28 flex items-center justify-between px-20">

<h1 className="text-2xl font-extrabold">Management-Staff</h1>
<a className="w-32 h-1/3 hover:text-white hover:bg-cyan-700 transition-all duration-100 ease-in rounded-md bg-cyan-900 justify-center flex items-center" href="/institute/home"><i className="fa-sharp fa-solid fa-arrow-left"></i></a>

</div>
<div className="w-full h-full flex flex-col items-center gap-5 ">
  <span className="w-[70%] h-[40px] bg-white flex items-center justify-between px-4  rounded-md">
    <h1 className="text-sm font-extrabold">Vehicle Number</h1>
    <p className="text-sm">Route</p>
  </span>
 
</div>

  </div>
   </>
  )
}

export default Transport
