import logo from "../../../images/Around.svg";
import vector from "../../../images/Vector.svg";

function Header() {
    return (
        <>
        <header className="header">
            <img
              src={logo}
              alt="Around_The_U.S."
              className="header__title"
            />
            <img src={vector} alt="Vector" className="header__element" />
        </header>
        </>
    )
}

export default Header