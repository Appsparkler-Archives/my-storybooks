import Stack from "@mui/material/Stack/Stack";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button, { ButtonProps } from "@mui/material/Button";
import { SectionTitle } from "./SectionTitle";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "@mui/material/TextareaAutosize";
import noop from "lodash/fp/noop";
import { Box, IconButton } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";

export interface CompleteYourStatementProps {
  value?: string;
  onChange: NonNullable<TextareaAutosizeProps["onChange"]>;
  onClickNext?: ButtonProps["onClick"];
  onClickPrev?: ButtonProps["onClick"];
}

export const CompleteYourStatement = ({
  value,
  onChange,
  onClickNext = noop,
  onClickPrev = noop,
}: CompleteYourStatementProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const handleRef = useCallback<(el: HTMLTextAreaElement) => void>(
    (el: HTMLTextAreaElement) => {
      textAreaRef.current = el;
    },
    []
  );
  useEffect(() => {
    if (textAreaRef.current) {
      const val = textAreaRef.current.value;

      textAreaRef.current.focus();
      textAreaRef.current.value = "";
      textAreaRef.current.value = val;
    }
  }, []);

  const handleClickContentCopy = useCallback<
    NonNullable<ButtonProps["onClick"]>
  >((evt) => {
    navigator.clipboard.writeText(textAreaRef.current?.value || "");
  }, []);

  const ctaButtons = useMemo<JSX.Element>(() => {
    return (
      <Box display={"flex"} gap={1}>
        <Button
          onClick={onClickPrev}
          type="button"
          sx={{ alignSelf: "center" }}
        >
          PREV
        </Button>
        <IconButton
          size="medium"
          type="button"
          aria-label="refresh"
          onClick={handleClickContentCopy}
          sx={{ alignSelf: "center" }}
        >
          <ContentCopy />
        </IconButton>
      </Box>
    );
  }, [handleClickContentCopy, onClickPrev]);

  return (
    <Card sx={{ background: "#ffb74d" }}>
      <CardContent>
        <Stack direction="column" spacing={0}>
          <SectionTitle leftSideChildren={ctaButtons}>
            <span>Complete the statement with your observation</span>
          </SectionTitle>
          <TextareaAutosize
            minRows={4}
            onChange={onChange}
            ref={handleRef}
            style={{ fontSize: 20, padding: 10 }}
            value={value}
          />
        </Stack>
      </CardContent>
      <CardActions>{ctaButtons}</CardActions>
    </Card>
  );
};
