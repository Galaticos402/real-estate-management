import React from "react";
import Header from "../components/header.component";
import { Outlet, useNavigate } from "react-router-dom";
// import classes from "./customer-layout.module.css";
import { AppShell, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavBar, { INavBarProp } from "../components/navbar.component";
import {
  IconBrandBooking,
  IconBuilding,
  IconScript,
} from "@tabler/icons-react";

const CustomerLayout: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const customerNavBarProps: INavBarProp[] = [
    {
      element: (
        <Button
          leftSection={<IconBuilding />}
          mb={"1em"}
          variant="outline"
          color="green"
          w={"100%"}
          onClick={() => navigate("/customer/project")}
        >
          Dự án
        </Button>
      ),
    },
    {
      element: (
        <Button
          leftSection={<IconBrandBooking />}
          mb={"1em"}
          variant="outline"
          color="green"
          w={"100%"}
          onClick={() => navigate("/customer/booking/")}
        >
          Thông tin đặt chỗ
        </Button>
      ),
    },
    {
      element: (
        <Button
          leftSection={<IconScript />}
          variant="outline"
          color="green"
          w={"100%"}
          onClick={() => navigate("/customer/contract/")}
        >
          Hợp đồng dặt cọc
        </Button>
      ),
    },
  ];
  return (
    <div>
      <AppShell
        header={{ height: 100 }}
        navbar={{
          width: 300,
          breakpoint: "md",
          collapsed: { mobile: !opened, desktop: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Header opened={opened} toggle={toggle} />
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <NavBar props={customerNavBarProps} />
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </div>
  );
};

export default CustomerLayout;
