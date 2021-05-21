import React from "react";

import { StyledAppBackground } from "./styled";

const AppBackground: React.FC = ({ children }) => {
  return <StyledAppBackground>{children}</StyledAppBackground>;
};

export { AppBackground };
