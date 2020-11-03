import React from "react";
import { Flex, Box } from "@chakra-ui/core";
import { useGetPostsDetail } from "../../hooks/use-get-posts-detail";
import { GetPostsType } from "../../resources/posts";

const PostDetail = ({ id }: { id: number }) => {
  const post: GetPostsType = useGetPostsDetail({ id });

  return (
    <>
      <Flex>
        <Box color="grey" marginRight=".4rem">
          Title
        </Box>
        <Box>{post.title}</Box>
      </Flex>
      <Flex mt="1rem">
        <Box color="grey" marginRight=".4rem">
          Description
        </Box>
        <Box>{post.description}</Box>
      </Flex>
    </>
  );
};

export { PostDetail };
