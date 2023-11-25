import { Box, Button, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DeleteIcon, StarIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { getProducts, handleAddCart } from "../Redux/product/action";
import { FaRegHeart } from "react-icons/fa";
import styles from "../CSS/Product.module.css";

export const ProductList = () => {
  const products = useSelector((state) => state.ProductReducer.products);
  const [size, setSize] = useState('')
  const cart = useSelector((state) => state.ProductReducer.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const category = searchParams.getAll("category");

  useEffect(() => {
    if (location || products.length === 0) {
      let getProductsParams = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
      dispatch(getProducts(getProductsParams));
    }
  }, [location.search]);

  const addCart = (product) => {
    product.size = size
    const productExist = cart?.filter((item) => item.id === product.id);
    if (productExist.length === 0) {
      dispatch(handleAddCart(product));
    } else {
      alert("Product Already Exist");
    }
  };


  return (
    <Box >
      <Flex alignItems={"flex-start"} gap={"22px"}  flexDirection={["column", "column", "column"]}>
        <Text fontSize={["sm", "md", "md"]}>Showing 9 results from total 18 for “shirts” on Sale</Text>
        <Flex>
          <Text fontSize={["sm", "md", "md"]}>Applied Filter:&nbsp;</Text>
          {category.map((item) => (
            <Box
              borderRadius={"10%"}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              mr="10px"
              p="5px 10px"
            >
              {item} <DeleteIcon />
            </Box>
          ))}
        </Flex>
      </Flex>

      <SimpleGrid columns={[2, 3, 3]} spacing={15} p={{base : "2px", md : "2px", lg :"10px"}} >
        {products?.map((item) => (
          <>
            <Box
              className={styles.discountContainer}
              key={item.id}
              p = {{base : "2%", md : "2%", lg :"5%"}}
              w={{base : "170px", md : "180px", lg :"300px"}}
              h="auto"
              textAlign={"left"}
              borderRadius={"5%"}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              m="auto"
            >
              <Box
                onClick={() => navigate(`/product/${item.id}`)}
                key={item.id}
              >
                <Box className={styles.discountText}>
                  <Text fontSize={"xs"}>{item.discount} OFF</Text>
                </Box>
                <Img
                  src={require(`../Assets/productsImages/${item.image}`)}
                  alt={item.name}
                  maxWidth="200px"
                  maxHeight="150px"
                  mb="5px"
                />
                <Text fontSize= {{base : "md", md : "md", lg :"lg"}} fontWeight={"bold"} mb="5px">
                  {item.title}
                </Text>
                <Flex justifyContent={"space-between"}>
                  <Text as="b" fontSize="md" mb="5px">
                    $ {item.price} <s>{item.strikedPrice}</s>
                  </Text>
                  <Text>
                    {item.ratings} <StarIcon color={"yellow"} />
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex justifyContent={"flex-start"} gap={{base : "5px", md : "5px", lg :"1rem"}}>
                  <Button colorScheme="orange" variant="outline" size={{base : "sm", md : "sm", lg :"md"}}  onClick={() => setSize("small")}>
                    {" "}
                    S{" "}
                  </Button>
                  <Button colorScheme="orange" variant="outline"  size={{base : "sm", md : "sm", lg :"md"}} onClick={() => setSize("medium")}>
                    {" "}
                    M{" "}
                  </Button>
                  <Button colorScheme="orange" variant="outline"  size={{base : "sm", md : "sm", lg :"md"}} onClick={() => setSize("large")}>
                    {" "}
                    L{" "}
                  </Button>
                  <Button colorScheme="orange" variant="outline"  size={{base : "sm", md : "sm", lg :"md"}} onClick={() => setSize("extra large")}>
                    {" "}
                    XL{" "}
                  </Button>
                </Flex>
              </Box>
              <Box>
                <Flex justifyContent={"space-between"} m="10px 0px">
                  <Button colorScheme="orange"  size={{base : "sm", md : "sm", lg :"md"}}  onClick={() => addCart(item)}>
                    ADD TO CART
                  </Button>
                  <Button
                    colorScheme="orange"
                    size={{base : "sm", md : "sm", lg :"md"}} 
                    color={"white"}
                    borderRadius={"50%"}
                  >
                    <FaRegHeart />
                  </Button>
                </Flex>
              </Box>
            </Box>
          </>
        ))}
      </SimpleGrid>
    </Box>
  );
};
