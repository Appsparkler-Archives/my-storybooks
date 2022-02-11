import Typography from "@mui/material/Typography/Typography";
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
  <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
    <Typography component="div" gutterBottom variant="h5">
      {children}
    </Typography>
    <Box>{leftSideChildren}</Box>
  </Box>
);
