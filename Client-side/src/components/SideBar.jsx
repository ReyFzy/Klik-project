import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const SideBar = () => {
    const notify = () =>{
        toast.info("Coming Soon!")
    }    
    return (
        <ul className="w-[200px] h-full menu bg-neutral-50 flex flex-col items-start">
            <div className="flex flex-col items-center w-full">
                <img src="/logo-black.png" alt="logo" className="w-32" />
            </div>
            <div className="flex flex-col text-black w-full gap-2">
                <li>
                    <Link to="/dashboard" className={hover.link}>Dashboard</Link>
                </li>
                <li>
                    <Link to="/dashboard/users" className={hover.link}>Users</Link>
                </li>
                <li>
                    <details open>
                        <summary className={hover.link}>Product</summary>
                        <ul className="flex flex-col gap-1">
                            <li>
                                <Link to="/dashboard/products" className={hover.link}>Product</Link>
                            </li>
                            <li>
                                <a className={hover.link} onClick={ notify }>Category</a>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <Link to="/dashboard-feedback" className={hover.link}>Feedback</Link>
                </li>
            </div>
        </ul>
    );
};

const hover = {
    link: "hover:bg-primary hover:text-neutral-50"
}

export default SideBar;
