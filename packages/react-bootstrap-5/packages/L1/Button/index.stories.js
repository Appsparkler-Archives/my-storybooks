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

const useSize = (props = {}) => {
  const { sm, md, lg, ...restProps } = props;
  const size = React.useMemo(() => {
    if (sm) return "sm";
    if (md) return "md";
    if (lg) return "lg";
  }, [sm, md, lg]);

  return {
    restProps,
    size,
  };
};

const PlainButton = (props, ref) => {
  const { variant, restProps: restProps0 } = useVariant(props);
  const { size, restProps: restProps1 } = useSize(restProps0);
  const { children, className, ...restProps2 } = restProps1;
  const variantClass = React.useMemo(() => {
    if (variant) return `btn-${variant}`;
    return "";
  }, [variant]);
  const sizeClass = React.useMemo(() => {
    if (size) return `btn-${size}`;
    return "";
  }, [size]);
  return (
    <button
      ref={ref}
      className={`btn ${variantClass} ${sizeClass} ${className}`}
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
            <Button primary sm>
              Primary
            </Button>
          </td>
          <td>
            <Button primary md>
              Primary
            </Button>
          </td>
          <td>
            <Button primary lg>
              Primary
            </Button>
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

        <tr>
          <td>
            <Button info sm>
              Info Info
            </Button>
          </td>
          <td>
            <Button info md>
              Info Info
            </Button>
          </td>
          <td>
            <Button info lg>
              Info Info
            </Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button success sm>
              Success
            </Button>
          </td>
          <td>
            <Button success md>
              Success
            </Button>
          </td>
          <td>
            <Button success lg>
              Success
            </Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button warning sm>
              Warning
            </Button>
          </td>
          <td>
            <Button warning md>
              Warning
            </Button>
          </td>
          <td>
            <Button warning lg>
              Warning
            </Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button danger sm>
              Danger
            </Button>
          </td>
          <td>
            <Button danger md>
              Danger
            </Button>
          </td>
          <td>
            <Button danger lg>
              Danger
            </Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button light sm>
              Light
            </Button>
          </td>
          <td>
            <Button light md>
              Light
            </Button>
          </td>
          <td>
            <Button light lg>
              Light
            </Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button dark sm>
              Dark
            </Button>
          </td>
          <td>
            <Button dark md>
              Dark
            </Button>
          </td>
          <td>
            <Button dark lg>
              Dark
            </Button>
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
