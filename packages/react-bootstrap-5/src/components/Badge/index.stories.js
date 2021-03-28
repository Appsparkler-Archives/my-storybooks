import React from "react";

const Badge = React.forwardRef(({ children, ...props }, ref) => {
  const {
    className,
    primary,
    secondary,
    info,
    success,
    warning,
    danger,
    light,
    dark,
    ...restProps
  } = props;
  const bg = React.useMemo(() => {
    if (primary) return "primary";
    if (secondary) return "secondary";
    if (info) return "info";
    if (success) return "success";
    if (warning) return "warning";
    if (danger) return "danger";
    if (light) return "light";
    if (dark) return "dark";
  }, [primary, secondary, info, success, warning, danger, light, dark]);

  return (
    <span className={`badge bg-${bg} ${className}`} {...restProps} ref={ref}>
      {children}
    </span>
  );
});

export const All = () => (
  <div className="d-inline-flex gap-2 flex-wrap">
    <Badge primary>primary</Badge>
    <Badge secondary>secondary</Badge>
    <Badge info>info</Badge>
    <Badge success>success</Badge>
    <Badge warning>warning</Badge>
    <Badge danger>danger</Badge>
    <Badge light className="text-dark">
      light
    </Badge>
    <Badge dark>dark</Badge>
  </div>
);

const Story = {
  title: "components/Badge",
  component: Badge,
};

export default Story;
