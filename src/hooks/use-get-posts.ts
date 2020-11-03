import { useResource, useInvalidator, useFetcher } from "rest-hooks";

import GetPostsResource from "../resources/posts";

const useGetPosts = () => {
  return useResource(GetPostsResource.listShape(), {});
};

const InvalidateGetPost = () => {
  return useInvalidator(GetPostsResource.listShape());
};

const useDelayedGetPost = () => {
  return useFetcher(GetPostsResource.listShape());
};

export { useGetPosts, InvalidateGetPost, useDelayedGetPost };
