import { expect, test } from "vitest";
import { User } from "../src/models/User";
import { PostComment } from "../src/models/Comment";
import { Like } from "../src/models/Like";
import { Post } from "../src/models/Post";

test("shouldn't throw errors with the database", async () => {
  const arrUser = await User.findAll();
  const arrPostComment = await PostComment.findAll();
  const arrPost = await Post.findAll();
  const arrLike = await Like.findAll();

  expect(arrUser.length).toBeGreaterThanOrEqual(0);
  expect(arrPostComment.length).toBeGreaterThanOrEqual(0);
  expect(arrPost.length).toBeGreaterThanOrEqual(0);
  expect(arrLike.length).toBeGreaterThanOrEqual(0);
});
