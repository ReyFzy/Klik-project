import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";

const LandingPage = () => {
    const comp = useRef(null);
    const [isClicked, setIsClicked] = useState(false);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from("#intro-slider", {
                xPercent: "-100",
                duration: 1.3,
                delay: 0.3,
            })
                .from(["#title-1", "#title-2", "#title-3"], {
                    opacity: 0,
                    y: "+=30",
                    stagger: 1.0,
                })
                .to(["#title-1", "#title-2", "#title-3"], {
                    opacity: 0,
                    y: "+=30",
                    delay: 0.3,
                    stagger: 0.5,
                })
                .to("#intro-slider", {
                    xPercent: "-100",
                    duration: 1.3,
                })
                .from("#welcome", {
                    opacity: 0,
                    duration: 0.5,
                })
                .to("#brand", {
                    yPercent: 0,
                    duration: 1,
                })
                .to(".info", { 
                    opacity: 1, 
                    duration: 1, 
                    stagger: 1, 
                    repeat: -1, 
                    yoyo: true})
                .to(".info", { 
                    opacity: 0, 
                    duration: 1, 
                    stagger: 1 , 
                    repeat: -1, 
                    yoyo: true})
        }, comp);

        return () => ctx.revert();
    }, []);

    const handleClick = () => {
        gsap.to(".out", {
            duration: 1, 
            opacity: 0, 
            y: -100, 
            stagger: 0.1,
            ease: "back.in"
        });
        setIsClicked(true);
        setTimeout(() => {
            window.location.href = "/home";
        }, 1000); 
    };
    
    return (
        <main className="relative font-PlusJakarta" ref={comp}>
            <div
                className="h-screen bg-primary text-neutral-100 absolute top-0 left-0 z-10 w-full flex flex-col gap-12 font-bold tracking-[10px] justify-center pl-10"
                id="intro-slider"
            >
                <h1 className="text-8xl" id="title-1">
                    MACHINE?
                </h1>
                <h1 className="text-8xl" id="title-2">
                    MOTORCYCLE?
                </h1>
                <h1 className="text-8xl" id="title-3">
                    ONDERDIL?
                </h1>
            </div>
            <Link
                to="" onClick={handleClick}
                className="w-sceen h-screen font-PlusJakarta font-bold tracking-wide z-10"
            >
                <main className="w-full h-screen flex flex-col justify-center items-center text-center bg-gradient-to-bl from-primary/25 via-neutral-200 to-secondary/25 gap-4">
                    <h1 className={`text-neutral-700 text-7xl out ${isClicked ? "clicked" : ""}`} id="welcome" onClick={handleClick}>
                        Kamu butuh{" "} 
                        <span className="text-secondary">
                            <Typewriter
                                delaySpeed={3000}
                                deleteSpeed={80}
                                loop={0}
                                typeSpeed={120}
                                words={['Mesin', 'Suku Cadang', 'Motor']}
                            />
                        </span>
                        {"?"}
                        <br /> <span className={`text-primary out ${isClicked ? "clicked" : ""}`} id="brand" >Klik.</span> disini aja!
                    </h1>

                    <p className={`text-neutral-900 text-sm font-light info opacity-0 italic out ${isClicked ? "clicked" : ""}`} id="welcome"> <span className="text-primary">Klik.</span> dimanapun untuk masuk</p>
                </main>
            </Link>
        </main>
    );
};

export default LandingPage;
