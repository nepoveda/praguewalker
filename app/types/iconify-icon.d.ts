import type React from "react";

type IconifyIconProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  icon?: string;
  width?: string | number;
  height?: string | number;
  inline?: boolean | string;
  rotate?: string | number;
  flip?: string;
  mode?: string;
  style?: React.CSSProperties;
  class?: string;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": IconifyIconProps;
    }
  }
}

export {};
