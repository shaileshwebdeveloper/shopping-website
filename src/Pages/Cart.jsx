import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Img, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { DeleteIcon, StarIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts, handleRemoveCart } from "../Redux/product/action";

export const Cart = () => {
  const cart = useSelector((state) => state.ProductReducer.cart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1)

  const removeFromCart = (payload) => {
    dispatch(handleRemoveCart(payload));
  };


  useEffect(() => {
    dispatch(getCartProducts());
  }, [cart]);

  console.log("cart", cart)

  return (
    <>
     <Flex w="59%" m="auto" justifyContent={"space-between"}>
         <input type="checkbox" />
         <Text>Products</Text>
         <Text>Quantity</Text>
         <Text>Price</Text>
     </Flex>
     <hr />
    <Flex mt="20px">
      {cart.length >0 && cart?.map((item) => (
        <Flex textAlign={"left"} justifyContent={"space-around"} w="70%" m="auto">
            <Box>
            <input type="checkbox" />
           <Img src={require(`../Assets/productsImages/${item.image}`)} alt={item.Flextitle}
           h="100px"/>
           </Box>
           <Box>
           <Text as="b" fontWeight={"900"}>{item.title}</Text>
           <Text>{item.size}</Text>
           </Box>
           <Box border={"1px solid orange"} h="40px">
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
                <Box mt="10px">
                <Button colorScheme='orange' variant='outline'  onClick={() => removeFromCart(item.id)}> <DeleteIcon /> Remove</Button>
                </Box>
              </Box>
              <Text as="b" fontWeight={"900"}>{item.price}</Text>
        </Flex>
      ))}
      <Box>

      </Box>
    </Flex>
    </>
  );
};