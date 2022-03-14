import "./Header.css"
import { useLocation, Link } from 'react-router-dom'

function Header() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/")
    return (
        <header className="header">
            <ul className="nav__list">
                <li className={splitLocation[1] === "" ? "nav__item nav__item--primary" : "nav__item"}>
                    <Link to="/"><i className="fa-solid fa-house"></i>Giới thiệu</Link>
                </li>
                <li className={splitLocation[1] === "Skill" ? "nav__item nav__item--primary" : "nav__item"}>
                    <Link to="/Skill"><i className="fa fa-cogs"></i>Kỹ năng</Link>
                </li>
                <li className={splitLocation[1] === "CareerGoals" ? "nav__item nav__item--primary" : "nav__item"}>
                    <Link to="/CareerGoals">Mục tiêu nghề nghiệp</Link>
                </li>
            </ul>
            <div className="menu"><i className="fa-solid fa-bars"></i>
                <ul className="menu__list">
                    <li className={splitLocation[1] === "" ? "menu__item menu__item--selection" : "menu__item"}>
                        <Link to="/">Giới thiệu</Link>
                    </li>
                    <li className={splitLocation[1] === "Skill" ? "menu__item menu__item--selection" : "menu__item"}>
                        <Link to="/Skill">Kỹ năng</Link>
                    </li>
                    <li className={splitLocation[1] === "CareerGoals" ? "menu__item menu__item--selection" : "menu__item"}>
                        <Link to="/CareerGoals" >Mục tiêu nghề nghiệp</Link>
                    </li>
                </ul>
            </div>


        </header>
    )
}
export default Header;