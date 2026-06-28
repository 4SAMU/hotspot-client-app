import { NavigatorContainer } from "./navigatorStyles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Box } from "@mui/material";

const NavigatorSection = () => {
  return (
    <NavigatorContainer>
      <Box className="icons">
        <HomeOutlinedIcon />
      </Box>
      <Box className="icons">
        <PersonOutlinedIcon />
        <span className="icon_badge"></span>
      </Box>
    </NavigatorContainer>
  );
};

export default NavigatorSection;
