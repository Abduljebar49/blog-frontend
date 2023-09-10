import { Blog } from "./blog";

export interface BlogResponse {
    data: Blog[],
    totalBlog: number,
    page: number,
    perPage: number
}