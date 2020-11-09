import { Resource } from "rest-hooks";

export type PostTypes = {
  title: string;
  description: string;
  completed: boolean;
};

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
    return `http://localhost:3002/posts`;
  }

  // For Rest
  static url<T extends typeof Resource>(
    this: T,
    { id }: { id: number }
  ): string {
    return `http://localhost:3002/posts/${id}`;
  }
}

export type GetPostsType = Omit<PostsResource, "pk" | "url" | "toString">;
