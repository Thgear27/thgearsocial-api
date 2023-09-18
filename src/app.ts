import { User } from "./models/User";
import { Post } from "./models/Post";
import { Like } from "./models/Like";
import { PostComment } from "./models/Comment";

const user = await User.findAll();
const post = await Post.findAll();
const like = await Like.findAll();
const comment = await PostComment.findAll();

console.log(user.length);

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
