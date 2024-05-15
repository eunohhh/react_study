import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../index.css";
import { ToDo } from "../types/d";

const StyledDiv = styled.div<{ $todo: ToDo }>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    cursor: pointer;
    background-color: ${({ $todo }) => ($todo.completed ? "green" : "pink")};
`;

const Detail = ({ data }: { data: ToDo[] | null }) => {
    const navigate = useNavigate();

    const handleClick = (item: ToDo) => () => {
        navigate(`/detail/${item.id}`);
    };

    return (
        <section className="wrapper">
            야야야야야야임마
            <br />
            자식아
            <br />
            <Outlet></Outlet>
            {data?.map((e, i) => (
                <StyledDiv key={i} $todo={e} onClick={handleClick(e)}>
                    {e.title}
                </StyledDiv>
            ))}
        </section>
    );
};

export default Detail;
