import React from 'react'
import {
    Container,
    Group,
    GroupItem,
    RadioInput,
    CheckboxInput,
    Text,
    SubText,
    InputGroup,
    TextGroup,
    HeadText,
    Header
} from './styles/accordion'
export function Accordion({ children, ...restProps }) {
    return <Container {...restProps}>
        {children}
    </Container>
}
Accordion.GroupItem = function AccordionGroupItem({ children, ...restProps }) {
    return <GroupItem {...restProps}>
        {children}
    </GroupItem>
}
Accordion.HeadText = function AccordionHeadText({ children, ...restProps }) {
  return <HeadText {...restProps}>{children}</HeadText>;
};
Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};
Accordion.TextGroup = function AccordionTextGroup({ children, ...restProps }) {
    return <TextGroup {...restProps}>
        {children}
    </TextGroup>
}
Accordion.InputGroup = function AccordionInputGroup({
  children,
  ...restProps
}) {
  return <InputGroup {...restProps}>{children}</InputGroup>;
};
Accordion.RadioInput = function AccordionRadioInput({ children, ...restProps }) {
  return <RadioInput type = "radio"{...restProps}>{children}</RadioInput>;
};
Accordion.CheckboxInput = function AccordionCheckboxInput({ children, ...restProps }) {
  return <CheckboxInput type = "checkbox"{...restProps}>{children}</CheckboxInput>;
};
Accordion.SubText = function AccordionSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};
Accordion.Group = function AccordionGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Accordion.Text = function AccordionText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};