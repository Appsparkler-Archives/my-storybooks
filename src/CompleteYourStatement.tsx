import Stack from "@mui/material/Stack/Stack";
import React, { useCallback, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button, { ButtonProps } from "@mui/material/Button";
import { SectionTitle } from "./SectionTitle";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "@mui/material/TextareaAutosize";
import noop from "lodash/fp/noop";

export interface CompleteYourStatementProps {
  value?: string;
  onChange: TextareaAutosizeProps["onChange"];
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
      textAreaRef.current.focus();
    }
  }, []);

  return (
    <Card sx={{ background: "#ffb74d" }}>
      <CardContent>
        <Stack direction="column" spacing={0}>
          <SectionTitle>
            <span>
              Please write something (for ex. your observation) to complete your
              statement
            </span>
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
      <CardActions>
        <Button onClick={onClickPrev}>PREV</Button>
        <Button disabled={!value} onClick={onClickNext}>
          NEXT
        </Button>
      </CardActions>
    </Card>
  );
};
