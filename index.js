import { getPosts } from "./postController.js";
console.log("Importing posts");
const importedPosts = getPosts();
console.log(importedPosts);