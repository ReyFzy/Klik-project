import DashboardLayout from "../../../layouts/DashboardLayout"
import { Link } from "react-router-dom";
import { FaPenToSquare, FaUserPen } from "react-icons/fa6";
import { BsBagX, BsFillBagFill } from "react-icons/bs";
import { IoBagAdd } from "react-icons/io5";
import { ToastContainer } from "react-toastify";

const product = [
    {
        "id" : "1",
        "name" : "Fender",
        "category" : "Music",
        "store" : "Fender",
        "price" : 3000000,
        "quantity" : 1,
    },
    {
        "id" : "2",
        "name" : "Yamaha",
        "category" : "Music",
        "store" : "Yamaha",
        "price" : 5000000,
        "quantity" : 1,
    },
    {
        "id" : "3",
        "name" : "Taylor",
        "category" : "Music",
        "store" : "Taylor",
        "price" : 2000000,
        "quantity" : 1,
    },
]

const Products = () =>{
    const products = product.map( (curP, i) => {
        return(
            <tr key={curP.id} className=" transition-all duration-700">
                <th>{i + 1}</th>
                <td>{curP.name}</td>
                <td>{curP.category}</td>
                <td>{curP.store}</td>
                <td>
                Rp.{""}
                {curP.price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR"
                })}</td>
                <td>{curP.quantity}</td>
                <td><Link className="btn btn-primary btn-outline" onClick={()=>document.getElementById('detail').showModal()}> <BsFillBagFill/></Link></td>
                <td><Link to={`/dashboard/products/${curP.id}`} className="btn btn-accent btn-outline"> <FaPenToSquare/></Link></td>
                <td className="text-warning"><Link className="btn btn-warning btn-outline" onClick={()=>document.getElementById('my_modal_2').showModal()}><BsBagX/> </Link></td>
            </tr>
        )
    });
    return(
        <DashboardLayout>
            <div className="overflow-x-auto bg-neutral-50 px-9 flex flex-col h-full gap-5 py-5">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl text-primary font-bold underline">Klik Product List</h1>
                    <Link to="/dashboard/products/add" className="flex gap-1 items-center text-primary text-sm"> Tambahkan Produk <IoBagAdd/> </Link>
                </div>
                <table className="table border-primary text-primary">
                    {/* head */}
                    <thead>
                    <tr className="text-primary text-xl">
                        <th></th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Store</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th colSpan={3} className="text-center pr-12">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {products}
                    </tbody>
                </table>
                <div className="join bg-neutral-50 w-full justify-center">
                    <input className="join-item btn btn-square btn-primary bg-neutral-50 active:text-white text-black" type="radio" name="options" aria-label="1" checked />
                    <input className="join-item btn btn-square btn-primary bg-neutral-50 active:text-white text-black" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square btn-primary bg-neutral-50 active:text-white text-black" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square btn-primary bg-neutral-50 active:text-white text-black" type="radio" name="options" aria-label="4" />
                </div>
            </div>
            
            {/* ##### MODAL ##### */}

            <dialog id="detail" className="modal">
                <section className="modal-box w-11/12 max-w-5xl h-1/2 grid gap-4 grid-cols-costum grid-rows-custom">
                    <img src="" alt="" className="bg-neutral-400 w-full h-full rounded-lg row-span-4"/>
                    <h1 className="font-bold text-2xl text-black col-span-3">Detail Produk</h1>
                    <div className=" w-full">
                        <div className="flex flex-col gap-4 font-bold">
                            <p>Nama Produk: <span className="text-primary"> produk </span></p>
                            <p>Category: <span className="text-primary"> cat </span></p>
                            <p>Price: <span className="text-primary"> 12122001 </span></p>
                            <p>Description: <span className="text-primary"> admin </span></p>
                        </div>
                    </div>  
                    <div className="flex flex-col gap-4 font-bold">
                        <p>Store: <span className="text-primary"> toko </span></p>
                        <p>Link: <span className="text-primary"> link </span></p>
                        <p>Quantity: <span className="text-primary"> 1 </span></p>                        
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
                <h3 className="font-bold text-lg">Hapus Produk!</h3>
                <p className="py-4 flex flex-col gap-1">Apakah anda yakin ingin menghapus produk tersebut? 
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

export default Products;