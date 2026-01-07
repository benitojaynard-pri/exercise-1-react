// Call all functions inside services and log updated value/s
import {
    updateUser,
    getAllUsers,
    getUserById,
    addUser,
} from "./services/users";
import {
    getCommentById,
    getCommentsByPostId,
    updateCommentBody,
    deleteCommentById,
    addComment,
} from "./services/comments.js";

updateUser(3, { email: "jaynard@soft.en" });

console.log(addUser());
console.log(getUserById(3));
console.log(getAllUsers());

const newEntry = addComment({
    postId: 1,
    body: "This is a new comment!",
    author: "DevUser",
});
console.log("Added:", newEntry);

const postComments = getCommentsByPostId(1);
console.log("Comments for Post 1:", postComments);

const updated = updateCommentBody(newEntry.id, "This body has been updated!");
console.log("Updated Comment:", updated);

deleteCommentById(newEntry.id);
console.log("all Comments Deleted");

console.log(getCommentById(3));
