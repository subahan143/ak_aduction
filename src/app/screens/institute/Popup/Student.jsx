
const Student = () => {
  return (
    <>
    <div className="flex h-screen relative w-2/2 items-center bg-slate-200 border-2 border-red-600 flex-col justify-center ml-[10rem] ">
    <div className="w-full items-center h-full flex flex-col">
    <span className="w-full h-24 items-center flex justify-between px-28">
    <span className="font-bold text-2xl">Students</span>
    <a className="w-32 h-1/3 hover:text-white hover:bg-cyan-700 transition-all duration-100 ease-in rounded-md bg-cyan-900 justify-center flex items-center"
    href="/institute/home">
    <i className="fa-sharp fa-solid fa-arrow-left">
    </i>
    </a>
    </span>
    <div className="flex w-5/6 h-5/6 items-center  text-sm  flex-col pt-3">
    <span className="w-5/6 h-12 border-2 mb-3  flex  justify-between px-4 items-center bg-white rounded h">
    <span className="font-bold w-1/4 flex justify-center items-center">EMail
    </span>
    <span className="w-1/4 flex justify-center items-center">Name</span>
    <span className="w-1/4 flex justify-center items-center">className</span>
    <span className="w-1/4 flex justify-center items-center">Appli.</span>
    </span>
    <div className="flex flex-col w-5/6 h-90 overflow-y-scroll">
    </div>
    </div>
    </div>
    </div>
    
    </>
    )
  }
  
  export default Student
  