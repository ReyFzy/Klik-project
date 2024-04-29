import RegistImg from "../../assets/Auth/Register.svg";
import { Link } from "react-router-dom"; 
import { useFormik } from "formik";
import * as yup from "yup";

const Register =()=>{

    const handleRegist =()=>{
        alert("Asekkk Regist")
        window.location = "/auth/verification"
    };

    const formik = useFormik({
        initialValues : {
            email : "",
            password : "",
            name : "",
            username : ""
        },
        onSubmit : handleRegist,
        validationSchema : yup.object().shape({
            email: yup
                .string("Silahkan isi dengan email anda!")
                .email("Silahkan isi dengan format email '@' yang benar!")
                .required("Email wajib diisi!"),
            password: yup
                .string("Silahkan isi kata sandi anda!")
                .min(8, "Kata sandi minimal terdiri dari 8 karakter")
                .required("Kata sandi wajib diisi"),
                name: yup
                .string("Silahkan isi dengan nama anda!")
                .min(3, "Nama minimal terdiri dari 3 karakter")
                .max(30, "Nama tidak boleh lebih dari 30 karakter")
                .required("Nama wajib diisi!"),
                username: yup
                .string("Silahkan isi dengan username anda!")
                .min(3, "Username minimal terdiri dari 3 karakter")
                .max(12, "Username tidak boleh lebih dari 12 karakter")
                .required("Username wajib diisi!"),
        })
    });

    const handleForm =(e)=>{
        const { target } = e;
        formik.setFieldValue(target.name, target.value)
    }

    return(
        <main className="flex items-center gap-40">
            <img src={RegistImg} alt="" className="w-[633px]" />
            <section className="flex flex-col max-w-[400px] gap-5">
                <form onSubmit={formik.handleSubmit} className="overflow-x-auto shadow bg-neutral-50 px-9 flex flex-col h-full py-5 border-2 border-neutral-200 rounded-lg hover:border-primary transition-all duration-700 items-center justify-center gap-5">
                    <div className="flex flex-col items-center">
                        <img src="/logo-black.png" alt="logo" className="w-28" />
                        <h1 className="font-bold text-2xl text-primary -mt-10">Daftar</h1>
                        <p className="text-xs font-light text-primary/60">Bikin akun biar kalian terdaftar pengguna Klik.</p>
                    </div>

                    <section className="flex flex-col w-full">
                        <div className="flex w-full gap-5">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-black">Email</span>
                                    <span className="label-text-alt">*Required</span>
                                </div>
                                <input type="email" onChange={handleForm} name="email" placeholder="Souris.Klik.23@gmail.com" className="input input-md input-bordered w-full input-primary bg-neutral-50 text-black placeholder:italic"/>
                                <p className="text-xs text-error pl-2 py-1 italic">{ formik.errors.email }</p>
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-black">Password</span>
                                    <span className="label-text-alt">*Required</span>
                                </div>
                                <input type="password" onChange={handleForm} name="password" placeholder="······" className="input input-bordered w-full input-primary bg-neutral-50 text-black placeholder:italic"/>
                                <p className="text-xs text-error pl-2 py-1 italic">{ formik.errors.password }</p>

                            </label>
                        </div>

                        <div className="flex w-full gap-5">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-black">Name</span>
                                    <span className="label-text-alt">*Required</span>
                                </div>
                                <input type="text" onChange={handleForm} name="name" placeholder="Souris Company" className="input input-md input-bordered w-full input-primary bg-neutral-50 text-black placeholder:italic" />
                                <p className="text-xs text-error pl-2 py-1 italic">{ formik.errors.name }</p>

                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-black">Username</span>
                                    <span className="label-text-alt">*Required</span>
                                </div>
                                <input type="text" onChange={handleForm} name="username" placeholder="Klik" className="input input-bordered w-full input-primary bg-neutral-50 text-black placeholder:italic" />
                                <p className="text-xs text-error pl-2 py-1 italic">{ formik.errors.username }</p>
                            </label>
                        </div>
                    </section>

                    <button type="submit" className="btn btn-primary text-white w-full">Daftar</button>
                    <p className="text-sm">Udah punya akun?<Link to="/auth/" className="text-primary"> Masuk disini!</Link></p>
                </form>
                <p className="text-sm text-center">Dengan Login, Kamu menyetujui<Link className="text-primary"> Ketentuan Penggunaan </Link>dan <Link className="text-primary">Kebijakan Privasi</Link> </p>
            </section>
        </main>
    )
}

export default Register;