import { Button, Grid, Tooltip } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { IProject } from "../../../models/project.model";
import useProject from "../../../hooks/use-project";
import InvestorProjectCard from "./component/investor-project-card.component";
import { IconPlus } from "@tabler/icons-react";
import globalClasses from "../../../global.module.css";
import { useNavigate } from "react-router-dom";

const InvestorProjectPage: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const { findProjectsOfAnInvestor } = useProject();
  const navigate = useNavigate();
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
      <Tooltip label="Thêm 1 dự án mới">
        <Button className={globalClasses.createBtn} onClick={() => navigate("/investor/project/create")}>
          <IconPlus />
        </Button>
      </Tooltip>
    </div>
  );
};

export default InvestorProjectPage;
