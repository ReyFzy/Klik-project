import DashboardLayout from "../../../layouts/DashboardLayout"
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const CreateProduct = () =>{

    const handleSubmit =()=>{
        alert("iyahh dibikinin")
        window.location = "/dashboard/users"
    }
    const formik = useFormik({
        initialValues: {
            name: "",
            store: "",
            category: "",
            price: "",
            quantity: "",
            link: "",
            desc: "",
            img: "",
        },
        onSubmit: handleSubmit,
        validationSchema: yup.object().shape({
            name: yup
                .string("Silahkan masukkan nama produk!")
                .min(3, "Nama produk minimal terdiri dari 3 karakter!")
                .max(30, "Nama produk tidak boleh lebih dari 30 karakter!")
                .required("Nama produk wajib diisi!"),
            store: yup
                .string("Silahkan masukkan nama toko!")
                .min(3, "Nama toko minimal terdiri dari 3 karakter!")
                .max(20, "Nama toko tidak boleh lebih dari 20 karakter!")
                .required("Nama toko wajib diisi!"),
            category: yup
                .string("Silahkan pilih kategori yang sesuai!")
                .required("Silahkan pilih kategori yang sesuai!"),
            price: yup
                .number("Silahkan isi harga produk!")
                .min(1000, "Harga produk minimal 1000")
                .required("Harga produk wajib diisi!"),
            quantity: yup
                .number("Silahkan masukkan jumlah produk yang tersedia!")
                .required("Jumlah barang wajib diisi!"),
            link: yup
                .string("Silahkan masukkan tautan produk")
                .url("Baris harus berisi tautan!")
                .required("Tautan produk wajib diisi!"),
            desc: yup
                .string("Silahkan masukkan deskripsi produk!")
                .min(5, "Deskripsi produk minimal terdiri dari 5 karakter"),
            img: yup
                .string("Silahkan masukkan gambar produk!")
                .required("Gambar produk wajib diisi!")
        })
    });

    const handleForm =(e)=>{
        const { target } = e;
        formik.setFieldValue(target.name, target.value)
    };
    
    return(
        <DashboardLayout>
            <form action="" onSubmit={formik.handleSubmit} className="overflow-x-auto bg-neutral-50 px-9 flex flex-col h-full gap-5 py-5 relative">
                <div className="flex justify-between">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black">Product Name</span>
                            <span className="label-text-alt">*Required</span>
                        </div>
                        <input type="text" onChange={handleForm} name="name" placeholder="Example Product" className="input input-bordered w-full max-w-xs input-primary bg-neutral-50 text-black placeholder:italic"/>
                        <p className="text-xs text-error pl-2 py-1 italic">{ formik.errors.name }</p>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black">Store Name</span>
                            <span className="label-text-alt">*Required</span>
                        </div>
                        <input type="text" placeholder="Klik" onChange={handleForm} name="store" className="input input-bordered w-full max-w-xs input-primary bg-neutral-50 text-black placeholder:italic"/>
                        <p className="text-xs text-error pl-2 py-1 italic">{ formik.errors.store }</p>
                    </label>
                    
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black">Product Category</span>
                            <span className="label-text-alt">*Required</span>
                        </div>
                        <select className="select select-primary w-full max-w-xs bg-neutral-50 text-black disabled:text-neutral-200" onChange={handleForm} name="category">
                            <option disabled selected >Select Product Category</option>
                            <option>Game of Thrones</option>
                            <option>Lost</option>
                            <option>Breaking Bad</option>
                            <option>Walking Dead</option>
                        </select>
                        <p className="text-xs text-error pl-2 py-1 italic">{ formik.errors.category }</p>
                    </label>
                </div>
                
                <div className="flex justify-between">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black">Product Price</span>
                            <span className="label-text-alt">*Required</span>
                        </div>
                        <input type="number" placeholder="23000000" name="price" onChange={handleForm} className="input input-bordered w-full max-w-xs input-primary bg-neutral-50 text-black placeholder:italic" />
                        <p className="text-xs text-error pl-2 py-1 italic">{ formik.errors.price }</p>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black">Product Quantity</span>
                            <span className="label-text-alt">*Required</span>
                        </div>
                        <input type="text" placeholder="23" name="quantity" onChange={handleForm} className="input input-bordered w-full max-w-xs input-primary bg-neutral-50 text-black placeholder:italic"/>
                        <p className="text-xs text-error pl-2 py-1 italic">{ formik.errors.quantity }</p>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black">Product Link</span>
                            <span className="label-text-alt">*Required</span>
                        </div>
                            <input type="text" placeholder="http://klik.com" onChange={handleForm} name="link" className="input input-bordered w-full max-w-xs input-primary bg-neutral-50 text-black placeholder:italic" />
                            <p className="text-xs text-error pl-2 py-1 italic">{ formik.errors.link }</p>
                    </label>
                </div>

                <div className="flex justify-between items-center">
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text text-black">Product Description</span>
                        </div>
                        <textarea onChange={handleForm} name="desc" className="textarea textarea-primary textarea-bordered h-24 bg-neutral-50 placeholder:italic text-black" placeholder="Description Here..."></textarea>
                        <p className="text-xs text-error pl-2 py-1 italic">{ formik.errors.desc }</p>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black">Product Image</span>
                            <span className="label-text-alt">*Required</span>
                        </div>
                        <input type="file" name="img" onChange={handleForm} className="file-input file-input-bordered w-full max-w-xs file-input-primary bg-neutral-50 text-neutral-800"  />
                        <p className="text-xs text-error pl-2 py-1 italic">{ formik.errors.img }</p>
                        <div className="label">
                            <span className="label-text-alt">.jpg/.png</span> 
                        </div>
                    </label>
                    
                    <button className="btn btn-primary text-white w-[400px]"> Submit </button>
                </div>
                <Link to="/dashboard/products" className="btn btn-primary btn-circle btn-outline absolute top-1 right-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </Link>
            </form>
        </DashboardLayout>
    )
}

export default CreateProduct;