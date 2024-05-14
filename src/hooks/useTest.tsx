import { useContext } from "react";
import TestContext from "../context/testContext";

export function useTest() {
    return useContext(TestContext);
}
