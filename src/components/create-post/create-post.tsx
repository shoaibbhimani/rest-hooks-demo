import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/core";

import { useCreatePost, useEditPost } from "../../hooks/use-create-posts";
import { InvalidateGetPost } from "../../hooks/use-get-posts";
import { useFetcherGetPostsDetail } from "../../hooks/use-get-posts-detail";

import "./create-post.css";

type CreateTypeProps = {
  postId?: number;
};

const CreatePost = ({ postId }: CreateTypeProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const createPost = useCreatePost();
  const editPost = useEditPost();
  const refetchGetPost = InvalidateGetPost();
  const fetcherPostDetail = useFetcherGetPostsDetail();

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (postId) {
      editPost({ id: postId }, { title, description });
    } else {
      createPost(
        {},
        {
          title,
          description,
          completed: false,
        }
      ).then(() => {
        refetchGetPost({});
        setTitle("");
        setDescription("");
      });
    }
  };

  useEffect(() => {
    if (postId) {
      fetcherPostDetail({ id: postId }).then(({ title, description }) => {
        setTitle(title);
        setDescription(description);
      });
    }
  }, [postId]);

  return (
    <section>
      <Heading as="h4" size="xs" marginBottom="0.9rem">
        Create Post
      </Heading>

      <form onSubmit={onSubmitHandler}>
        <FormControl>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setTitle(event.target.value)
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="desc">Description</FormLabel>
          <Input
            type="text"
            id="desc"
            value={description}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setDescription(event.target.value)
            }
          />
        </FormControl>

        <div>
          <Button mt={4} variantColor="teal" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export { CreatePost };
