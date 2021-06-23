import React from "react";
import { FaEye } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { FiEdit2 } from "react-icons/fi";
import { Table } from "../components/table/index";
import { RiDeleteBin7Line } from "react-icons/ri";

export function TableContainer({ children, ...restProps }) {
  return (
    <Table>
      <Table.Row>
        <Table.Frame>
          <Table.FrameButton>
            <span>
              <GrAdd />
            </span>

            <span>Add Role</span>
          </Table.FrameButton>

          <FiEdit2 />
          <RiDeleteBin7Line />
        </Table.Frame>
      </Table.Row>
      <Table.Row>
        <Table.Column>
          <Table.Text>Department</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Text>Access Level</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Text>No. of Members</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Text>Last Updated</Table.Text>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column>
          <Table.Text>Management Team</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Button>Acces Granted</Table.Button>
        </Table.Column>
        <Table.Column>
          <Table.Text>5</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Sec>
            <Table.Text>last seen 1 min ago</Table.Text>
            <FaEye />
          </Table.Sec>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column>
          <Table.Text>Procurement Team</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Button>Acces Granted</Table.Button>
        </Table.Column>
        <Table.Column>
          <Table.Text>5</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Sec>
            <Table.Text>last seen 1 min ago</Table.Text>
            <FaEye />
          </Table.Sec>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column>
          <Table.Text>Project Team</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Button isDenied={true}>Acces Denied</Table.Button>
        </Table.Column>
        <Table.Column>
          <Table.Text>5</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Sec>
            <Table.Text>last seen 1 min ago</Table.Text>
            <FaEye />
          </Table.Sec>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column>
          <Table.Text>IT Team</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Button>Acces Granted</Table.Button>
        </Table.Column>
        <Table.Column>
          <Table.Text>5</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Sec>
            <Table.Text>last seen 1 min ago</Table.Text>
            <FaEye />
          </Table.Sec>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column>
          <Table.Text>Super Admin</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Button>Acces Granted</Table.Button>
        </Table.Column>
        <Table.Column>
          <Table.Text>5</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Sec>
            <Table.Text>last seen 1 min ago</Table.Text>
            <FaEye />
          </Table.Sec>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column>
          <Table.Text>Management Team</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Button>Acces Granted</Table.Button>
        </Table.Column>
        <Table.Column>
          <Table.Text>5</Table.Text>
        </Table.Column>
        <Table.Column>
          <Table.Sec>
            <Table.Text>last seen 1 min ago</Table.Text>
            <FaEye />
          </Table.Sec>
        </Table.Column>
      </Table.Row>
    </Table>
  );
}
