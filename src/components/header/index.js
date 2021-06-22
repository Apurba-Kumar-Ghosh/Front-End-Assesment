import React from "react";

import {
  Container,
  Item,
  Text,
  Group,
  ItemIcon,
  Frame,
  Section,
  SubText
} from "./styles/header";

export function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.Item = function HeaderItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return (<Text {...restProps}>{children}</Text>);
};
Header.SubText = function HeaderSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.ItemIcon = function HeaderItemIcon({ children, ...restProps }) {
  return <ItemIcon {...restProps}>{children}</ItemIcon>;
}
Header.Section = function HeaderSection({ children, ...restProps }) {
  return <Section {...restProps}> {children} </Section>
}
