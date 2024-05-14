import { Fragment, memo } from "react";
import { Outlet, useParams } from "react-router-dom";
import { ToDo } from "../types/d";

const Cards = memo(({ data }: { data: ToDo[] | null }) => {
    const { id } = useParams();
    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get("asdf"));

    // console.log(data);

    return (
        <>
            {id &&
                data &&
                data
                    .filter((e) => e.id === Number(id))
                    .map((e, i) => (
                        <Fragment key={i}>
                            <p>{e.title}</p>
                            <p>{id}</p>
                        </Fragment>
                    ))}

            <Outlet></Outlet>
        </>
    );
});

export default Cards;
