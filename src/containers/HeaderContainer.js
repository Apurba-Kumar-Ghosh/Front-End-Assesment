import React from "react";
import { FaWifi } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { AiOutlineQuestionCircle, AiOutlineTable } from "react-icons/ai";
import { CgProfile, CgSync } from "react-icons/cg";
import { Header } from "../components/header/index";

export function HeaderContainer({ children, ...restProps }) {
  return (
    <Header {...restProps}>
      <Header.Frame>
        <Header.Section isActive = {true}>
          <Header.ItemIcon>
            <FaWifi tilted={true} />
          </Header.ItemIcon>
          <Header.Text>Permissions</Header.Text>
        </Header.Section>
        <Header.Section>
          <Header.ItemIcon>
            <AiOutlineTable />
          </Header.ItemIcon>
          <Header.Text>Approval Matrix</Header.Text>
        </Header.Section>
      </Header.Frame>
      <Header.Frame>
        <Header.Group>
          <Header.Item>
            <Header.Section>
              <Header.ItemIcon>
                <CgProfile />
              </Header.ItemIcon>
              <Header.Text>Kishore</Header.Text>
            </Header.Section>
            <Header.Section>
              <Header.ItemIcon>
                <BsBell />
              </Header.ItemIcon>
              <Header.ItemIcon>
                <AiOutlineQuestionCircle />
              </Header.ItemIcon>
            </Header.Section>
          </Header.Item>
          <Header.Item>
            <Header.Section>
              <Header.ItemIcon>
                <CgSync />
              </Header.ItemIcon>
              <Header.SubText>Last synced 15 mins ago</Header.SubText>
            </Header.Section>
          </Header.Item>
        </Header.Group>
      </Header.Frame>
    </Header>
  );
}
