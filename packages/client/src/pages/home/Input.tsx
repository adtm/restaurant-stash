import * as React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 2px solid #000;
  border-radius: 30px;
`;

const StyledTitle = styled.span`
  font-size: 14px;
  text-transform: uppercase;
`;

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
  <label>
    <StyledTitle>{title}</StyledTitle>
    <StyledInput value={value} type={type} onChange={onChange} />
  </label>
);
