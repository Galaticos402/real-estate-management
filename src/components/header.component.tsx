import { Burger, Grid, Group } from "@mantine/core";
import React from "react";
import classes from "./header.module.css";
import { IconUser } from "@tabler/icons-react";
import appLogo from "../assets/app-icon.png";
interface IProps {
  opened: boolean;
  toggle: () => void;
}
const Header: React.FC<IProps> = ({ opened, toggle }) => {
  return (
    <div className={classes.container}>
      {/* <Flex> */}
      <Grid>
        <Grid.Col span={8}>
          <Group>
            <Burger color="white" opened={opened} onClick={toggle} size="md" />
            <div className={classes.headlineWrapper}>
              <img src={appLogo} className={classes.appLogo} />
              <div className={classes.headline}>
                Nền tảng giao dịch bất động sản RES
              </div>
            </div>
          </Group>
        </Grid.Col>
        <Grid.Col span={4}>
          <div className={classes.userInfoShortcut}>
            <div className={classes.userBox}>
              <IconUser />
              <div style={{ fontWeight: "bold" }}> Đặng Minh Quân</div>
            </div>
          </div>
        </Grid.Col>
      </Grid>

      {/* <Grid>
        <Grid.Col span={1}>
          <Burger opened={opened} onClick={toggle} size="sm" />
        </Grid.Col>
        <Grid.Col span={7}>
          <div className={classes.headlineWrapper}>
            <img src={appLogo} className={classes.appLogo} />
            <div className={classes.headline}>
              Nền tảng giao dịch bất động sản RES
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div className={classes.userInfoShortcut}>
            <div className={classes.userBox}>
              <IconUser />
              <div style={{ fontWeight: "bold" }}> Đặng Minh Quân</div>
            </div>
          </div>
        </Grid.Col>
      </Grid> */}
    </div>
  );
};

export default Header;
