import React from "react";

const ListGroup = ({ children, as: As }) => (
  <As class="list-group">{children}</As>
);

ListGroup.defaultProps = {
  as: "ul",
};

const ListGroupItem = (props) => {
  const { children, as: As, active, disabled, ...restProps } = props;
  const activeClass = React.useMemo(() => {
    return active ? `active` : "";
  }, [active]);
  const disabledClass = React.useMemo(() => {
    return disabled ? "disabled" : "";
  }, [disabled]);
  return (
    <As
      class={`list-group-item ${activeClass} ${disabledClass} `}
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

const Story = {
  title: "L1/List Group",
  component: ListGroup,
  subcomponents: { ListGroupItem },
};

export default Story;
