import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import "../index.css";
import { ToDo } from "../types/d";

const StyledDiv = styled.div<{ $one: ToDo | null }>`
    position: relative;
    width: 600px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: ${(props) => (props.$one?.completed ? "green" : "pink")};
`;
const About = ({ data }: { data: ToDo[] | null }) => {
    const navigate = useNavigate();

    // console.log(data && data[0]);

    const notify = () =>
        toast("Wow so easy !", {
            position: "top-center",
            className: "foo-bar",
        });

    return (
        <section className="wrapper">
            {data && data.length > 0 ? (
                <StyledDiv $one={data[0]}>얌마 어바웃이다</StyledDiv>
            ) : (
                <StyledDiv $one={null}>데이터가 없습니다.</StyledDiv> // 데이터가 없을 때 보여줄 내용
            )}

            <button onClick={() => navigate("/")}>이거 눌러봐라</button>
            <button onClick={notify}>이것도 눌러봐라!</button>

            <ToastContainer />
        </section>
    );
};

export default About;
