import { Resource } from "rest-hooks";

export default class ProductResource extends Resource {
  readonly title: string = "";
  readonly desc: string = "";

  pk() {
    return this.title?.toString();
  }

  static customShape() {
    const resources = super.detailShape();

    return {
      ...resources,
      schema: this.asSchema(),
    };
  }

  static url<T extends typeof Resource>(
    this: T,
    { productId, category }: { productId: number; category: string }
  ): string {
    return `http://localhost:3002/project-info/${productId}/category/${category}`;
  }
}

export type ProductType = Omit<ProductResource, "pk" | "url" | "toString">;
