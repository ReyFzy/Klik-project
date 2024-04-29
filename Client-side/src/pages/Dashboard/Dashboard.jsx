import { ToastContainer,toast } from "react-toastify";
import DashboardLayout from "../../layouts/DashboardLayout";
import 'react-toastify/dist/ReactToastify.css';

const user = [
    {
        "id" : "1",
        "name" : "Rey",
    },
    {
        "id" : "2",
        "name" : "Galis",
    }
];

const product = [
    {
        
    },
    {

    },
    {

    },
];

const feedback = [
    {
        "id" : "1",
        "name" : "Rey",
        "desc" : "Aku Manusia Terkuat Di Bumi",
    },
    {
        "id" : "2",
        "name" : "Reyza",
        "desc" : "Aku Manusia Terkuat Di Bumi Juga",
    },
    {
        "id" : "3",
        "name" : "Eja",
        "desc" : "Aku Manusia Terkuat Di Bumi Sebenarnya",
    },
];

const likes = [
    {
        
    },
    {

    },
    {

    },
    {
        
    },
    {

    },
    {

    },
    {
        
    },
    {

    },
    {

    },
    {
        
    },
    {

    },
    {

    },
    {
        
    },
    {

    },
    {

    },
    {
        
    },
    {

    },
    {

    },
];


const Dashboard = () => {
    // const feedbacksName = feedback.map( (fbn)=> <li key={fbn.id} className="text-neutral-500 font-bold"> { fbn.name } </li>);
    const feedbacks = feedback.map( (fb)=> <li className="text-neutral-700 flex flex-col text-sm chat chat-start w-full" key={fb.id}> <span className="font-bold pl-2">{fb.name} </span> <span className="chat-bubble bg-accent text-white"> { fb.desc } </span> </li>);
    return(
        <DashboardLayout>
            <main className="flex flex-col gap-3 w-[1100px]">    
                <section className="flex gap-2 w-fit h-fit">
                    <div className="stats shadow border-primary border-solid border-2">
                        <div className="stat bg-neutral-50 place-items-center">
                            <div className="stat-title text-sm font-bold text-primary">Users</div>
                            <div className="stat-value text-xlg text-secondary">{user.length}</div>
                            <div className="stat-desc text-xs text-accent">Pengguna Membuka Website</div>
                        </div>
                        
                        <div className="stat bg-neutral-50 place-items-center border-l-2 border-neutral-100">
                            <div className="stat-title text-sm font-bold text-primary">Product</div>
                            <div className="stat-value text-secondary">{product.length}</div>
                            <div className="stat-desc text-accent">Banyak Produk Sejak 19 April 2024</div>
                        </div>
                        
                        <div className="stat bg-neutral-50 place-items-center border-l-2 border-neutral-100">
                            <div className="stat-title text-sm font-bold text-primary">Feedback</div>
                            <div className="stat-value text-secondary">{feedback.length}</div>
                            <div className="stat-desc text-accent">Banyak Orang Berkomentar</div>
                        </div>
                    </div>

                    <div className="stats shadow border-primary border-solid border-2 text-primary text-center">
                        <div className="stat bg-neutral-50">
                            <div className="stat-title font-bold text-sm text-primary">Total Like Semua Produk</div>
                            <div className="stat-value">{likes.length}</div>
                            <div className="stat-desc text-primary">Sejak 19 April 2024</div>
                        </div> 
                    </div>

                    <div className="stats shadow border-primary border-solid border-2 text-primary text-center">
                        <div className="stat bg-neutral-50">
                            <div className="stat-title font-bold text-sm text-primary">Total Review Produk</div>
                            <div className="stat-value">{likes.length}</div>
                            <div className="stat-desc text-primary">Sejak 19 April 2024</div>
                        </div> 
                    </div>
                </section>

                <section className="flex gap-5">
                    <div className="stats shadow border-primary border-solid border-2 w-fit">
                        <div className="stat bg-neutral-50 gap-2 ">
                            <div className="stat-title font-bold text-primary">Tracking</div>
                            <div className="stat-desc text-primary">Letak Perusahaan dan kondisi sekitarnya</div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.491989940945!2d107.623721!3d-6.905787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7b56d06cd4f%3A0xb95ab7cac238eb8b!2sSMKN%202%20Kota%20Bandung!5e0!3m2!1sid!2sid!4v1713177319688!5m2!1sid!2sid" className="w-[360px] h-[200px]"></iframe>
                        </div>
                    </div>

                    <div className="stats shadow bg-neutral-50 border-primary border-solid border-2 justify-start items-start h-[340px] w-[650px]">
                        <div className="stat gap-2  justify-start items-start w-full">
                            <div className="stat-title font-bold text-primary w-full">Live Feedback</div>
                            <ul className="flex flex-col gap-2 w-[450px]">
                                {feedbacks}
                            </ul>
                        </div>
                    </div>
                </section>

            </main>
            <ToastContainer/>

        </DashboardLayout>
    )
}

export default Dashboard;