import React from "react";

const ListGroup = ({ children, className, flush, as: As }) => {
  const flushClass = React.useMemo(() => {
    if (flush) return `list-group-flush`;
    return "";
  }, []);
  return (
    <As className={`list-group ${flushClass} ${className}`}>{children}</As>
  );
};

ListGroup.defaultProps = {
  as: "ul",
};

const ListGroupItem = (props) => {
  const { children, as: As, active, disabled, ...restProps } = props;
  const activeClass = React.useMemo(() => {
    return active ? `active` : "";
  }, [active]);
  const actionClass = React.useMemo(() => {
    const isLink = As === "a";
    const isButton = As === "button";
    if (isLink || isButton) return "list-group-item-action";
    return "";
  }, [As]);
  const disabledClass = React.useMemo(() => {
    return disabled ? "disabled" : "";
  }, [disabled]);
  return (
    <As
      className={`list-group-item ${activeClass} ${actionClass} ${disabledClass} `}
      {...restProps}
    >
      {children}
    </As>
  );
};

ListGroupItem.defaultProps = {
  as: "li",
  active: false,
};

export const Basic = () => (
  <ListGroup>
    <ListGroupItem>An item</ListGroupItem>
    <ListGroupItem>A second item</ListGroupItem>
    <ListGroupItem>An third item</ListGroupItem>
    <ListGroupItem>A fourth item</ListGroupItem>
    <ListGroupItem>And a fifth one</ListGroupItem>
  </ListGroup>
);

export const WithActiveItem = () => (
  <ListGroup>
    <ListGroupItem active>An item</ListGroupItem>
    <ListGroupItem>A second item</ListGroupItem>
    <ListGroupItem>An third item</ListGroupItem>
    <ListGroupItem>A fourth item</ListGroupItem>
    <ListGroupItem>And a fifth one</ListGroupItem>
  </ListGroup>
);

export const WithDisabledItem = () => (
  <ListGroup>
    <ListGroupItem disabled>An item</ListGroupItem>
    <ListGroupItem>A second item</ListGroupItem>
    <ListGroupItem>An third item</ListGroupItem>
    <ListGroupItem>A fourth item</ListGroupItem>
    <ListGroupItem>And a fifth one</ListGroupItem>
  </ListGroup>
);

export const Links = () => (
  <ListGroup>
    <ListGroupItem active as="a" href="#">
      The current link item
    </ListGroupItem>
    <ListGroupItem as="a" href="#">
      A second link item
    </ListGroupItem>
    <ListGroupItem as="a" href="#">
      A third link item
    </ListGroupItem>
    <ListGroupItem as="a" href="#">
      A fourth link item
    </ListGroupItem>
    <ListGroupItem as="a" href="#">
      A disabled link item
    </ListGroupItem>
  </ListGroup>
);

export const Buttons = () => (
  <ListGroup>
    <ListGroupItem active as="button" type="button">
      The current link item
    </ListGroupItem>
    <ListGroupItem as="button" type="button">
      A second link item
    </ListGroupItem>
    <ListGroupItem as="button" type="button">
      A third link item
    </ListGroupItem>
    <ListGroupItem as="button" type="button">
      A fourth link item
    </ListGroupItem>
    <ListGroupItem as="button" type="button">
      A disabled link item
    </ListGroupItem>
  </ListGroup>
);

export const Flush = () => (
  <ListGroup flush>
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
    <li className="list-group-item">A fourth item</li>
    <li className="list-group-item">And a fifth one</li>
  </ListGroup>
);

const Story = {
  title: "L1/List Group",
  component: ListGroup,
  subcomponents: { ListGroupItem },
};

export default Story;
