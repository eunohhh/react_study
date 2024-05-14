import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Cards from "./components/cards";
import { useTest } from "./hooks/useTest";
import { ToDo } from "./types/d";

function App() {
    const [data, setData] = useState<ToDo[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const navigate = useNavigate();

    const { value, setValue } = useTest();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/todos"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error);
                } else {
                    console.log(error);
                }
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setValue && setValue(true);

        console.log(value);
    }, [value, setValue]);

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <Routes>
                <Route path="/" element={<div>얌마 홈이다</div>} />
                <Route path="/detail" element={<div>얌마 디테일이다</div>} />
                <Route path="/about" element={<div>얌마 어바웃이다</div>} />
                <Route path="/detail" element={<Cards data={data} />}>
                    <Route path="aaaa" element={<div>에휴</div>} />
                </Route>
                <Route path="*" element={<div>404 에러 ㅠㅠ</div>} />

                <Route path="/detail/:id" element={<Cards data={data} />} />
            </Routes>

            <Link to={"/"}>홈</Link>
            <Link to={"/detail"}>디테일</Link>
            <Link to={"/about"}>어바웃</Link>

            <button onClick={() => navigate("/")}>이거 눌러봐라</button>
        </>
    );
}

export default App;
