import Box from "@mui/material/Box";
import React from "react";

export interface SectionTitleProps {
  children: React.ReactNode;
  leftSideChildren?: React.ReactNode;
}

export const SectionTitle = ({
  children,
  leftSideChildren,
}: SectionTitleProps) => (
  <Box>
    <Box>{leftSideChildren}</Box>
  </Box>
);
