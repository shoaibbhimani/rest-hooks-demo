import React, { useState } from "react";
import { Button, Heading, useDisclosure } from "@chakra-ui/core";
import { useGetPosts } from "../../hooks/use-get-posts";
import { GetPostsType } from "../../resources/posts";
import { useDeletePost } from "../../hooks/use-delete-post";
import { PostDetail } from "../post-detail/post-detail";
import { Modal } from "../modal/modal";

import "./post-list.css";

const PostList = () => {
  const posts: GetPostsType[] = useGetPosts();
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const deletePost = useDeletePost();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onCloseHandler = () => {
    setSelectedPostId(null);
    onClose();
  };

  return (
    <>
      <Heading size="xs" mb=".4rem">
        Post List
      </Heading>
      <ul>
        {posts.map((post: GetPostsType) => {
          return (
            <li className="post-list-item" key={post.id}>
              <div>
                {post.title}
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setSelectedPostId(post.id ? post.id : null);
                    onOpen();
                  }}
                >
                  View
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    deletePost({ id: post.id }, undefined);
                  }}
                >
                  Delete
                </Button>
              </div>
            </li>
          );
        })}
      </ul>

      <Modal isOpen={isOpen} onClose={onCloseHandler} title="Post Detail">
        {selectedPostId !== null && <PostDetail id={selectedPostId} />}
      </Modal>
    </>
  );
};

export { PostList };
