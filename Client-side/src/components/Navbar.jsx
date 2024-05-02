import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";



const Navbar =()=>{
    return(
        <main className="flex w-screen justify-center font-PlusJakarta">
            <div className="navbar bg-neutral-50 flex items-center h-fit backdrop-blur-sm w-full rounded-lg mt-2 text-primary px-3">
                <div className="navbar-start justify-between">
                    {/* <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div> */}
                    <Link to="" className="px-5 text-xl flex items-center h-fit "> <img src="/logo-black.png" alt="logo" className="h-[60px]" /> </Link>
                    <ul className="menu menu-horizontal px-3">
                        <li>
                            <details>
                            <summary>Category</summary>
                            <ul className="p-2">
                                <li><a>Contact Us</a></li>
                                <li><a>Promo!</a></li>
                            </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-10 justify-end w-full">
                    <form className="hidden input focus:input-primary input-bordered lg:flex w-full items-center justify-center bg-neutral-100 rounded-2xl">
                        <div className="flex-grow">
                            <input 
                                type="text" 
                                placeholder="Search" 
                                className="text-black rounded-2xl placeholder:text-neutral-400 placeholder:italic bg-neutral-100 w-full" 
                            /> 
                        </div>
                        <button type="submit" className="px-4 btn-ghost rounded-2xl w-fit h-fit hover:bg-neutral-100">
                            <MdSearch className="w-fit h-6"/>
                        </button>
                    </form>
                    {/* <ul className="menu menu-horizontal px-1">
                        <li><a>Menu</a></li>
                        <li><a>About</a></li>
                        <li>
                            <a>Contact</a>
                            <details>
                            <summary>Contact</summary>
                            <ul className="p-2">
                                <li><a>Contact Us</a></li>
                                <li><a>Promo!</a></li>
                            </ul>
                            </details>
                        </li>
                        </ul> */}
                    <div className="flex gap-2">
                        <a className="btn btn-primary text-neutral-50 px-4 text-xs btn-outline hover:text-white">Masuk</a>
                        <a className="btn btn-primary text-neutral-50 px-4 text-xs">Daftar</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Navbar;