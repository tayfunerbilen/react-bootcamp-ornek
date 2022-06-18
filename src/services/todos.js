import { post } from "./index";

export const getTodos = () => post('todos', {})
