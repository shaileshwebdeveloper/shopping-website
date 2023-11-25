import { Box, Flex, Input, Text, flexbox } from "@chakra-ui/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../CSS/Navbar.module.css"
import { useSelector } from "react-redux";

export const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.ProductReducer.cart);

  const baseStyle = {
    textDecoration: "none",
  };
  
  const activeStyle = {
    color: "orange",
    fontSize: "20px",
    fontWeight: 900,
    textDecoration: "none",
  };
  

  
    const links = [
      {
        to: "/",
        title: "Products",
      },
      {
        to: "/sale",
        title: "Sale",
      },
      {
        to: "/cart",
        title: "Cart",
      },
    ];

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w="100%"
      p={{base :"20px 20px 0px 20px", md :"20px 80px 0px 50px", lg:"20px 20px 0px 20px"}}
    >
      <Text
        fontWeight={"900"}
        as="b"
        onClick={() => navigate("/")}
        cursor={"pointer"}
      >
        SHOPLY
      </Text>
      <Box alignItems={"center"} p="0 5%" w="50%">
        <Flex justifyContent={"space-evenly"} gap={"20px"}>

        {links.map((item) => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={item.to}
          key={item.to}
        >
          {item.title}
        </NavLink>
      ))}

          <form action="" style={{ display: "flex" }}>
            <Input type="text" placeholder="search" size="sm" w={{base:"300px",md:"200px",lg:"300px"}} />
            <Input
              type="submit"
              value="search"
              bgColor={"orange"}
              color={"white"}
              size="sm"
              w="100px"
            />
          </form>
        </Flex>
      </Box>
    </Flex>
  );
};
