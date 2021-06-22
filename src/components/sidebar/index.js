import React from 'react'

import {
    Container,
    Header,
    Heading,
    Item,
    Text,
    Group,
    HeaderImage,
    ItemIcon
} from './styles/Sidebar'

export default function Sidebar({ children, ...restProps }) {
    return <Container {...restProps}>
        {children}
    </Container>
}

Sidebar.Header = function SidebarHeading({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
};
Sidebar.HeaderImage = function SidebarHeaderImage({ src, ...restProps }) {
    return <HeaderImage src={ src} {...restProps} />
};
Sidebar.Heading = function SidebarHeading({ children, ...restProps }) {
    return <Heading {...restProps} />
}
Sidebar.Item = function SidebarItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}
Sidebar.Text = function SidebarText({ children, ...restProps }) {
    return <Text {...restProps}>
        {children}
    </Text>
}
Sidebar.Group = function SidebarGroup({ children, ...restProps }) {
    return <Group {...restProps}>
        {children}
    </Group>
}
Sidebar.ItemIcon = function SidebarItemIcon({ children, ...restProps }) {
  return <ItemIcon {...restProps}>{children}</ItemIcon>;
};
