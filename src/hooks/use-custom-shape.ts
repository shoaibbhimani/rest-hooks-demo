import { useResource } from "rest-hooks";

import ProductResource from "../resources/product";

const useProduct = ({
  category,
  productId,
}: {
  category: string;
  productId: number;
}) => {
  return useResource(ProductResource.customShape(), { category, productId });
};

export { useProduct };
