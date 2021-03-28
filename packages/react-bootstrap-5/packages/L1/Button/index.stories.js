import React from "react";

const useVariant = (props = {}) => {
  const {
    primary,
    secondary,
    info,
    success,
    warning,
    danger,
    light,
    dark,
    muted,
    ...restProps
  } = props;

  const variant = React.useMemo(() => {
    if (primary) return "primary";
    if (secondary) return "secondary";
    if (info) return "info";
    if (success) return "success";
    if (warning) return "warning";
    if (danger) return "danger";
    if (light) return "light";
    if (dark) return "dark";
    if (muted) return "muted";
  }, [primary, secondary, info, success, warning, danger, light, dark, muted]);

  return {
    variant,
    restProps,
  };
};

const PlainButton = (props, ref) => {
  const { variant, restProps } = useVariant(props);
  const { children, className, ...restProps2 } = restProps;
  return (
    <button
      ref={ref}
      className={`btn btn-${variant} ${className}`}
      {...restProps2}
    >
      {children}
    </button>
  );
};

const Button = React.forwardRef(PlainButton);

export const All = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>SM</th>
          <th>MD</th>
          <th>LG</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Button primary className="btn-sm">
              Primary
            </Button>
          </td>
          <td>
            <button className="btn btn-primary btn-md">Primary</button>
          </td>
          <td>
            <button className="btn btn-primary btn-lg">Primary</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="btn btn-secondary btn-sm">Secondary</button>
          </td>
          <td>
            <button className="btn btn-secondary btn-md">Secondary</button>
          </td>
          <td>
            <button className="btn btn-secondary btn-lg">Secondary</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Story = {
  title: "L1/Buttons",
};

export default Story;
