import { Fragment, memo } from "react";
import { useParams } from "react-router-dom";
import { ToDo } from "../types/d";

const Cards = memo(({ data }: { data: ToDo[] | null }) => {
    const { id } = useParams();
    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get("asdf"));
    // console.log(data);

    if (id && data) {
        const filtered = data.filter((e) => e.id === Number(id));

        if (filtered.length > 0) {
            return filtered.map((e, i) => (
                <Fragment key={i}>
                    <p>{e.title}</p>
                    <p>{id}</p>
                </Fragment>
            ));
        } else {
            return <div>여긴 404 페이지다 ㅠㅠ</div>;
        }
    }
});

export default Cards;
