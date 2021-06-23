import React from "react";
import {
  Container,
  Row,
  Column,
  Group,
  Text,
  Button,
  Sec,
  Frame,
  FrameButton,
  GroupItem,
  IconHolder,
  Section,
  HeaderFrame,
    HeaderSection,
  HeaderText,
  Accordion
} from "./styles/table";
export function Table({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Table.HeaderSection = function TableHeaderSection({ children, ...restProps }) {
  return <HeaderSection {...restProps}>{children}</HeaderSection>;
};
Table.Accordion = function TableAccordion({ children, ...restProps }) {
  return <Accordion {...restProps}>{children}</Accordion>;
};
Table.Section = function TableSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};
Table.IconHolder = function TableIconHolder({ children, ...restProps }) {
  return <IconHolder {...restProps}>{children}</IconHolder>;
};
Table.Row = function TableRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Table.Column = function TableColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};
Table.Frame = function TableFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Table.HeaderFrame = function TableHeaderFrame({ children, ...restProps }) {
  return <HeaderFrame {...restProps}>{children}</HeaderFrame>;
};
Table.Button = function TableButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
Table.Text = function TableText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Table.HeaderText = function TableHeaderText({ children, ...restProps }) {
  return <HeaderText {...restProps}>{children}</HeaderText>;
};
Table.Sec = function TableSec({ children, ...restProps }) {
  return <Sec {...restProps}>{children}</Sec>;
};
Table.Group = function TableGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Table.GroupItem = function TableGroupItem({ children, ...restProps }) {
  return <GroupItem {...restProps}>{children}</GroupItem>;
};
Table.FrameButton = function TableFrameButton({ children, ...restProps }) {
  return <FrameButton {...restProps}>{children}</FrameButton>;
};
