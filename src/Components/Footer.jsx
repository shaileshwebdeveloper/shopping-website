import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaInstagram, FaSnapchat } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box
      p="5% 0px"
      w="100%"
      bgColor={"#F5F5F5"}
      color={"black"}
      fontWeight={"700"}
    >
      <Flex
        justifyContent={"space-between"}
        p="2% 5%"
        flexDirection={["column", "column", "row"]}
      >
        <Box textAlign={"left"}>
          <Text fontWeight={"900"} as="b" fontSize={"2xl"}>
            Outfit
          </Text>
          <br />
          <br />
          <Text m="0" p="0">
            Discover Your Distinctive Look:
          </Text>
          <Text m="0" p="0">
            Fashioned with Precision, Worn with Confidence
          </Text>
        </Box>
        <Box>
          <Flex justifyContent={"space-around"} gap={"5%"} flexDirection={["column", "column", "row"]} textAlign={"left"}>
            <Text>Home</Text>
            <Text>Products</Text>
            <Text>Sale</Text>
            <Text>Cart</Text>
            <Text>Checkout</Text>
          </Flex>
          <Box p="5%">
            <Flex justifyContent={["flex-start","flex-end","flex-end"]} gap={"15%"}>
              <FaFacebook />
              <FaInstagram />
              <FaSnapchat />
            </Flex>
          </Box>
        </Box>
      </Flex>
      <hr />
      <Flex justifyContent={["flex-start","space-between","space-between"]} p={"0px 10%"}  flexDirection={["column", "column", "row"]}>
        <Text>Privacy Policy</Text>
        <Text>@ 2023 OutFit.in</Text>
        <Text>Terms & Condition</Text>
      </Flex>
    </Box>
  );
};
