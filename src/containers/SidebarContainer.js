import React from "react";
import { GrProjects } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import {Link} from "react-router-dom"
import Sidebar from "../components/sidebar/index";

export function SidebarContainer({ children, ...restProps }) {
  return (
    <Sidebar>
      <Sidebar.Header>
        <Sidebar.HeaderImage src="./icons/Subtract.png" alt="app icon" />
        <Sidebar.Heading src="./icons/mYSITE.png" alt="app icon" />
      </Sidebar.Header>
      <Sidebar.Group>
        <Sidebar.Item>
          <Sidebar.ItemIcon>
            <GrProjects />
          </Sidebar.ItemIcon>
          <Sidebar.Text>Projects</Sidebar.Text>
        </Sidebar.Item>
        <Sidebar.Item>
          <Sidebar.ItemIcon>
            <IoBriefcaseOutline />
          </Sidebar.ItemIcon>
          <Sidebar.Text>Organizational Profile</Sidebar.Text>
        </Sidebar.Item>
        <Sidebar.Item isActive={true}>
          <Sidebar.ItemIcon>
            <MdSecurity />
          </Sidebar.ItemIcon>
          <Sidebar.Text>Access Control</Sidebar.Text>
        </Sidebar.Item>
      </Sidebar.Group>
      <Sidebar.Group>
        <Link to="/">
          <Sidebar.Text>Page 1</Sidebar.Text>
        </Link>
      </Sidebar.Group>
      <Sidebar.Group>
        <Link to="/two">
          <Sidebar.Text>Page 2</Sidebar.Text>
        </Link>
      </Sidebar.Group>
      <Sidebar.Group>
        <Link to="/three">
          <Sidebar.Text>Page 3</Sidebar.Text>
        </Link>
      </Sidebar.Group>
      <Sidebar.Group>
          <Sidebar.Text>Please use above links to navigate between the pages</Sidebar.Text>
      </Sidebar.Group>
    </Sidebar>
  );
}
