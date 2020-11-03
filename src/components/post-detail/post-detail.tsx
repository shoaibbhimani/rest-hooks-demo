import React, { useEffect, useState } from "react";
import { Flex, Box } from "@chakra-ui/core";
import { useGetPostsDetail } from "../../hooks/use-get-posts-detail";
import { GetPostsType } from "../../resources/posts";

const PostDetail = ({ id }: { id: number }) => {
  const [postDetail, setPostDetail] = useState<GetPostsType | null>(null);
  const fetchPostDetail = useGetPostsDetail();

  useEffect(() => {
    if (id !== null) {
      fetchPostDetail({ id })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  }, [id]);

  if (postDetail === null) {
    return <div>Loading Post Detail</div>;
  }

  return (
    <>
      <Flex>
        <Box color="grey" marginRight=".4rem">
          Title
        </Box>
        <Box>{postDetail.title}</Box>
      </Flex>
      <Flex mt="1rem">
        <Box color="grey" marginRight=".4rem">
          Description
        </Box>
        <Box>{postDetail.description}</Box>
      </Flex>
    </>
  );
};

export { PostDetail };
