import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <div>
    Hello from {props.compiler} and {props.framework}
  </div>
);
