import { http, HttpResponse } from 'msw';
import posts from "./data/posts.json";


export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/posts", () => {
    return HttpResponse.json(posts);
  }),
//   http.get("https://jsonplaceholder.typicode.com/posts/:postId", () => {
//     const { postId } = req.params;
//     const post = posts.find((post) => post.id === Number(postId));
//     if (!post) {
//       return res(ctx.status(404), ctx.json({ message: "Post not found" }));
//     }
//     return res(ctx.status(200), ctx.json(post));
//   }),
];