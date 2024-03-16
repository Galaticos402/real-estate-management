import { Grid } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { IProject } from "../../../models/project.model";
import useProject from "../../../hooks/use-project";
import InvestorProjectCard from "./component/investor-project-card.component";

const InvestorProjectPage: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const { findProjectsOfAnInvestor } = useProject();
  const fetchInvestorProjects = async () => {
    try {
      const res = await findProjectsOfAnInvestor();
      setProjects(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchInvestorProjects();
  }, []);
  return (
    <div>
      <Grid>
        {projects.map((prj) => (
          <Grid.Col span={4}>
            <InvestorProjectCard project={prj} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default InvestorProjectPage;
