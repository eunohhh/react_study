import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
    return (
        <header className="my_header">
            <Link to={"/"}>홈</Link>
            <Link to={"/detail"}>디테일</Link>
            <Link to={"/about"}>어바웃</Link>
        </header>
    );
};

export default Header;
