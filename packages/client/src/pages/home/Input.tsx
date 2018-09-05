import * as React from "react";
import { InputField, Label, Title } from "./Input.styled";

type Props = {
  value: string;
  type: string;
  title?: string;
  onChange(event: { target: HTMLInputElement }): void;
};

export const Input: React.SFC<Props> = ({
  value,
  type,
  title,
  onChange,
}: Props) => (
  <Label>
    <Title>{title}</Title>
    <InputField value={value} type={type} onChange={onChange} />
  </Label>
);
