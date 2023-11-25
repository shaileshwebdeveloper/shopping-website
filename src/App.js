import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { AllRoutes } from "./Pages/AllRoutes";
import { Box } from "@chakra-ui/react";
import { HamburgerMenu } from "./Components/HamburgerMenu";
import styles from "./CSS/Navbar.module.css"

function App() {
  return (
    <Box className="App" w={{base : "100%", md : "100%", lg :"90%"}} m="auto">
      <Box className={styles.hideNavbar}>
       <Navbar />
      </Box >
      <Box className={styles.showHamburger}>
       <HamburgerMenu />
      </Box>
      <br />
      <AllRoutes />
      <br />
      <Footer />
    </Box>
  );
}

export default App;
