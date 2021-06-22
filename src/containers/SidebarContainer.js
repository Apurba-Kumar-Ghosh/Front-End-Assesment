import React from "react";
import { GrProjects } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
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
    </Sidebar>
  );
}
