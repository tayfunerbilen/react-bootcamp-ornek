import { get, post } from "./index";

export const getAllPosts = () => get('posts')
export const getPostDetail = id => get(`posts/${id}`)
export const getPostComments = id => get(`posts/${id}/comments`)
export const setNewPost = data => post('posts', data)
