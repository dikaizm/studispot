import { useEffect, useState } from "react"
import Button from "./Button"
import Logo from "./Logo"
import Nav from "./Nav"

export default function Navbar() {
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
            textColor: "text-black"
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
            <div className="container mx-auto px-4 sm:px-0 xl:max-w-[1240px] lg:max-w-[1000px]">
                <div className="grid grid-cols-3 items-center h-14 md:h-20">
                    <div className="justify-self-start lg:hidden">
                        <img src={`${switchStyle.menu}`} />
                    </div>
                    <Logo className="h-6 sm:h-8 justify-self-center lg:justify-self-start" variant={`${switchStyle.logo}`} />
                    <div className="lg:justify-self-center lg:block hidden">
                        <Nav color={`${switchStyle.textColor}`} />
                    </div>
                    <div className="lg:justify-self-end lg:text-sm lg:inline hidden">
                        <a href="/error" className={`${switchStyle.textColor} font-bold mx-8`}>Masuk</a>
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