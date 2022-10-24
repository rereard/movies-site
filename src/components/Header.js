const Header = ({title}) => {
    return (
        <div className="w-full bg-cyan-400 p-4 fixed z-10 top-0">
            <h1 className="text-3xl text-white font-extrabold">{title}</h1>
        </div>
    )
}

export default Header