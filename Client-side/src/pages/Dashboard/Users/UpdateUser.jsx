import DashboardLayout from "../../../layouts/DashboardLayout";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdateUser =()=>{
    const { id } = useParams()
    return(
        <DashboardLayout>
            <form action="" className="flex items-center overflow-x-auto bg-neutral-50 pl-10 py-5 relative">
                <img src="" alt="" className="bg-neutral-400 w-[380px] h-[320px] rounded-lg"/>
                <div className=" px-9 flex flex-col h-full gap-5 py-5 w-full">
                    <div className="flex justify-start gap-10">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-black">Username</span>
                            </div>
                            <input type="text" value="Username" className="input input-bordered w-full max-w-xs input-primary bg-neutral-50 text-black placeholder:italic" disabled/>
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-black">Name</span>
                            </div>
                            <input type="text" value="Klik" className="input input-bordered w-full max-w-xs input-primary bg-neutral-50 text-black placeholder:italic" disabled/>
                        </label>
                    </div>
                    
                    <div className="flex justify-start gap-10">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-black">Email</span>
                            </div>
                            <input type="text" className="input input-bordered w-full max-w-xs input-primary bg-neutral-50 text-black placeholder:italic" disabled value="@gmail.com"/>
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-black">No Telp</span>
                            </div>
                            <input type="text" placeholder="23" className="input input-bordered w-full max-w-xs input-primary bg-neutral-50 text-black placeholder:italic" disabled value="000000"/>
                        </label>
                    </div>
                    <div className="flex justify-start gap-10 items-end">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-black">Role</span>
                            </div>
                            <select className="select select-primary w-full max-w-xs bg-neutral-50 text-black disabled:text-neutral-200">
                                <option disabled selected >Select Role</option>
                                <option>Admin</option>
                                <option>User</option>
                            </select>
                        </label>
                        <div className="flex gap-2">
                            <button type="submit" className="btn btn-primary text-white px-10"> Edit </button>
                            <button className="btn btn-error text-white px-10"> Delete </button>
                        </div>
                    </div>
                </div>
                <Link to="/dashboard/users" className="btn btn-primary btn-circle btn-outline absolute top-1 right-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </Link>
            </form>
        </DashboardLayout>
    )
};

export default UpdateUser;