import { useFetcher } from "rest-hooks";
import GetPostsResource from "../resources/posts";

const useGetPostsDetail = () => {
  return useFetcher(GetPostsResource.detailShape());
};

export { useGetPostsDetail };
