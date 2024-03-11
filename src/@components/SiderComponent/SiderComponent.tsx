"use client";
import {
  AlertOutlined,
  AlipayCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
const { Sider } = Layout;

type SidebarContextType = {
  isOpen: boolean | undefined;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
export const SidebarContext = createContext({} as SidebarContextType);

export function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <SiderComponent />
    </SidebarContext.Provider>
  );
}

const SiderComponent = () => {
  const router = useRouter();
  let { isOpen, setIsOpen } = useContext(SidebarContext);

  function HandlerRedirect(route: string) {
    router.push(route);
  }

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={isOpen ?? false}
      style={{ background: "#fff" }}
    >
      <Button
        type="text"
        icon={isOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
      <Menu
        theme="light"
        mode="vertical"
        items={[
          {
            key: "1",
            label: "Temas",
            icon: <AlertOutlined />,
            onClick: () => HandlerRedirect("/temas"),
          },
          {
            key: "2",
            label: "Assuntos",
            icon: <AlipayCircleOutlined />,
            onClick: () => HandlerRedirect("/"),
          },
        ]}
      />
    </Sider>
  );
};
