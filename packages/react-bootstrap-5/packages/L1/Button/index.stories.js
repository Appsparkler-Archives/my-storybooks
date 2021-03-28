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

export const Small = () => {
  return (
    <div className="d-flex flex-row gap-2 flex-wrap">
      <Button primary sm>
        Primary
      </Button>
      <Button secondary sm>
        Secondary
      </Button>
      <Button success sm>
        Success
      </Button>
      <Button danger sm>
        Danger
      </Button>
      <Button warning sm>
        Warning
      </Button>
      <Button info sm>
        Info
      </Button>
      <Button light sm>
        Light
      </Button>
      <Button dark sm>
        Dark
      </Button>
    </div>
  );
};

export const Medium = () => {
  return (
    <div className="d-flex flex-row gap-2 flex-wrap">
      <Button primary md>
        Primary
      </Button>
      <Button secondary md>
        Secondary
      </Button>
      <Button success md>
        Success
      </Button>
      <Button danger md>
        Danger
      </Button>
      <Button warning md>
        Warning
      </Button>
      <Button info md>
        Info
      </Button>
      <Button light md>
        Light
      </Button>
      <Button dark md>
        Dark
      </Button>
    </div>
  );
};

export const Large = () => {
  return (
    <div className="d-flex flex-row gap-2 flex-wrap">
      <Button primary lg>
        Primary
      </Button>
      <Button secondary lg>
        Secondary
      </Button>
      <Button success lg>
        Success
      </Button>
      <Button danger lg>
        Danger
      </Button>
      <Button warning lg>
        Warning
      </Button>
      <Button info lg>
        Info
      </Button>
      <Button light lg>
        Light
      </Button>
      <Button dark lg>
        Dark
      </Button>
    </div>
  );
};

const Story = {
  title: "L1/Buttons",
};

export default Story;
