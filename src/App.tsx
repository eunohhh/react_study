import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Cards from "./components/cards";
import Detail from "./components/detail";
import Error from "./components/error";
import Header from "./components/header";
import Home from "./components/home";
import Loading from "./components/loading";
import { useFetchData } from "./hooks/useFetchData";
import { useTest } from "./hooks/useTest";

function App() {
    const { value, setValue } = useTest();
    const { data, loading, error } = useFetchData();

    useEffect(() => {
        setValue(true);
        console.log(value);
    }, [value, setValue]);

    return (
        <>
            {loading && <Loading />}
            {error && <p>Error: {error.message}</p>}

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About data={data} />} />
                <Route path="*" element={<Error />} />
                <Route path="/detail" element={<Detail data={data && data} />}>
                    <Route path=":id" element={<Cards data={data && data} />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
