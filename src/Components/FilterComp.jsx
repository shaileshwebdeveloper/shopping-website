import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../CSS/Product.module.css"

export const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategoryFilters = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategoryFilters || []);

  const handleCategoryFilterCheckbox = (e) => {
    const newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    console.log(newCategory);
    setCategory(newCategory);
  };

  useEffect(() => {
    if (category) {
      let params = {};
      category && (params.category = category);
      setSearchParams(params);
    }
  }, [setSearchParams, category]);

  return (
    <Box style={{ textAlign: "left" }} w={{base : "100%", md : "25%", lg :"30%"}} >
      <Box
        p={{base : "15%", md : "15% 5%", lg :"15%"}}
        w="80%"
        m={{base: "auto", md : "auto", lg :"auto"}}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      >
        <Text
          fontSize="md"
          fontWeight="900"
          mb="10px"
          p="2% 5%"
          color={"black"}
          bgColor={"#ffe5d0"}
          borderRadius={"5px"}
        >
          Category <ChevronDownIcon />
        </Text>
        <Text fontSize="md" fontWeight="900" mb="10px" color={"black"}>
          Women
        </Text>
        <br />

        <Box style={{ borderBottom: "0.2rem solid grey" }} pb="1rem">
          <Box>
            <input
              type="checkbox"
              value="Shirts"
              checked={category.includes("Shirts")}
              onChange={handleCategoryFilterCheckbox}
              style={{ margin: "0 5px 10px 0px" }}
            />
            <label>Shirts</label>
          </Box>

          <Box>
            <input
              type="checkbox"
              value="Dresses"
              checked={category.includes("Dresses")}
              onChange={handleCategoryFilterCheckbox}
              style={{ margin: "0 5px 10px 0px" }}
            />
            <label>Dresses</label>
          </Box>

          <Box>
            <input
              type="checkbox"
              value="Skirt"
              checked={category.includes("Skirt")}
              onChange={handleCategoryFilterCheckbox}
              style={{ margin: "0 5px 10px 0px" }}
            />
            <label>Skirt</label>
          </Box>
          <Box>
            <input
              type="checkbox"
              value="Sports"
              checked={category.includes("Sports")}
              onChange={handleCategoryFilterCheckbox}
              style={{ margin: "0 5px 10px 0px" }}
            />
            <label>Sports Clothing</label>
          </Box>

          <Box>
            <input
              type="checkbox"
              value="Shorts"
              checked={category.includes("Shorts")}
              onChange={handleCategoryFilterCheckbox}
              style={{ margin: "0 5px 10px 0px" }}
            />
            <label>Shorts</label>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
