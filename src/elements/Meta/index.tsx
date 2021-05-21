import React from "react";

import { StyledMeta } from "./styled";

export type MetaProps = {
  bold?: boolean;
  uppercase?: boolean;
};

const Meta: React.FC<MetaProps> = ({ children, bold, uppercase }) => {
  return (
    <StyledMeta bold={bold} uppercase={uppercase}>
      {children}
    </StyledMeta>
  );
};

export { Meta };
