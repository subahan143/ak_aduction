/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const Library = ({ setUser }) => {
  const [allbooks, setAllbooks] = useState(false);
  const [addbook, setAddbook] = useState(false);
  const [issuebook, setIssueBook] = useState(false);
  const [returnBook, setReturnBook] = useState(false);
  const [issuedBooks,setIssuedBooks]=useState(false);
  const [received,setReceived]=useState(false)
  
  useEffect(() => {
    setUser(true);
  }, []);
  return (
    <>
    <div className="flex h-screen w-2/2  bg-gray-100 items-center justify-center ml-[10rem] flex-col">
    <div className="w-full h-[15vh] flex items-center justify-center text-4xl border-b-4 border-black font-extrabold">
    <h1>Library</h1>
    </div>
    <div className=" w-full h-full flex flex-wrap gap-10 items-center justify-center">
    <span
    onClick={() => setAllbooks(true)}
    className="cursor-pointer rounded-lg w-[260px] h-[140px] bg-white-200 flex shadow-md border-2 hover:border-2 hover:border-[#5ddf4c] border-gray-500  shadow-gray-500 flex-col items-center justify-center hover:shadow-lg hover:duration-300 hover:scale-95 ease-in hover:shadow-[#5ddf4c]"
    >
    <i className="fa-solid fa-list text-[#5ddf4c] text-3xl"></i>
    <h1 className="text-xl font-extrabold">All Books</h1>
    <p className="text-sm">All the Books from all categories</p>
    </span>
    
    <span
    onClick={() => setAddbook(true)}
    className="cursor-pointer rounded-lg w-[260px] h-[140px] bg-white-200 flex shadow-md border-2 hover:border-2 hover:border-[#be185d] border-gray-500  shadow-gray-500 flex-col items-center justify-center hover:shadow-lg hover:duration-300 hover:scale-95 ease-in hover:shadow-[#be185d]"
    >
    <i className="fa-solid fa-book-bookmark text-3xl text-[#be185d] "></i>
    <h1 className="text-xl font-extrabold">Add Books</h1>
    <p className="text-sm">Add New Book with name and category</p>
    </span>
    
    <span
    onClick={() => setIssueBook(true)}
    className="cursor-pointer rounded-lg w-[260px] h-[140px] bg-white-200 flex shadow-md border-2 border-gray-500  shadow-gray-500 flex-col items-center justify-center hover:shadow-lg hover:duration-300 hover:scale-95 ease-in hover:shadow-pink-300 hover:border-[#f9a8d4]"
    >
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="pink"
    viewBox="0 0 24 24"
    strokeWidth="0"
    stroke="currentColor"
    className="w-14 h-14"
    >
    <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
    />
    </svg>
    
    <h1 className="text-xl font-extrabold">Issue Book</h1>
    <p className="text-sm">Issue A book To Student/Staff</p>
    </span>
    
    <span
    onClick={() => setReturnBook(true)}
    className="cursor-pointer rounded-lg w-[260px] h-[140px] bg-white-200 flex shadow-md border-2 border-gray-500  shadow-gray-500 flex-col items-center justify-center hover:shadow-lg hover:duration-300 hover:scale-95 ease-in hover:shadow-[#fde047] hover:border-[#fde047]"
    >
    <i className="fa-solid fa-book text-[#fde047] text-3xl"></i>
    <h1 className="text-xl font-extrabold"> Return Book</h1>
    <p className="text-sm">Return Book from Student/Staff</p>
    </span>
    
    <span onClick={()=> setIssuedBooks(true)} className="cursor-pointer rounded-lg w-[260px] h-[140px] bg-white-200 flex shadow-md border-2 border-gray-500  shadow-gray-500 flex-col items-center justify-center hover:shadow-lg hover:duration-300 hover:scale-95 ease-in hover:shadow-[#4b8143] hover:border-[#4b8143]">
    <i className="fa-solid fa-book-open-reader text-3xl text-green-800"></i>
    <h1 className="text-xl font-extrabold"> Issued Books</h1>
    <p className="text-sm">Currently Issued Books</p>
    </span>
    <span onClick={()=>setReceived(true)} className="cursor-pointer rounded-lg w-[260px] h-[140px] bg-white-200 flex shadow-md border-2 border-gray-500  shadow-gray-500 flex-col items-center justify-center hover:shadow-lg hover:duration-300 hover:scale-95 ease-in hover:shadow-orange-700 hover:border-orange-600">
    <i className="fa-solid fa-book-open text-3xl text-orange-700 "></i>
    <h1 className="text-xl font-extrabold"> Received History</h1>
    <p className="text-sm">All Received History from Students/Staff</p>
    </span>
    </div>
    </div>
    
    {allbooks && (
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="flex border-2 border-black w-[70%] h-[75vh] bg-white rounded-lg flex-col items-center justify-center">
      <div className="w-full relative h-1/5 border-b-2 flex items-end text-2x1 font-extrabold justify-center">
      <h1>Books (0)</h1>
      <i
      onClick={() => setAllbooks(false)}
      className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
      ></i>
      </div>
      <div className="relative w-[80%] h-3/4 overflow-x-auto top-1 shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className=" text-xs w-full text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
      <tr>
      <th className="px-6 py-2">BOOK NAME</th>
      <th className="px-6 py-2">CATEGORY</th>
      <th className="px-6 py-2"> DATE OF ADD</th>
      </tr>
      </thead>
      </table>
      </div>
      </div>
      </div>
      )}
      
      {addbook && (
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div className="flex border-2 border-black w-[60%] h-[75vh] bg-white rounded-lg flex-col items-center justify-center">
        <div className="w-full relative h-1/5 border-b-2 flex items-end justify-center">
        <h1 className="text-2xl font-semibold">Add A Book:</h1>
        <i
        onClick={() => setAddbook(false)}
        className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
        ></i>
        </div>
        <form className="relative w-[60%] h-3/4 border-2 top-1 shadow-md sm:rounded-lg items-center justify-center flex flex-col gap-10">
        <span className="flex-col w-52 flex itemsstart justify-center">
        <label className="font-extrabold" htmlFor="">
        Book Name:-
        </label>
        <input
        className="h-10 w-56 border-2 border-gray-500 rounded-xl pl-6"
        placeholder="Book Name"
        type="text"
        />
        </span>
        <span className="flex-col w-52 flex items-start justify-center">
        <label className="font-extrabold" htmlFor="">
        Book Category:-
        </label>
        <input
        className="h-10 w-56 border-2 border-gray-500 rounded-xl pl-6"
        placeholder="Book Category"
        type="text"
        />
        </span>
        <button className="border-2 px-3 py-2 rounded-xl bg-blue-600 text-white">
        Submit
        </button>
        </form>
        </div>
        </div>
        )}
        
        {issuebook && (
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="flex border-2 border-black w-[60%] h-[75vh] bg-white rounded-lg flex-col items-center justify-center">
          <div className="w-full relative h-1/5 border-b-2 flex items-end justify-center">
          <h1 className="text-2xl font-semibold">Issue Book::</h1>
          <i
          onClick={() => setIssueBook(false)}
          className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
          ></i>
          </div>
          <form className="relative w-[60%] h-3/4 border-2 top-1 shadow-md sm:rounded-lg items-center justify-center flex flex-col gap-3">
          <span className="flex-col w-52 flex itemsstart justify-center">
          <label htmlFor="">Email:- </label>
          <input
          className="h-10 w-56 border-2 border-gray-500 rounded-xl pl-6 placeholder:text-sm"
          placeholder="Email.."
          type="email"
          />
          </span>
          <span className="flex-col w-52 flex items-start justify-center">
          <label htmlFor="">Book Name:-</label>
          <input
          className="h-10 w-56 border-2 border-gray-500 rounded-xl pl-6 placeholder:text-sm"
          placeholder="Book Name.."
          type="text"
          />
          </span>
          <span className="flex-col w-52 flex items-start justify-center">
          <label htmlFor="">Department/ Category:-</label>
          <input
          className="h-10 w-56 border-2 border-gray-500 rounded-xl pl-6 placeholder:text-sm"
          placeholder=" Department/ Category.."
          type="text"
          />
          </span>
          <button className="border-2 px-3 py-2 rounded-xl bg-blue-600 text-white text-sm">
          Issue
          </button>
          </form>
          </div>
          </div>
          )}
          
          {returnBook && (
            <>
            <div className="flex w-full h-full absolute z-0 top-0 opacity-50 bg-slate-500"></div>
            
            <div className="flex  z-50 absolute top-[8rem] left-[13rem] flex-col transition-all bg-white items-center bg-gray-40 border-black border-2  ease-in  duration-150  rounded-md  w-2/3 h-2/3 shadow-xl">
            <span className="w-full h-12 bgp flex justify-end items-end px-5">
            <i
            onClick={() => setReturnBook(false)}
            className=" absolute right-5 top-4 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
            ></i>
            <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="defaultModal"
            >
            <span className="sr-only">Close modal</span>
            </button>
            </span>
            <span className="w-full flex justify-center items-center h-16">
            <form className="w-3/4 h-3/4">
            <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
            Search
            </label>
            <div className="relative">
            <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Student Email"
            required=""
            />
            <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Search
            </button>
            </div>
            </form>
            </span>
            <div className="relative w-3/4 overflow-x-auto overflow-y-scroll mt-3 h-60 shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
            Book Name
            </th>
            <th scope="col" className="px-6 py-3">
            Category
            </th>
            <th scope="col" className="px-6 py-3">
            Date Of Issue
            </th>
            <th scope="col" className="px-6 py-3">
            Actions
            </th>
            </tr>
            </thead>
            <tbody></tbody>
            </table>
            </div>
            </div>
            </>
            )}
            { issuedBooks &&(
              <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
              <div className="flex border-2 border-black  w-[70%] h-[75vh] bg-white rounded-lg flex-col items-center justify-center">
              <div className="w-full relative h-1/5 border-b-2 flex items-end text-2x1 font-extrabold justify-center">
              <h1>Currently Issued Books</h1>
              <i
              onClick={() => setIssuedBooks(false)  }
              className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
              ></i>
              </div>
              <div className="relative w-[80%] h-3/4 overflow-x-auto top-1 shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className=" text-xs w-full text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              <th className="px-6 py-2">STUDENT EMAIL</th>
              <th className="px-6 py-2">	BOOK NAME</th>
              <th className="px-6 py-2"> DATE </th>
              </tr>
              </thead>
              </table>
              </div>
              </div>
              </div>
            )}
              
              { received &&(
              <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
              <div className="flex  w-[70%] border-2 border-black h-[75vh] bg-white rounded-lg flex-col items-center justify-center">
              <div className="w-full relative h-1/5 border-b-2 flex items-end text-2x1 font-extrabold justify-center">
              <h1>Received history</h1>
              <i
              onClick={() => setReceived(false)  }
              className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
              ></i>
              </div>
              <div className="relative w-[80%] h-3/4 overflow-x-auto top-1 shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className=" text-xs w-full text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              <th className="px-6 py-2">STUDENT EMAIL</th>
              <th className="px-6 py-2">	BOOK NAME</th>
              <th className="px-6 py-2"> DEPARTMENT/CATEGORY </th>
              <th className="px-6 py-2"> REC. ON DATE </th>
              </tr>
              </thead>
              </table>
              </div>
              </div>
              </div>
            )}
              
              
              </>
              );
            };
            
            export default Library;
            