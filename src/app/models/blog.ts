import { Author } from "./author";
import { BlogType } from "./blog-type";

export interface Blog {
    title: string;
    type: BlogType[];
    author: Author;
    createdAt: Date;
    description: string;
    id: number,
    image: string;
}