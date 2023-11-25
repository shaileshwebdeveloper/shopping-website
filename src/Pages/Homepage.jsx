import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../Components/Banner";
import { FilterComp } from "../Components/FilterComp";
import { ProductList } from "../Components/ProductList";

export const Homepage = () => {
  return (
    <Box>
      <Banner />
       <Flex mt="2%" flexDirection={["column", "column", "row"]}>
        <FilterComp />
        <ProductList />
      </Flex>
    </Box>
  );
};
