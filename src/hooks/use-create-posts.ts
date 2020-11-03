import { useFetcher } from "rest-hooks";

import GetPostsResource from "../resources/posts";

const useCreatePost = () => {
  return useFetcher(GetPostsResource.createShape());
};

export { useCreatePost };
