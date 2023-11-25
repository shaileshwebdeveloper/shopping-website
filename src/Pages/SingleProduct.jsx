import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Circle, Flex, Img, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import styles from "../CSS/SingleProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { handleAddCart } from "../Redux/product/action";

export const SingleProduct = () => {
  const [data, setData] = useState("");
  const [size, setSize] = useState('')
  const { id } = useParams();
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);
  const cart = useSelector((state) => state.ProductReducer.cart);

  const getProductById = (id) => {
    return axios(`http://localhost:3004/Products/${id}`);
  };

  useEffect(() => {
    getProductById(id)
      .then((r) => {
        setData(r.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const addCart = (product) => {
    product.size =  size
    const productExist = cart?.filter((item) => item.id === product.id);
    if (productExist.length === 0) {
      dispatch(handleAddCart(product));
    } else {
      alert("Product Already Exist");
    }
  };

  

  return (
    <>
      <Flex justifyContent={"space-around"} mb="50px">
        <Box className={styles.singleProductImage}>
          {data && data.image && (
            <Img
              src={(() => {
                try {
                  return require(`../Assets/productsImages/${data.image}`);
                } catch (error) {
                  console.error("Error loading image:", error);
                  return null;
                }
              })()}
              w="500px"
              h="auto"
            />
          )}

          <Box className={styles.doubleImage}>
            <Img
              border={"1px solid black"}
              src={(() => {
                try {
                  return require(`../Assets/productsImages/${data.image}`);
                } catch (error) {
                  console.error("Error loading image:", error);
                  return null;
                }
              })()}
            />
            <Img
             border={"1px solid black"}
              src={(() => {
                try {
                  return require(`../Assets/productsImages/${data.image}`);
                } catch (error) {
                  console.error("Error loading image:", error);
                  return null;
                }
              })()}
            />
          </Box>
        </Box>
        <Box alignItems={"center"} textAlign={"left"} w="500px">
          <Text as="b" fontSize={"4xl"}>
            {data.title}
          </Text>
          <br />
          <Flex gap={"10px"}>
            <Text as="b"> $ {data.strikedPrice}</Text>
            <Text as="b" color={"orange"}>
              {" "}
              $ {data.price}
            </Text>
          </Flex>
          <br />
          <Text as="b" mb="100px">
            Color
          </Text>
          <Flex justifyContent={"space-around"} w="30%">
            <Circle size="30px" bg="black" color="white"></Circle>
            <Circle size="30px" bg="red" color="white"></Circle>
            <Circle size="30px" bg="grey" color="white"></Circle>
          </Flex>
          <br />
          <Text as="b" mb="100px">
            Size
          </Text>
          <Box>
            <Flex gap={"1rem"}>
              <Button colorScheme="black" variant="outline" p="0 30px" onClick={() => setSize("small")}>
                {" "}
                S{" "}
              </Button>
              <Button colorScheme="black" variant="outline" p="0 30px" onClick={() => setSize("medium")}>
                {" "}
                M{" "}
              </Button>
              <Button colorScheme="black" variant="outline" p="0 30px" onClick={() => setSize("large")}>
                {" "}
                L{" "}
              </Button>
              <Button colorScheme="black" variant="outline" p="0 30px" onClick={() => setSize("extra large")}>
                {" "}
                XL{" "}
              </Button>
            </Flex>
          </Box>
          <Flex justifyContent={"space-between"} w="70%" mt="2%">
            <Text as="b" mb="50px">
              Quantity
            </Text>
            <Box color={"orange"}>
              <Text color="blue">Quantity</Text>
              <Box border={"1px solid orange"}>
                <Button
                  color={"orange"}
                  variant="ghost"
                  isDisabled={quantity === 1}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </Button>
                &nbsp;&nbsp;{quantity}&nbsp;&nbsp;
                <Button
                  color={"orange"}
                  variant="ghost"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </Box>
            </Box>
          </Flex>
          <Button colorScheme="orange" variant="solid" w="90%" onClick={() => addCart(data)}>
            Add To Cart
          </Button>
          <br />
          <Button colorScheme="black" variant="outline" w="90%" mt="5%">
            <FaRegHeart />
            &nbsp;&nbsp; Favourite
          </Button>
        </Box>
      </Flex>
      <Box textAlign={"left"} w="50%">
        <Text m="10px" as="b">
          Description
        </Text>
        <hr />
        <Text m="5px">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </Text>
        <Box lineHeight={"30px"}>
          <Text>
            <CheckIcon /> &nbsp;100% pima cotton
          </Text>
          <Text>
            <CheckIcon /> &nbsp;Made In Peru
          </Text>
          <Text>
            <CheckIcon /> &nbsp;Breathable Pima cotton pique
          </Text>
          <Text>
            <CheckIcon /> &nbsp;Rib knit crewneck
          </Text>
          <Text>
            <CheckIcon /> &nbsp;Embroidered Bunny logo at chest
          </Text>
          <Text>
            <CheckIcon /> &nbsp;Knit stripes at cuffs
          </Text>
        </Box>
      </Box>
    </>
  );
};
