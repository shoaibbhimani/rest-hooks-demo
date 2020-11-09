import React, { useState } from "react";
import { Button, Heading, useDisclosure } from "@chakra-ui/core";
import { useGetPosts } from "../../hooks/use-get-posts";
import { GetPostsType } from "../../resources/posts";
import { useDeletePost } from "../../hooks/use-delete-post";
import { PostDetail } from "../post-detail/post-detail";
import { Modal } from "../modal/modal";

import "./post-list.css";
import { CreatePost } from "../create-post/create-post";

const PostList = () => {
  const posts: GetPostsType[] = useGetPosts();

  const [selectedPostId, setSelectedPostId] = useState<number>();
  const deletePost = useDeletePost();
  const {
    isOpen: isPostDetailOpen,
    onOpen: onPostDetailOpen,
    onClose: onPostDetailClose,
  } = useDisclosure();

  const {
    isOpen: isPostEditOpen,
    onOpen: onPostEditOpen,
    onClose: onPostEditClose,
  } = useDisclosure();

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
                {post.title}{" "}
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setSelectedPostId(post.id);
                    onPostDetailOpen();
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
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setSelectedPostId(post.id);
                    onPostEditOpen();
                  }}
                >
                  Edit
                </Button>
              </div>
            </li>
          );
        })}
      </ul>

      <Modal
        isOpen={isPostDetailOpen}
        onClose={onPostDetailClose}
        title="Post Detail"
      >
        {selectedPostId !== undefined ? (
          <PostDetail id={selectedPostId} />
        ) : null}
      </Modal>

      <Modal
        isOpen={isPostEditOpen}
        onClose={onPostEditClose}
        title="Post Edit"
      >
        {selectedPostId !== undefined ? (
          <CreatePost postId={selectedPostId} />
        ) : null}
      </Modal>
    </>
  );
};

export { PostList };
