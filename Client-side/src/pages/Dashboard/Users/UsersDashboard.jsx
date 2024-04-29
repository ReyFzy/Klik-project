import DashboardLayout from "../../../layouts/DashboardLayout"
import { Link } from "react-router-dom";
import { FaUserPen } from "react-icons/fa6";
import { AiOutlineUserDelete } from "react-icons/ai";
import { BiSolidUserDetail } from "react-icons/bi";
import { ToastContainer } from "react-toastify";

const user = [
    {
        "id" : "1",
        "username" : "ReyZ",
        "name" : "Rey",
        "email" : "Rey@gmail.com",
        "role" : "Owner",
    },
    {
        "id" : "2",
        "username" : "GalZ",
        "name" : "Gal",
        "email" : "Gal@gmail.com",
        "role" : "Admin",
    },
];

const Users = () =>{    
    const usersData = user.map( (curU, i) => {
        return(
            <tr key={curU.id} className=" transition-all duration-700">
                <th>{i + 1}</th>
                <td>{curU.username}</td>
                <td>{curU.name}</td>
                <td>{curU.email}</td>
                <td>{curU.role}</td>
                <td><Link className="btn btn-primary btn-outline" onClick={()=>document.getElementById('detail').showModal()}> <BiSolidUserDetail/></Link></td>
                <td><Link to={`/dashboard/users/${curU.id}`} className="btn btn-accent btn-outline"> <FaUserPen/></Link></td>
                <td className="text-warning"><Link className="btn btn-warning btn-outline" onClick={()=>document.getElementById('my_modal_2').showModal()}><AiOutlineUserDelete/> </Link></td>
            </tr>
        )
    });


    return(
        <DashboardLayout>
            <div className="overflow-x-auto bg-neutral-50 px-9 flex flex-col h-full gap-5 py-5">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl text-primary font-bold underline">Klik Users</h1>
                </div>
                <table className="table border-primary text-primary">
                    <thead>
                    <tr className="text-primary text-xl">
                        <th></th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th colSpan={3} className="text-center pr-12">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {usersData}
                    </tbody>
                </table>
                <div className="join bg-neutral-50 w-full justify-center">
                    <input className="join-item btn btn-square btn-primary bg-neutral-50 active:text-white text-black" type="radio" name="options" aria-label="1" checked />
                    <input className="join-item btn btn-square btn-primary bg-neutral-50 active:text-white text-black" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square btn-primary bg-neutral-50 active:text-white text-black" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square btn-primary bg-neutral-50 active:text-white text-black" type="radio" name="options" aria-label="4" />
                </div>
            </div>


            <dialog id="detail" className="modal">
                <section className="modal-box w-11/12 max-w-5xl h-1/2 grid gap-4 grid-cols-costum grid-rows-custom">
                    <img src="" alt="" className="bg-neutral-400 w-full h-full rounded-lg row-span-4"/>
                    <h1 className="font-bold text-2xl text-black col-span-3">Detail User Rey</h1>
                    <div className=" w-full">
                        <div className="flex flex-col gap-4 font-bold">
                            <p>Username: <span className="text-primary"> nm </span></p>
                            <p>Email: <span className="text-primary"> @gmail </span></p>
                            <p>tgl.lahir: <span className="text-primary"> 12122001 </span></p>
                            <p>role: <span className="text-primary"> admin </span></p>
                        </div>
                    </div>  
                    <div className="flex flex-col gap-4 font-bold">
                        <p>Name: <span className="text-primary"> namaakuh </span></p>
                        <p>No.Telp: <span className="text-primary"> 0xxx </span></p>
                        <p>gender: <span className="text-primary"> jalu </span></p>                        
                    </div>
                    <div className="modal-action flex justify-end items-end">
                        <form method="dialog">
                            <button className="btn btn-primary text-white">Close</button>
                        </form>
                    </div>
                </section>
            </dialog>
            
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-full">
                    <h3 className="font-bold text-lg">Hapus Pengguna!</h3>
                    <p className="py-4 flex flex-col gap-1">Apakah anda yakin ingin menghapus pengguna tersebut? 
                    <span className="text-xs text-neutral-50/25">
                        Klik ESC jika ingin membatalkan     
                    </span></p>
                    <button className="btn btn-error btn-outline text-end">Hapus</button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <ToastContainer/>
        </DashboardLayout>
    )
}

export default Users;