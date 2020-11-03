import { useFetcher } from "rest-hooks";

import PostsResource from "../resources/posts";

const useDeletePost = () => {
  return useFetcher(PostsResource.deleteShape());
};

export { useDeletePost };
