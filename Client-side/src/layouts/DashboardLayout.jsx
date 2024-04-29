import SideBar from "../components/SideBar.jsx";
import NavBarDashboard from "../components/NavBarDashboard.jsx";
import { ToastContainer } from "react-toastify";

const DashboardLayout = ({ children }) => {
    return(
        <div className="w-screen h-screen bg-neutral-100 font-PlusJakarta flex pr-4 gap-14">
            <SideBar/>
            <div className="flex flex-col w-full gap-10">   
                <NavBarDashboard/>
                <div>{children}</div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default DashboardLayout;