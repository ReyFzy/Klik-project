import verifOTP from "../../assets/Auth/verifOTP.svg"
import { useFormik } from "formik";
import * as yup from "yup";


const OtpVerif =()=>{
    const handleVerif =()=>{
        alert("OKEH!")
        window.location = "/dashboard"
    }
    const formik = useFormik({
        initialValues: {
            verif: ""
        },
        onSubmit: handleVerif,
        validationSchema: yup.object().shape({
            verif: yup
                .number()
                .min(100000, 'Kode OTP terdiri dari 6 angka!')
                .max(999999, 'Kode OTP terdiri dari 6 angka!')
                .required('Kode OTP wajib di isi!')
        })
    })
    const handleForm =(e)=>{
        const { target } = e;
        formik.setFieldValue(target.name, target.value)
    }

    return(
        <main className="flex items-center gap-40">
            <img src={verifOTP} alt="" className="w-[633px]" />
            <form onSubmit={formik.handleSubmit} className="overflow-x-auto shadow bg-neutral-50 px-9 flex flex-col h-full py-5 border-2 border-neutral-200 rounded-lg hover:border-primary transition-all duration-700 items-center justify-center gap-5 max-w-[400px] w-full"> 
                <div className="flex flex-col items-center">
                    <img src="/logo-black.png" alt="logo" className="w-28" />
                    <h1 className="font-bold text-2xl text-primary -mt-10">Verifikasi</h1>
                    <p className="text-xs font-light text-primary/60">Cek Kode OTP-nya dikirim ke email kamu yaa!</p>
                </div>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-black">Code OTP</span>
                        <span className="label-text-alt">*Required</span>
                    </div>
                    <input type="number" onChange={handleForm} name="verif" placeholder="000000" className="input input-md input-bordered w-full input-primary text-center bg-neutral-50 text-black placeholder:italic italic tracking-[20px] placeholder:tracking-[20px] font-bold text-lg"/>
                    <p className="text-xs text-error pl-2 py-1 italic">{ formik.errors.verif }</p>
                </label>
                <button type="submit" className="btn btn-primary text-white">Verification</button>
            </form>
        </main>
    )
}

export default OtpVerif;