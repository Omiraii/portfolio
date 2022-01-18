const Navbar = (props) => {
    return (
        <div className="nav-bar">
            <ul>
                <li className="n-home" onClick={props.changePage}>Home</li>
                <li className="n-projects" onClick={props.changePage}>Projects</li>
                <li className="n-about" onClick={props.changePage}>About</li>
                <li className="n-contact" onClick={props.changePage}>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;