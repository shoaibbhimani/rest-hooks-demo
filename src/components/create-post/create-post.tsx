import React, { useState, FormEvent, ChangeEvent } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/core";

import { useCreatePost } from "../../hooks/use-create-posts";
import { InvalidateGetPost } from "../../hooks/use-get-posts";

import "./create-post.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const createPost = useCreatePost();
  const refetchGetPost = InvalidateGetPost();

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

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
  };

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
