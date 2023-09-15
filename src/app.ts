import { User } from "./models/User";
import { Post } from "./models/Post";
// import { Like } from "./models/Like.js";
// import { Comment } from "./models/Comment.js";

// await database.sync({ force: true });


const user = await User.findAll();
const post = await Post.findAll();
// const like = await Like.findAll();
// const comment = await Comment.findAll();

user.forEach((user) => {
  console.log(user.toJSON());
  console.log(user.getPosts());
});

// User.create({
//   name: "John",
//   nick_name: "Doe",
//   email_address: "ga@ga.com",
//   last_name: "Doe",
//   bio: "I'm a new user",
//   img_url: "https://www.google.com",
// });


post.forEach((post) => {
  console.log(post.toJSON());
});

// like.forEach((like) => {
//   console.log(like.toJSON());
// });

// comment.forEach((comment) => {
//   console.log(comment.toJSON());
// });
