import Stack from "@mui/material/Stack/Stack";
import { useCallback, useEffect, useMemo, useRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { ButtonProps } from "@mui/material/Button";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "@mui/material/TextareaAutosize";
import noop from "lodash/fp/noop";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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

  const whatsAppHref = useMemo(() => {
    return `https://wa.me/?text=${encodeURI(value || "")}`;
  }, [value]);

  const ctaButtons = useMemo<JSX.Element>(() => {
    return (
      <Box display={"flex"} gap={1}>
        <IconButton
          onClick={onClickPrev}
          type="button"
          sx={{ alignSelf: "center" }}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          size="medium"
          type="button"
          aria-label="refresh"
          onClick={handleClickContentCopy}
          sx={{ alignSelf: "center" }}
        >
          <ContentCopy />
        </IconButton>
        <IconButton href={whatsAppHref}>
          <WhatsAppIcon />
        </IconButton>
        <IconButton
          onClick={onClickNext}
          type="button"
          sx={{ alignSelf: "center" }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    );
  }, [onClickPrev, handleClickContentCopy, whatsAppHref, onClickNext]);

  return (
    <Card
      sx={{
        background:
          "linear-gradient( 95deg,rgba(242,113,33, .8) 0%,rgba(233,64,87,.8) 50%,rgba(138,35,135, .8) 100%)",
      }}
    >
      <CardActions sx={{ display: "flex", flexFlow: "row-reverse" }}>
        {ctaButtons}
      </CardActions>
      <CardContent>
        <Stack direction="column" spacing={0}>
          <TextareaAutosize
            minRows={4}
            onChange={onChange}
            ref={handleRef}
            style={{ fontSize: 20, padding: 10, backgroundColor: "white" }}
            value={value}
          />
        </Stack>
      </CardContent>
      <CardActions>{ctaButtons}</CardActions>
    </Card>
  );
};