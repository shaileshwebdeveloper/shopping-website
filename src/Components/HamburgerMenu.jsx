import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const HamburgerMenu = () => {

    const navigate = useNavigate()


return(
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w="100%"
      p="20px 20px 0px 20px"
    >
      <Text
        fontWeight={"900"}
        as="b"
        onClick={() => navigate("/")}
        cursor={"pointer"}
      >
        SHOPLY
      </Text>

<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem as='a' href='/'>
      Home
    </MenuItem>
    <MenuItem as='a' href='#'>
      Products
    </MenuItem>
    <MenuItem  as='a' href='#'>
      Sale
    </MenuItem>
    <MenuItem  as='a' href='#'>
      Cart
    </MenuItem>
  </MenuList>
</Menu>
</Flex>
)}