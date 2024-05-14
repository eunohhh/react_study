import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Cards from "./components/cards";
import Detail from "./components/detail";
import Error from "./components/error";
import Header from "./components/header";
import Home from "./components/home";
import { useFetchData } from "./hooks/useFetchData";
import { useTest } from "./hooks/useTest";

function App() {
    const navigate = useNavigate();
    const { value, setValue } = useTest();
    const { data, loading, error } = useFetchData();

    useEffect(() => {
        setValue(true);
        console.log(value);
    }, [value, setValue]);

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
                <Route path="/detail" element={<Detail />}>
                    <Route path=":id" element={<Cards data={data} />} />
                </Route>
            </Routes>

            <button onClick={() => navigate("/")}>이거 눌러봐라</button>
        </>
    );
}

export default App;
