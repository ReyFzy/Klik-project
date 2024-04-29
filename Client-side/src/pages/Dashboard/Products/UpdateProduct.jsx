import DashboardLayout from "../../../layouts/DashboardLayout";
import { Link } from "react-router-dom";
import { useState } from "react";

const UpdateProduct =()=>{
    const [formData, setFormData] = useState({
        name: 'Default Product Name',
        store: 'Default Store',
        category: 'Default Category',
        link: 'Default Link',
        price: 0, // Default price set to 0
        quantity: 1, // Default quantity set to 1
        desc: 'Default Description',
        img: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("sip")
        window.location = "/dashboard/products"
    };
    return(
        <DashboardLayout>
            <form action="" onSubmit={handleSubmit} className="flex items-center overflow-x-auto bg-neutral-50 pl-10 py-5 relative">
                <div className="flex flex-col gap-3">
                    <img src="" alt="" className="bg-neutral-400 w-[380px] h-[320px] rounded-lg"/>
                    <input onChange={handleChange} type="file" name="img" className="file-input file-input-bordered w-full max-w-xs file-input-primary bg-neutral-50 text-neutral-800" value={formData.img}/>
                </div>
                <div className=" px-9 flex flex-col h-full gap-5 py-5 w-full">
                    <div className="flex justify-start gap-10">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-black">Product Name</span>
                            </div>
                            <input type="text" onChange={handleChange} name="name" value={formData.name} className="input input-bordered w-full max-w-xs input-primary bg-neutral-50 text-black placeholder:italic"/>
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-black">Store</span>
                            </div>
                            <input onChange={handleChange} name="store" type="text" value={formData.store} className="input input-bordered w-full max-w-xs input-primary bg-neutral-50 text-black placeholder:italic" />
                        </label>
                    </div>
                    
                    <div className="flex justify-start gap-10">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-black">Price</span>
                            </div>
                            <input type="number" onChange={handleChange} name="price" className="input input-bordered w-full max-w-xs input-primary bg-neutral-50 text-black placeholder:italic" value={formData.price}/>
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-black">Quantity</span>
                            </div>
                            <input type="text" onChange={handleChange} name="quantity" className="input input-bordered w-full max-w-xs input-primary bg-neutral-50 text-black placeholder:italic" value={formData.quantity}/>
                        </label>
                    </div>
                    <div className="flex justify-start gap-10 items-end">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-black">Category</span>
                            </div>
                            <select className="select select-primary w-full max-w-xs bg-neutral-50 text-black disabled:text-neutral-200">
                                <option disabled selected >Category</option>
                                <option>Admin</option>
                                <option>User</option>
                            </select>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-black">link</span>
                            </div>
                            <input type="text" onChange={handleChange} name="link" className="input input-bordered w-full max-w-xs input-primary bg-neutral-50 text-black placeholder:italic" value={formData.link}/>
                        </label>

                    </div>
                        <div className="flex gap-2">
                            <button type="submit" className="btn btn-primary text-white px-10"> Edit </button>
                            <button className="btn btn-error text-white px-10"> Delete </button>
                        </div>
                </div>
                <Link to="/dashboard/products" className="btn btn-primary btn-circle btn-outline absolute top-1 right-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </Link>
            </form>
        </DashboardLayout>
    )
}

export default UpdateProduct;