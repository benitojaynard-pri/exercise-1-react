import { posts as data } from "../data/posts";
import { generateId } from "../utils";

// Private local state
let posts = [...data];

export function getPosts() {
    return posts;
}

export function getPostsByUser(userId) {
    return posts.filter((post) => post.userId === userId);
}

export function getPostById(id) {
    return posts.find((post) => post.id === id);
}

export function addPost(post) {
    const newPost = {
        ...post,
        id: generateId(posts),
    };
    // Add to the BEGINNING of the array
    posts = [newPost, ...posts];
    return newPost;
}

export function updatePostTitle(id, title) {
    posts = posts.map((post) =>
        post.id === id ? { ...post, title: title } : post
    );
    return getPostById(id);
}

export function updatePostBody(id, body) {
    posts = posts.map((post) =>
        post.id === id ? { ...post, body: body } : post
    );
    return getPostById(id);
}

export function updatePost(id, updatedFields) {
    posts = posts.map((post) =>
        post.id === id ? { ...post, ...updatedFields } : post
    );
    return getPostById(id);
}

export function deletePostBy(id) {
    posts = posts.filter((post) => post.id !== id);
}

export function deletePostsByUserId(userId) {
    posts = posts.filter((post) => post.userId !== userId);
}
