import { Link } from "react-router-dom";

const Announcement =()=>{
    return(
        <main className="bg-primary w-screen h-fit flex items-center justify-center font-PlusJakarta py-1">
            <p className="text-sm text-neutral-200 tracking-widest">Ada produk baru loh! <Link to="" className="text-white italic tracking-normal hover:tracking-widest transition-all duration-700">  Klik. di sini! </Link></p>
        </main>
    ) 
}

export default Announcement;