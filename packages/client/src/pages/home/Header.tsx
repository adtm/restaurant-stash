import * as React from "react";
import { Description, Title } from "./Header.styled";

type Props = {
  title: string;
  description: string;
};

export const Header: React.SFC<Props> = ({ title, description }: Props) => (
  <>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </>
);
