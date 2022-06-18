import { post } from "./index";

export const login = data => post('login', data)
export const register = data => post('register', data)
