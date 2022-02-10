import Typography from "@mui/material/Typography/Typography";
import React from "react";

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Typography component="div" gutterBottom variant="h5">
    {children}
  </Typography>
);
