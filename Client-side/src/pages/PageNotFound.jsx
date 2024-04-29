import { Link } from "react-router-dom";
import NotFound  from "../assets/404/404-2D.svg";

const PageNotFound = () =>{
    return(
        <>
            <main className="w-screen h-screen flex flex-col bg-neutral-50 font-PlusJakarta text-primary items-center justify-center gap-3">
                <img src={NotFound} alt="" className="w-[250px] h-fit"/>
                <div>
                    <p className="text-xl font-bold ">Oops! Halaman tidak tersedia :(</p>
                    <p className="text-lg ">Tapi jangan khawatir #PastiAdaJalan </p>
                </div>
                <Link to="/" className="btn btn-outline btn-primary">Kembali ke Klik.</Link>
            </main>
        </>
    )
}

export default PageNotFound;