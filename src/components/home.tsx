import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { minus, plus } from "../store/countSlice";
import { RootState } from "../store/store";

const Home = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <section className="wrapper">
            <div>얌마 홈이다 이놈아!!!</div>
            <button onClick={() => dispatch(minus())}>-</button>
            Value: {count}
            <button onClick={() => dispatch(plus())}>+</button>
        </section>
    );
};

export default Home;
