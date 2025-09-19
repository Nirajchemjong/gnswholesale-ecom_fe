import Button from "../../component/button/Button"

const LayoutShiffter = () => {
    return (<>
        <header>this is a header
            <Button name="Register as a Trader" onClick={() => alert("niraj is clicked")} />
        </header>
        <main className="main grid-cols-1">
            <section className="h-40 w-full crasoul bg-gray-500"></section>
            <section className="h-40 w-full features bg-gray-300"></section>
            <section className="h-40 w-full category-section bg-gray-200"></section>
            <section className="h-40 w-full client-logo bg-amber-200"></section>
            <section className="h-40 w-full premium-section bg-amber-500"></section>
            <section className="h-40 w-full Promo-Image bg-amber-800"></section>
            <section className="h-40 w-full Testomonial bg-green-400"></section>
            <section className="h-40 w-full Register-frame bg-text-secondary"></section>
        </main>
        <footer>
            This is a footer
        </footer>
    </>
    )
}

export default LayoutShiffter