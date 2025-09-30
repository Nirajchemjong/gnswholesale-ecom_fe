interface ButtonTypes {
    name: string,
    onClick: () => void,

}

const Button: React.FC<ButtonTypes> = ({ name, onClick }) => {
    return (
        <button onClick={onClick} className="ring-1 block border-dashed border-white-700 border-2 ring-black bg-primary-2 text-white p-4 px-8 rounded-full text-center" >
            {name}
        </button>
    )
}

export default Button