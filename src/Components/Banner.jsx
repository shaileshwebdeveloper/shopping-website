import { Box, Img, Text } from "@chakra-ui/react";
import React from "react";
import bannerImage from "../Assets/bannerImage/happyface.jpg";
import styles from "../CSS/Product.module.css";

export const Banner = () => {
  return (
    <Box className={styles.bannerImage} w="100%" m="auto">
      <Img src={bannerImage} mt="10px" w={{base :"120%", md:"100%", lg : "100%"}} h={{base :"300px", md:"300px", lg : "400px"}} />
      <Box textAlign={"left"} className={styles.bannerTextBox}>
        <Text m="0px" className={styles.bannerText}>
          SHOP, SAVE, SLAY:
        </Text>
        <Text m="0px" className={styles.bannerText}>
          SITEWIDE SALE
        </Text>
        ``
      </Box>
    </Box>
  );
};
