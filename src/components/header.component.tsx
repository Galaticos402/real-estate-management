import { Grid } from "@mantine/core";
import React from "react";
import classes from "./header.module.css";
import { IconUser } from "@tabler/icons-react";
import appLogo from '../assets/app-icon.png'

const Header: React.FC = () => {
  return (
    <div className={classes.container}>
      <Grid>
        <Grid.Col span={8}>
          <div className={classes.headlineWrapper}>
            <img src={appLogo} className={classes.appLogo} />
            <div className={classes.headline}>Nền tảng giao dịch bất động sản RES</div>
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
      </Grid>
    </div>
  );
};

export default Header;
