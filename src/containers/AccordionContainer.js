import React from 'react'

import { Accordion } from '../components/accordion/index'

export function AccordionContainer() {
    return (
      <Accordion>
        <Accordion.HeadText>
          All aspects in the bidding module
        </Accordion.HeadText>
        <Accordion.Group>
          <Accordion.GroupItem>
            <Accordion.Header>Access Settings</Accordion.Header>
            <Accordion.InputGroup>
              <Accordion.RadioInput />
              <Accordion.TextGroup>
                <Accordion.Text>All access</Accordion.Text>
                <Accordion.SubText>can access all items</Accordion.SubText>
              </Accordion.TextGroup>
            </Accordion.InputGroup>
            <Accordion.InputGroup>
              <Accordion.RadioInput />
              <Accordion.TextGroup>
                <Accordion.Text>All access</Accordion.Text>
                <Accordion.SubText>can access all items</Accordion.SubText>
              </Accordion.TextGroup>
            </Accordion.InputGroup>
          </Accordion.GroupItem>
          <Accordion.GroupItem>
            <Accordion.Header>Access Settings</Accordion.Header>
            <Accordion.InputGroup>
              <Accordion.CheckboxInput />
              <Accordion.Text>View items in access</Accordion.Text>
            </Accordion.InputGroup>
            <Accordion.InputGroup>
              <Accordion.CheckboxInput />
              <Accordion.Text>Edit items in access</Accordion.Text>
            </Accordion.InputGroup>
            <Accordion.InputGroup>
              <Accordion.CheckboxInput />
              <Accordion.Text>Create items in access</Accordion.Text>
            </Accordion.InputGroup>
            <Accordion.InputGroup>
              <Accordion.CheckboxInput />
              <Accordion.Text>Delete items in access</Accordion.Text>
            </Accordion.InputGroup>
          </Accordion.GroupItem>
        </Accordion.Group>
      </Accordion>
    );
}