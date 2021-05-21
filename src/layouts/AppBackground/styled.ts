import styled from "styled-components";
import { DESIGN_VARS } from "../../constants";
import background1 from "../../assets/Background/Academy-Weather forecast-Bg-buttom.png";
import background2 from "../../assets/Background/Academy-Weather forecast-Bg-up.png";

const StyledAppBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${DESIGN_VARS.color.blue};
  background-image: url("${background1}"), url("${background2}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export { StyledAppBackground };
