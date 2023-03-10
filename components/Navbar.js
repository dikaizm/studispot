import { useEffect, useState } from "react"
import Button from "./Button"
import Logo from "./Logo"
import Nav from "./Nav"

function MobileNav({ open, setOpen }) {
    return (
        <>
        <header className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter lg:hidden`}>
            <div className="relative container mx-auto px-4 md:px-10">
                <div className="grid grid-cols-3 items-center h-14 md:h-20 justify-items-center">
                    <button 
                        onClick={() => setOpen(!open)}
                        type="button"
                        className="justify-self-start"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        {!open ? (
                            <img src="/nav-menu.svg" />
                        ) : (
                            <img src="/nav-menu-close.svg" />
                        )}
                    </button>
                    <Logo className="h-6 md:h-8 justify-self-center" variant="normal" />
                    <div className="justify-self-end text-sm">
                        <a href="/error" className="font-bold text-gray-600">Masuk</a>
                    </div>
                </div>
            </div>
            <nav className="container mx-auto mt-[calc(100vh/3.5)]">
                <Nav />
            </nav>
        </header>
        </>
    )
}

export default function Navbar() {
    //Nav menu
    const [open, setOpen] = useState(false)

    //Setting scroll condition
    const [navColor, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= window.innerHeight - 80) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    //Get scroll state
    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => {
            window.removeEventListener('scroll', changeColor);
        }
    }, [])

    const transition = {
        default: "ease-in duration-300",
        onScroll: "ease-in duration-200"
    }

    const navStyle = {
        default: {
            bg: "bg-spotDarkBlue/80",
            logo: "reverse",
            menu: "/nav-menu-white.svg",
            textColor: "text-white"
        },
        onScroll: {
            bg: "bg-white/80",
            logo: "normal",
            menu: "/nav-menu.svg",
            textColor: "text-gray-600"
        },
    }

    const switchStyle = {
        bg: navColor ? navStyle.onScroll.bg : navStyle.default.bg,
        logo: navColor ? navStyle.onScroll.logo : navStyle.default.logo,
        menu: navColor ? navStyle.onScroll.menu : navStyle.default.menu,
        textColor: navColor ? navStyle.onScroll.textColor : navStyle.default.textColor
    }

    return (
        <header className={`sticky top-0 z-50 backdrop-blur-lg ${switchStyle.bg} ${transition.default}`}>
            <MobileNav open={open} setOpen={setOpen} />
            <div className="container mx-auto px-4 md:px-10">
                <div className="grid grid-cols-3 items-center h-14 md:h-20 justify-items-center lg:justify-items-stretch">
                    <button 
                        onClick={() => setOpen(!open)}
                        type="button"
                        className="justify-self-start lg:hidden"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        {!open ? (
                            <img src={`${switchStyle.menu}`} />
                        ) : (
                            <img src="nav-menu-close.svg" />
                        )}
                    </button>
                    <Logo className="h-6 md:h-8 justify-self-center lg:justify-self-start" variant={`${switchStyle.logo}`} />
                    <div className="lg:justify-self-center min-w-max lg:inline-block hidden">
                        <Nav color={`${switchStyle.textColor}`} />
                    </div>
                    <div className="lg:justify-self-end text-sm lg:inline hidden">
                        <a href="/error" className={`${switchStyle.textColor} font-bold mr-8`}>Masuk</a>
                        <Button click="/error" color="text-white bg-spotBlue" style="normal">Bergabung</Button>
                    </div>
                    <div className="justify-self-end text-sm lg:hidden">
                        <a href="/error" className={`${switchStyle.textColor} font-bold`}>Masuk</a>
                    </div>
                </div>
            </div>
        </header>
    )
}