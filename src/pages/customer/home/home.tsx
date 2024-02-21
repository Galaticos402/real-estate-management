import { Grid } from "@mantine/core";
import React, { useEffect, useState } from "react";
import CustomerHomeFilter from "./component/filter.component";
import Project from "./component/project.component";
import { IProject } from "../../../models/project.model";
import useProject from "../../../hooks/use-project";
import { AxiosError } from "axios";

const CustomerHomePage: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const { getAll } = useProject();
  useEffect(() => {
    getAll()
      .then((res) => setProjects(res))
      .catch((err: AxiosError) => {
        console.warn(err);
      });
  }, []);
  return (
    <div>
      <Grid>
        <Grid.Col span={4}>
          <CustomerHomeFilter />
        </Grid.Col>
        <Grid.Col span={8}>
          <Grid>
            {projects.map((prj) => (
              <Grid.Col span={4}>
                <Project project={prj}/>
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default CustomerHomePage;
