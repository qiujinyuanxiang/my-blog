import type { Post } from "./types.js";

async function fetchPosts(): Promise<Post[]> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok) {
            throw new Error(`请求失败, 状态码: ${response.status}`);
        }
        
        const data: Post[] = await response.json();

        return data;

    } catch (error) {
        throw error;
    }
}

export {
    fetchPosts
};