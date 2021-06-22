import React from 'react'
import {
    Container,
    Row,
    Column,
    Group,
    Text,
    Button,
    Sec,
    Frame,
    FrameButton

} from "./styles/table"
export function Table({ children, ...restProps }) {
    return <Container {...restProps}> 
        {children}
    </Container>
}
Table.Row = function TableRow({ children, ...restProps }) {
    return <Row {...restProps}>
        {children}
    </Row>
}
Table.Column = function TableColumn({ children, ...restProps }) {
    return <Column {...restProps}>
        {children}
    </Column>
}
Table.Frame = function TableFrame({ children, ...restProps }) {
    return <Frame {...restProps}>
        {children}
    </Frame>
}
Table.Button = function TableButton({ children, ...restProps }) {
    return <Button {...restProps}>
        {children}
    </Button>
}
Table.Text = function TableText({ children, ...restProps }) {
    return <Text {...restProps}>
        {children}
    </Text>
}
Table.Sec = function TableSec({ children, ...restProps }) {
  return <Sec {...restProps}>{children}</Sec>;
};
 Table.Group = function TableGroup({ children, ...restProps }) {
   return <Group {...restProps}>{children}</Group>;
};
 Table.FrameButton = function TableFrameButton({ children, ...restProps }) {
   return <FrameButton {...restProps}>{children}</FrameButton>;
 };