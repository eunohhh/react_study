import styled from "styled-components";
import { ToDo } from "../types/d";

export const StyledDiv = styled.div<{ $todo: ToDo }>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    cursor: pointer;
    background-color: ${({ $todo }) => ($todo.completed ? "green" : "pink")};
`;
