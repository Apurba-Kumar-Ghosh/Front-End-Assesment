import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { GrAddCircle } from "react-icons/gr";
import { BiArrowBack } from "react-icons/bi";
import {AiOutlineMinusCircle} from "react-icons/ai"
import { Table } from "../components/table/index";
import { SliderButton } from "../components/sliderButton";
import { AccordionContainer } from "./AccordionContainer";

export function TableContainerThree({ children, ...restProps }) {
  return (
    <Table {...restProps}>
      <Table.Section>
        <Table.HeaderFrame>
          <Table.HeaderText>
            <span>
              <BiArrowBack />
            </span>

            <Table.Text> Management Team</Table.Text>
            <span>
              <FiEdit2 />
            </span>
          </Table.HeaderText>
        </Table.HeaderFrame>
        <Table.HeaderFrame>
          <Table.HeaderSection isActive={true}>
            <Table.Text>Access Control</Table.Text>
          </Table.HeaderSection>
          <Table.HeaderSection>
            <Table.Text>Assigned Members</Table.Text>
          </Table.HeaderSection>
        </Table.HeaderFrame>
      </Table.Section>

      <Table.Row>
        <Table.Column>
          <Table.Text>Department</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Text>Access Level</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Text>Summary</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Text>Last Updated</Table.Text>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column>
          <Table.Group>
            <Table.IconHolder>
              <GrAddCircle />
            </Table.IconHolder>

            <Table.Text>Budget</Table.Text>
          </Table.Group>
        </Table.Column>
        <Table.Column>
          <Table.Button>Acces Granted</Table.Button>
        </Table.Column>
        <Table.Column>
          <Table.Group>
            <Table.GroupItem>
              <Table.Text>View</Table.Text>
            </Table.GroupItem>

            <Table.GroupItem>
              <Table.Text>Create</Table.Text>
            </Table.GroupItem>

            <Table.GroupItem>
              <Table.Text>Edit</Table.Text>
            </Table.GroupItem>

            <Table.GroupItem>
              <Table.Text>Delete</Table.Text>
            </Table.GroupItem>
          </Table.Group>
        </Table.Column>
        <Table.Column>
          <Table.Sec>
            <Table.Text>last seen 1 min ago</Table.Text>
            <SliderButton checked />
          </Table.Sec>
        </Table.Column>
      </Table.Row>
      <Table.Row accordion={true}>
        <Table.Column>
          <Table.Group>
            <Table.IconHolder>
              <AiOutlineMinusCircle />
            </Table.IconHolder>

            <Table.Text>Bidding</Table.Text>
          </Table.Group>
        </Table.Column>
        <Table.Column>
          <Table.Button>Acces Granted</Table.Button>
        </Table.Column>
        <Table.Column>
          <Table.Group>
            <Table.GroupItem>
              <Table.Text>View</Table.Text>
            </Table.GroupItem>

            <Table.GroupItem>
              <Table.Text>Create</Table.Text>
            </Table.GroupItem>
          </Table.Group>
        </Table.Column>
        <Table.Column>
          <Table.Sec>
            <Table.Text>last seen 1 min ago</Table.Text>
            <SliderButton />
          </Table.Sec>
        </Table.Column>
      </Table.Row>
      <Table.Row isOpen={true}>
        <AccordionContainer />
      </Table.Row>
      <Table.Row>
        <Table.Column>
          <Table.Group>
            <Table.IconHolder>
              <GrAddCircle />
            </Table.IconHolder>

            <Table.Text>Vendor Portal</Table.Text>
          </Table.Group>
        </Table.Column>
        <Table.Column>
          <Table.Button isDenied={true}>Acces Denied</Table.Button>
        </Table.Column>
        <Table.Column>
          <Table.Group>
            <Table.GroupItem>
              <Table.Text>View</Table.Text>
            </Table.GroupItem>

            <Table.GroupItem>
              <Table.Text>Delete</Table.Text>
            </Table.GroupItem>
          </Table.Group>
        </Table.Column>
        <Table.Column>
          <Table.Sec>
            <Table.Text>last seen 1 min ago</Table.Text>
            <SliderButton checked />
          </Table.Sec>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column>
          <Table.Group>
            <Table.IconHolder>
              <GrAddCircle />
            </Table.IconHolder>

            <Table.Text>Organisational Profile</Table.Text>
          </Table.Group>
        </Table.Column>
        <Table.Column>
          <Table.Button isDenied={true}>Acces Denied</Table.Button>
        </Table.Column>
        <Table.Column>
          <Table.Group>
            <Table.GroupItem>
              <Table.Text>View</Table.Text>
            </Table.GroupItem>

            <Table.GroupItem>
              <Table.Text>Create</Table.Text>
            </Table.GroupItem>

            <Table.GroupItem>
              <Table.Text>Edit</Table.Text>
            </Table.GroupItem>

            <Table.GroupItem>
              <Table.Text>Delete</Table.Text>
            </Table.GroupItem>
          </Table.Group>
        </Table.Column>
        <Table.Column>
          <Table.Sec>
            <Table.Text>last seen 1 min ago</Table.Text>
            <SliderButton checked />
          </Table.Sec>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column>
          <Table.Group>
            <Table.IconHolder>
              <GrAddCircle />
            </Table.IconHolder>

            <Table.Text>Permission and Access</Table.Text>
          </Table.Group>
        </Table.Column>
        <Table.Column>
          <Table.Button>Acces Granted</Table.Button>
        </Table.Column>
        <Table.Column>
          <Table.Group>
            <Table.GroupItem>
              <Table.Text>View</Table.Text>
            </Table.GroupItem>

            <Table.GroupItem>
              <Table.Text>Create</Table.Text>
            </Table.GroupItem>

            <Table.GroupItem>
              <Table.Text>Edit</Table.Text>
            </Table.GroupItem>

            <Table.GroupItem>
              <Table.Text>Delete</Table.Text>
            </Table.GroupItem>
          </Table.Group>
        </Table.Column>
        <Table.Column>
          <Table.Sec>
            <Table.Text>last seen 1 min ago</Table.Text>
            <SliderButton checked />
          </Table.Sec>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column>
          <Table.Group>
            <Table.IconHolder>
              <GrAddCircle />
            </Table.IconHolder>
            <Table.Text>Bidding</Table.Text>
          </Table.Group>
        </Table.Column>
        <Table.Column>
          <Table.Button isDenied={true}>Acces Denied</Table.Button>
        </Table.Column>
        <Table.Column>
          <Table.Group>
            <Table.GroupItem>
              <Table.Text>Delete</Table.Text>
            </Table.GroupItem>
          </Table.Group>
        </Table.Column>
        <Table.Column>
          <Table.Sec>
            <Table.Text>last seen 1 min ago</Table.Text>
            <SliderButton />
          </Table.Sec>
        </Table.Column>
      </Table.Row>
    </Table>
  );
}
