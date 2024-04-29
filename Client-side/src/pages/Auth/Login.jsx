import LoginImg from "../../assets/Auth/Login.svg"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import * as yup from "yup"


const Login =()=>{

    const handleLogin =()=>{
        alert("Asik Login")
    }

    const formik = useFormik({
        initialValues : {
            email: "",
            password: ""
        },
        onSubmit: handleLogin,
        validationSchema: yup.object().shape({
            email: yup
                .string("Silahkan isi dengan email anda!")
                .email("Silahkan isi dengan format email '@' yang benar!")
                .required("Email wajib diisi!"),
            password: yup
                .string("Silahkan isi kata sandi anda!")
                .min(8, "Kata sandi minimal terdiri dari 8 karakter")
                .required("Kata sandi wajib diisi!")
        })
    });

    const handleForm =(e)=>{
        const { target } = e
        formik.setFieldValue(target.name, target.value)
    }

    return(
        <main className="flex items-center gap-40">
            <img src={LoginImg} alt="" className="w-[633px]" />
            <section className="flex flex-col max-w-[400px] gap-5">
                <form onSubmit={formik.handleSubmit} className="overflow-x-auto shadow bg-neutral-50 px-9 flex flex-col h-full py-5 border-2 border-neutral-200 rounded-lg hover:border-primary transition-all duration-700 items-center justify-center gap-5">
                    <div className="flex flex-col items-center">
                        <img src="/logo-black.png" alt="logo" className="w-28" />
                        <h1 className="font-bold text-2xl text-primary -mt-10">Login</h1>
                        <p className="text-xs font-light text-primary/60">Login biar kamu bisa akses semua fitur dari Klik.</p>
                    </div>
                    
                    <div className="flex flex-col w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-black">Your Email</span>
                                <span className="label-text-alt">*Required</span>
                            </div>
                            <input type="email" name="email" onChange={handleForm} placeholder="Email" className="input input-md input-bordered w-full input-primary bg-neutral-50 text-black placeholder:italic"/>
                            <p className="text-xs text-error pl-2 py-1 italic">{ formik.errors.email }</p>
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-black">Your Password</span>
                                <span className="label-text-alt">*Required</span>
                            </div>
                            <input type="password" name="password" onChange={handleForm} placeholder="Password" className="input input-bordered w-full input-primary bg-neutral-50 text-black placeholder:italic"/>
                            <p className="text-xs text-error pl-2 py-1 italic">{ formik.errors.password }</p>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary text-white w-full">Login</button>
                    <p className="text-sm">Belum punya akun?<Link to="/auth/register" className="text-primary"> Daftar disini!</Link></p>
                </form>
                <p className="text-sm text-center">Dengan Login, Kamu menyetujui<Link className="text-primary"> Ketentuan Penggunaan </Link>dan <Link className="text-primary">Kebijakan Privasi</Link> </p>
            </section>
        </main>
    );
}

export default Login;