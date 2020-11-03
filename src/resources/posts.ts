import { Resource } from "rest-hooks";

export type PostTypes = {
  title: string;
  description: string;
  completed: boolean;
};

const PORT = 'http://localhost:3003/posts/';

export default class PostsResource extends Resource {
  readonly id: number | undefined = undefined;
  readonly title: string = "";
  readonly description: string = "";
  readonly completed: boolean = false;

  pk() {
    return this.id?.toString();
  }

  // used for Create Shape and List Shape
  static listUrl<T extends typeof Resource>(this: T): string {
    return PORT;
  }

  // For Rest
  static url<T extends typeof Resource>(
    this: T,
    { id }: { id: number }
  ): string {
    return `${PORT}${id}`;
  }
}

export type GetPostsType = Omit<PostsResource, "pk" | "url" | "toString">;
