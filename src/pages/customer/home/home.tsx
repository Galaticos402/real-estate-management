import { Grid } from "@mantine/core";
import React from "react";
import CustomerHomeFilter from "./component/filter.component";
import Project from "./component/project.component";

const CustomerHomePage: React.FC = () => {
  return (
    <div>
      <Grid>
        <Grid.Col span={4}>
          <CustomerHomeFilter />
        </Grid.Col>
        <Grid.Col span={8}>
          <Grid>
            <Grid.Col span={4}>
              <Project />
            </Grid.Col>
            <Grid.Col span={4}>
              <Project />
            </Grid.Col>
            <Grid.Col span={4}>
              <Project />
            </Grid.Col>
            <Grid.Col span={4}>
              <Project />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default CustomerHomePage;
