import Button from "../../../ui/button/Button";
import SearchButton from "../../../ui/button/SearchButton";
import BrowserCategory from "../../assets/icons/BrowserCategory";
import Cart from "../../assets/icons/Cart";
import HeartIcon from "../../assets/icons/HeartIcon";
import SignInIcon from "../../assets/icons/SignIn";
type LayoutShiffterProps = {
    children?: React.ReactNode
}

const LayoutShiffter = ({ children }: LayoutShiffterProps) => {
    return (<>
        <header>
            <section className="w-full bg-primary-2">
                <nav className="upper-nav" aria-label="sale">
                    <ul className="hidden md:flex items-center justify-around text-white p-4">
                        <li className="text-sm lg:text-base">
                            Call: +61 2 9643 2298
                        </li>
                        <li className="text-sm lg:text-base">
                            sale discount 50% off.
                        </li>
                        <li className="text-sm lg:text-base">
                            Serving NSW, QLD, VIC, SA & ACT
                        </li>
                    </ul>
                </nav>
            </section>

            <section className="w-full bg-bg-secondary" style={{ height:'auto', minHeight:'88px', alignSelf:'stretch' }}>
                <nav>
                    <ul className="flex flex-col md:flex-row items-center justify-around p-4 gap-4 md:gap-0">
                        <li className="items-center justify-center">
                            <img src="src/assets/images/logo.png" alt="Gnswholesale Logo" className="w-32 md:w-40" />
                        </li>
                        <li className="w-full md:w-80 self-center justify-center">
                            <SearchButton />
                        </li>
                        <li className="flex flex-col sm:flex-row items-center justify-center gap-2">
                            <button className="flex items-center justify-center" onClick={() => alert("Sign In is clicked")}>
                                <SignInIcon className="mr-2" />
                                <span className="text-sm lg:text-base">Sign In</span>
                            </button>
                            <Button name="Register as Trader" onClick={() => alert("Sign In is clicked")} />
                        </li>
                    </ul>
                </nav>
            </section>

            <div className="mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-around p-3 gap-4 md:gap-0">
                    <div className="flex items-center justify-center text-black text-xl md:text-2xl font-light">
                        <BrowserCategory className="mr-2 w-8 h-8 md:w-10 md:h-10"/>
                        <span>Browser Category</span>
                    </div>
                    
                    <nav className="w-full md:w-auto">
                        <ul className="flex flex-wrap md:flex-nowrap items-center justify-center text-sm md:text-base font-light gap-4">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">For Supplier</a></li>
                            <li><a href="#">GNS Online</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </nav>

                    <div className="flex items-center justify-center gap-5">
                        <div className="flex items-center justify-center relative">
                            <HeartIcon className="mr-2 w-6 h-6 md:w-auto md:h-auto"/>
                            <span className="absolute -top-3 -right-1 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                0 
                            </span>
                        </div>
                        <div className="relative">
                            <Cart className="mr-2 w-6 h-6 md:w-auto md:h-auto"/>
                            <span className="absolute -top-3 -right-1 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                0
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main className="main grid-cols-1 gap-2">
            {children}
        </main>
        <footer>
            This is a footer
        </footer>
    </>)
}

export default LayoutShiffter