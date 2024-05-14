// useFetchData.ts
import { useEffect, useState } from "react";
import { ToDo } from "../types/d";

export function useFetchData() {
    const [data, setData] = useState<ToDo[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

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

    return { data, loading, error };
}
