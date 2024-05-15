import { useNavigate } from "react-router-dom";
import "../index.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <section className="wrapper">
            <div>얌마 홈이다 이놈아!!!</div>

            <button onClick={() => navigate("/")}>이거 눌러봐라</button>
        </section>
    );
};

export default Home;
