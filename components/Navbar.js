import { useEffect, useState } from "react"
import Button from "./Button"
import Logo from "./Logo"
import Nav from "./Nav"

export default function Navbar() {
    const [navColor, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 700) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    }
    }, [])

    const transition = {
        default: " ease-in duration-300",
        onScroll: " ease-in duration-200"
    }

    const styles = {
        default:
            <header className={`sticky top-0 z-50 backdrop-blur-lg bg-spotDarkBlue/80 ${transition.default}`}>
                <div class="container mx-auto max-w-[1240px]">
                    <div class="grid grid-cols-3 h-20 items-center">
                        <Logo size="h-8" variant="reverse" />
                        <Nav color="text-white" />
                        <div class="text-right text-sm">
                            <button class="text-white font-bold mx-8">Masuk</button>
                            <Button color="text-white bg-spotBlue" style="normal">Bergabung</Button>
                        </div>
                    </div>
                </div>
            </header>,

        onScroll:
            <header className={`sticky top-0 z-50 backdrop-blur-lg bg-white/80 drop-shadow-sm ${transition.onScroll}`}>
                <div class="container mx-auto max-w-[1240px]">
                    <div class="grid grid-cols-3 h-20 items-center">
                        <Logo size="h-8" variant="normal" />
                        <Nav color="text-black" />
                        <div class="text-right text-sm">
                            <button class="text-black font-bold mx-8">Masuk</button>
                            <Button color="text-white bg-spotBlue" style="normal">Bergabung</Button>
                        </div>
                    </div>
                </div>
            </header>,
        }

    return (
        <>
            { navColor ? styles.onScroll : styles.default }
        </>
    )
}