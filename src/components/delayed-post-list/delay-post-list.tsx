import React, { useState } from "react";
import { Heading, Button } from "@chakra-ui/core";

import { useDelayedGetPost } from "../../hooks/use-get-posts";
import { GetPostsType } from "../../resources/posts";

const DelayedPostList = () => {
  const [posts, setPosts] = useState([]);
  const fetchPost = useDelayedGetPost();

  const fetchPostHandler = () => {
    fetchPost({}).then((data) => {
      setPosts(data);
    });
  };

  return (
    <>
      <Heading size="xs" mb=".4rem">
        Delayed Post list
      </Heading>
      <Button
        onClick={fetchPostHandler}
        mb={4}
        mt={4}
        variantColor="teal"
        type="submit"
        size="sm"
      >
        Get Post
      </Button>

      <ul>
        {posts.map((post: GetPostsType) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </>
  );
};

export { DelayedPostList };
