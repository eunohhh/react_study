import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

const StyledHeader = styled.header`
    position: relative;
    width: 1000px;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    margin: 0 auto;
`;

const Header = () => {
    return (
        <StyledHeader className="my_header">
            <Link to={"/"}>홈</Link>
            <Link to={"/detail"}>디테일</Link>
            <Link to={"/about"}>어바웃</Link>
        </StyledHeader>
    );
};

export default Header;
