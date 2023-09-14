import { User } from "./models/User.js";
import { Post } from "./models/Post.js";
import { Like } from "./models/Like.js";
import { Comment } from "./models/Comment.js";

const user = await User.findAll();
const post = await Post.findAll();
const like = await Like.findAll();
const comment = await Comment.findAll();

user.forEach((user) => {
  console.log(user.toJSON());
});

post.forEach((post) => {
  console.log(post.toJSON());
});

like.forEach((like) => {
  console.log(like.toJSON());
});

comment.forEach((comment) => {
  console.log(comment.toJSON());
});
