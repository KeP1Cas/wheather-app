import styled from "styled-components";

import { DESIGN_VARS } from "../../constants";

import { MetaProps } from "./index";

const StyledMeta = styled.p<MetaProps>`
  color: ${DESIGN_VARS.color.grey};
  font-size: ${DESIGN_VARS.fontSize.meta};
  line-height: ${DESIGN_VARS.lineHeight.meta};
  font-family: ${({ bold }) => (bold ? "UbuntuBold" : "UbuntuRegular")};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
`;

export { StyledMeta };
