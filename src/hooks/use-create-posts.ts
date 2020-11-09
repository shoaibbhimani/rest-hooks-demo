import { useFetcher } from "rest-hooks";

import GetPostsResource from "../resources/posts";

const useCreatePost = () => {
  return useFetcher(GetPostsResource.createShape());
};

const useEditPost = () => {
  return useFetcher(GetPostsResource.updateShape());
};

export { useCreatePost, useEditPost };
