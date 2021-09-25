import { Router } from "express";
import { Post } from "../../model/post";

const createPostRouter = Router();

createPostRouter.post('/', (req, res) => {
  const post: Post = req.body;

  res.status(200).json({
    userId: post.userId,
    message: post.message
  });
});

export default createPostRouter;
