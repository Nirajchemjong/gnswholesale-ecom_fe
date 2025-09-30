
import Button from "../../../ui/button/Button";
type LayoutShiffterProps = {
    children?: React.ReactNode
}

const LayoutShiffter = ({ children }: LayoutShiffterProps) => {
    return (<>
        <header>this is a header

        <div className="px-4">
                <div className="py-4">
                    <Button name="Register as a Trader" onClick={() => alert("niraj is clicked")} />
                </div>
            </div>
        </header>
        <main className="main grid-cols-1">
            {children}
        </main>
        <footer>
            This is a footer
        </footer>
    </>)
}

export default LayoutShiffter