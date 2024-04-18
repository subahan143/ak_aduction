/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Accounts = ({ setUser }) => {
  const [fee_Assign, setFee_Assign] = useState(false);
  const [fee_Collect, setFee_Collect] = useState(false);
  const [arrow_content, setArrow_content] = useState(false);
  const [expense, setExpense] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setUser(true);
  }, []);

  // const handleExpenseSubmit = () => {
  //   setShowModal(true);
  // };

  return (
    <>
      <div className="flex flex-col h-screen w-2/2 ml-[10rem] items-center bg-gray-100 justify-center">
        <div className="w-full h-[15vh] border-b-4 border-black flex items-center justify-center text-3xl font-bold">
          <span>Accounts</span>
        </div>

        <div className="w-full h-[85vh] flex items-center justify-center gap-10 flex-wrap">
          <span
            onClick={() => setFee_Assign(true)}
            className="flex flex-col items-center justify-center w-1/3 h-40 bg-white shadow-lg shadow-gray-400 rounded-xl hover:border-2 hover:border-black hover:duration-150 hover:ease-in hover:scale-95 cursor-pointer hover:shadow-orange-400 hover:drop-shadow-lg hover:translate-y-5 translate-y-6"
          >
            <i className="fa-solid fa-file-invoice-dollar text-4xl"></i>
            <h1 className="text-3xl font-bold ">Fee Assign</h1>
            <p className="text-base text-center ">
              Assign The Fee To Student(General,Transport,Hostel,Other )
            </p>
          </span>

          <span
            onClick={() => setFee_Collect(true)}
            className="flex flex-col items-center justify-center w-1/3 h-40 bg-white shadow-lg shadow-gray-400 rounded-xl hover:border-2 hover:border-black hover:duration-150 hover:ease-in hover:scale-95 cursor-pointer hover:shadow-pink-500 hover:drop-shadow-lg hover:translate-y-5  translate-y-6"
          >
            <i className="fa-solid text-4xl fa-hand-holding-dollar"></i>
            <h1 className="text-3xl font-bold ">Fee Collect</h1>
            <p className="text-base text-center ">
              Collect The Fee From Student(General, Transport,Hostel,Other )
            </p>
          </span>

          <span
            onClick={() => setExpense(true)}
            className="flex flex-col items-center justify-center w-1/3 h-40 bg-white shadow-lg shadow-gray-400 rounded-xl hover:border-2 hover:border-black hover:duration-150 hover:ease-in hover:scale-95 cursor-pointer hover:shadow-lime-500 hover:drop-shadow-lg hover:translate-y-5  translate-y-6"
          >
            <i className="fa-solid fa-money-bill-transfer text-4xl"></i>
            <h1 className="text-3xl font-bold ">Expenses</h1>
            <p className="text-base text-center ">
              Store A Record of daily expenses(Salary,Renovation,Fuel etc.. )
            </p>
          </span>
        </div>
      </div>

      {fee_Assign && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white relative rounded-lg w-[70%] h-[70vh] flex items-center justify-center flex-col">
            <div className="w-full h-10 flex items-center justify-end pr-3 bg-slate-40">
              <i
                onClick={() => setFee_Assign(false)}
                className="fa-solid fa-xmark top-4 right-7 hover:bg-gray-300 px-3 py-1 rounded-lg text-lg"
              ></i>
            </div>
            <div className="w-full h-20 flex items-center justify-center">
              <input
                type="text"
                className="bg-blue-50  w-[80%] h-[54px]  border-gray-200 border-2 rounded-lg focus:outline-none pl-10 focus:border-black text-md"
                placeholder="search Email"
              />

              <button className="flex bg-blue-700 border-2 rounded-md text-yellow-50 border-blue-400 px-5 py-2 absolute top-[59px] right-24">
                search
              </button>
              <i className=" absolute text-gray-500 left-[6.5rem] top-[73px] fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="flex w-full h-72"></div>
          </div>
        </div>
      )}
      {fee_Collect && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white rounded-lg w-[70%] h-[70vh] flex items-center justify-center flex-col">
            <div className="w-full h-14 flex items-center justify-end pr-5">
              <i
                onClick={() => setFee_Collect(false)}
                className="fa-solid fa-xmark top-4 right-7 hover:bg-gray-300 px-3 py-1 rounded-lg text-lg"
              ></i>
            </div>

            <div className="w-full h-24 flex items-center justify-center gap-2">
              <span className="flex flex-col w-60 h-24 items-start justify-center">
                <label className="font-bold"> Select Year</label>
                <select className="w-48 flex h-9 border-2 rounded-lg bg-gray-100">
                  <option value="">Choose Year</option>
                  <option value="">2024</option>
                </select>
              </span>
              <span className="flex flex-col w-60 h-24 items-start justify-center">
                <label className="font-bold"> Select Class</label>
                <select className="w-48 flex h-9 border-2 rounded-lg bg-gray-100">
                  <option value="">Choose Class</option>
                </select>
              </span>
              <button>
                <i
                  onClick={() => setArrow_content(true)}
                  className=" w-10 h-10 rounded-full flex items-center justify-center border-2 border-blue-400 text-md hover:text-white hover:bg-blue-500 fa-solid fa-arrow-right"
                ></i>
              </button>
              {arrow_content && (
                <span
                  onClick={() => setArrow_content(false)}
                  className=" flex-col w-72 h-24 items-start justify-center"
                >
                  <label className="font-bold"> Select a Student</label>
                  <span className="flex items-center justify-center gap-2">
                    <select className="w-48 flex h-10 border-2 rounded-lg bg-gray-100">
                      <option value="">Choose Class</option>
                    </select>
                    <button className=" py-[6px] rounded-lg text-white w-24 bg-blue-500 gap-2 font-extrabold">
                      search
                    </button>
                  </span>
                </span>
              )}
            </div>

            <div className="w-full h-[16rem] flex items-center justify-center">
              <div className="w-1/2 h-full flex"></div>
            </div>
          </div>
        </div>
      )}
      {expense && (
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="flex border-2 border-black w-[60%] h-[75vh] bg-white rounded-lg flex-col items-center justify-center">
            <div className="w-full relative h-1/5 border-b-2 flex items-end justify-center">
              <h1 className="text-2xl font-semibold">Expenses:</h1>
              <i
                onClick={() => setExpense(false)}
                className=" absolute right-6 top-3 hover:bg-gray-300 shadow-lg cursor-pointer text-gray px-2 py-1 text-xl rounded-lg fa-solid fa-xmark"
              ></i>
            </div>
            <form className="relative w-[60%] h-3/4 border-2 top-1 shadow-md sm:rounded-lg items-center justify-center flex flex-col gap-10">
              <span className="flex-col w-52 flex itemsstart justify-center">
                <label className="font-extrabold" htmlFor="">
                  Expense Name:-
                </label>
                <input
                  className="h-10 w-56 border-2 border-gray-500 rounded-xl pl-6"
                  placeholder="salary paid"
                  type="text"
                />
              </span>
              <span className="flex-col w-52 flex items-start justify-center">
                <label className="font-extrabold" htmlFor="">
                  Expense Amount:-
                </label>
                <input
                  className="h-10 w-56 border-2 border-gray-500 rounded-xl pl-6"
                  placeholder="55,000"
                  type="number"
                />
              </span>
              <button
              onClick={()=>setShowModal(true)}
                className="border-2 px-3 py-2 rounded-xl bg-blue-600 text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      {showModal &&(
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="w-[35rem] h-40 rounded-lg flex bg-white z-30 flex-col">
            <div className="w-full h-24 flex">
              <div className="w-24 h-24 flex justify-center items-center ">
                <span className="w-12 h-12 bg-pink-100 flex items-center justify-center rounded-full">
                  <i className="text-yellow-500 text-2xl fa-solid fa-triangle-exclamation"></i>
                </span>
              </div>
              <div className="w-[29rem] h-24 items-start flex justify-center flex-col">
                <h1 className="text-lg font-bold">Expense</h1>
                <p>Are you sure? This action cannot be undone.</p>
              </div>
            </div>
            <div className="w-full h-20 flex items-center justify-end gap-3 pr-6">
              <button
                // onClick={() => setShowModal(false)}
                className="px-4 py-2 border-2 rounded-md text-sm font-extrabold border-gray-400"
              >
                Cancel
              </button>
              <button
                // onClick={() => {
                //   setShowModal(false);
                //   setExpense(false);
                // }}
                className="px-4 py-2 border-2 rounded-md text-sm font-extrabold border-gray-400 bg-green-600 text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Accounts;
