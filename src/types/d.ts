export interface ToDo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

export interface TestTest {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
}
