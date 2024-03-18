import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { lazy, useState } from "react";



const HOME=lazy(()=>import("../institute/Home"))


const Dashboard = () => {
  const [user, setUser]   = useState(false);



  return (
<>
<BrowserRouter>
<Router>
{user ? <Navbar/> : null }
        <Routes>

          <Route path="" element={<HOME setUser={setUser} />}  />
        </Routes>
        </Router>
        </BrowserRouter>
    </>
  )
}

export default Dashboard
