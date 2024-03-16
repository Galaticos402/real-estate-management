import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar, { INavBarProp } from "../components/navbar.component";
import { AppShell, Button } from "@mantine/core";
import { IconBuilding } from "@tabler/icons-react";
import Header from "../components/header.component";

const InvestorLayout : React.FC = () => {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const investorNavBarProps: INavBarProp[] = [
    {
      element: (
        <Button
          leftSection={<IconBuilding />}
          mb={"1em"}
          variant="outline"
          color="green"
          w={"100%"}
          onClick={() => navigate("/investor/project")}
        >
          Dự án
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
          <NavBar props={investorNavBarProps} />
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </div>
  );
};

export default InvestorLayout