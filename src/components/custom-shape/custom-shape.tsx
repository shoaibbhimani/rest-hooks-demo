import React from "react";
import { useProduct } from "../../hooks/use-custom-shape";
import { Box, Heading } from "@chakra-ui/core";

const CustomShape = () => {
  const product = useProduct({ category: "shoes", productId: 123 });

  return (
    <Box>
      <Heading size="md">{product.title}</Heading>
      <Box marginTop=".7rem">{product.desc}</Box>
    </Box>
  );
};

export { CustomShape };
