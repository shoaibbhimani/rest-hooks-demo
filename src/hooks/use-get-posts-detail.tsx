import { useResource, useFetcher } from "rest-hooks";

import GetPostsResource from "../resources/posts";

const useGetPostsDetail = ({ id }: { id: number }) => {
  return useResource(GetPostsResource.detailShape(), {
    id,
  });
};

const useFetcherGetPostsDetail = () => {
  return useFetcher(GetPostsResource.detailShape());
};

export { useGetPostsDetail, useFetcherGetPostsDetail };
