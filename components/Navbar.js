import Button from "./Button"
import Nav from "./Nav"

export default function Navbar() {
    return (
        <header class="sticky top-0 z-50 bg-spotDarkBlue">
            <div class="container mx-auto px-100">
                <div class="flex h-20 items-center">
                    <div class="h-8 w-4/12">
                        <img src="/logo-studispot-white.svg"/>
                    </div>
                    <Nav />
                    <div class="text-right text-sm w-4/12">
                        <button class="text-white font-bold mx-8">Masuk</button>
                        <Button color="text-white bg-spotBlue" size="normal">Bergabung</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}