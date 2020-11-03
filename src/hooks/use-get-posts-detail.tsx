import { useResource } from "rest-hooks";

import GetPostsResource from "../resources/posts";

const useGetPostsDetail = ({ id }: { id: number }) => {
  return useResource(GetPostsResource.detailShape(), {
    id,
  });
};

export { useGetPostsDetail };
