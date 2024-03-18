/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const Library = ({setUser}) => {
  useEffect(() => {
    setUser(true);
  }, []);
  return (
    <>
    
    <div className="flex h-screen w-2/2  bg-gray-100 items-center justify-center ml-[10rem] flex-col">
    <div className="w-full h-[15vh] flex items-center justify-center text-4xl border-b-4 border-black font-extrabold">
    <h1>Library</h1>
    </div>
    <div className= " w-full h-full flex flex-wrap gap-10 items-center justify-center">
    <span className="cursor-pointer rounded-lg w-[260px] h-[140px] bg-white-200 flex shadow-md border-2 hover:border-2 hover:border-[#5ddf4c] border-gray-500  shadow-gray-500 flex-col items-center justify-center hover:shadow-lg hover:duration-300 hover:scale-95 ease-in hover:shadow-[#5ddf4c]">
    <i className="fa-solid fa-list text-[#5ddf4c] text-3xl"></i>
    <h1 className="text-xl font-extrabold">All Books</h1>
    <p className="text-sm">All the Books from all categories</p>    
    </span>
    <span className="cursor-pointer rounded-lg w-[260px] h-[140px] bg-white-200 flex shadow-md border-2 hover:border-2 hover:border-[#be185d] border-gray-500  shadow-gray-500 flex-col items-center justify-center hover:shadow-lg hover:duration-300 hover:scale-95 ease-in hover:shadow-[#be185d]">
    <i className="fa-solid fa-book-bookmark text-3xl text-[#be185d] "></i>
    <h1 className="text-xl font-extrabold">Add Books</h1>
    <p className="text-sm">Add New Book with name and category</p>    
    </span>
    <span className="cursor-pointer rounded-lg w-[260px] h-[140px] bg-white-200 flex shadow-md border-2 border-gray-500  shadow-gray-500 flex-col items-center justify-center hover:shadow-lg hover:duration-300 hover:scale-95 ease-in hover:shadow-pink-300 hover:border-[#f9a8d4]">
    
    <svg xmlns="http://www.w3.org/2000/svg" fill="pink" viewBox="0 0 24 24" strokeWidth="0" stroke="currentColor" className="w-14 h-14">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>

    <h1 className="text-xl font-extrabold">Issue Book</h1>
    <p className="text-sm">Issue A book To Student/Staff</p>    
    </span>
    <span className="cursor-pointer rounded-lg w-[260px] h-[140px] bg-white-200 flex shadow-md border-2 border-gray-500  shadow-gray-500 flex-col items-center justify-center hover:shadow-lg hover:duration-300 hover:scale-95 ease-in hover:shadow-[#fde047] hover:border-[#fde047]">
    <i className="fa-solid fa-book text-[#fde047] text-3xl"></i>
    <h1 className="text-xl font-extrabold">  Return Book</h1>
    <p className="text-sm">Return Book from Student/Staff</p>    
    </span>
   

    <span className="cursor-pointer rounded-lg w-[260px] h-[140px] bg-white-200 flex shadow-md border-2 border-gray-500  shadow-gray-500 flex-col items-center justify-center hover:shadow-lg hover:duration-300 hover:scale-95 ease-in hover:shadow-[#4b8143] hover:border-[#4b8143]">
    <i className="fa-solid fa-book-open-reader text-3xl text-green-800"></i>
    <h1 className="text-xl font-extrabold">  Issued Books</h1>
    <p className="text-sm">Currently Issued Books</p>   
    </span>
    <span className="cursor-pointer rounded-lg w-[260px] h-[140px] bg-white-200 flex shadow-md border-2 border-gray-500  shadow-gray-500 flex-col items-center justify-center hover:shadow-lg hover:duration-300 hover:scale-95 ease-in hover:shadow-orange-700 hover:border-orange-600">
    <i className="fa-solid fa-book-open text-3xl text-orange-700 "></i>
    <h1 className="text-xl font-extrabold"> Received History</h1>
    <p className="text-sm">All Received History from Students/Staff</p>    
    </span>
    
    </div>
    </div>
    
    </>
    )
  }
  
  export default Library
  