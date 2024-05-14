import { ReactNode, createContext, useState } from "react";
import { TestTest } from "../types/d";

interface Props {
    children: ReactNode;
}

const TestContext = createContext<TestTest>({
    value: true,
    setValue: () => {},
});

export const TestProvider = ({ children }: Props) => {
    const [value, setValue] = useState(false);

    return (
        <TestContext.Provider value={{ value, setValue }}>
            {children}
        </TestContext.Provider>
    );
};

export default TestContext;
