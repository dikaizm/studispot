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
            bg: "bg-spotDarBlue/80",
            logo: "reverse",
            textColor: "text-white"
        },
        onScroll: {
            bg: "bg-white/80",
            logo: "normal",
            textColor: "text-black"
        },
    }

    const switchStyle = {
        bg: navColor ? navStyle.onScroll.bg : navStyle.default.bg,
        logo: navColor ? navStyle.onScroll.logo : navStyle.default.logo,
        textColor: navColor ? navStyle.onScroll.textColor : navStyle.default.textColor
    }

    return (
        <header className={`sticky top-0 z-50 backdrop-blur-lg ${switchStyle.bg} ${transition.default}`}>
            <div className="container mx-auto max-w-[1240px]">
                <div className="grid grid-cols-3 h-20 items-center">
                    <Logo className="h-8 justify-self-start" variant={`${switchStyle.logo}`} />
                    <Nav color={`${switchStyle.textColor}`} />
                    <div className="justify-self-end text-sm">
                        <a href="/error" className={`${switchStyle.textColor} font-bold mx-8`}>Masuk</a>
                        <Button click="/error" color="text-white bg-spotBlue" style="normal">Bergabung</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}