import { Badge, Button, Card, Group, Text, Image } from "@mantine/core";
import vinhomeImg from "../../../../assets/vinhome.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IProject } from "../../../../models/project.model";
interface IProps {
  project: IProject;
}
const InvestorProjectCard: React.FC<IProps> = ({ project }) => {
  const navigate = useNavigate();
  const handleViewDetail = () => {
    navigate(`/investor/project-detail/(${project.projectId})`);
  };
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={vinhomeImg} height={160} alt="Norway" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{project.projectName}</Text>
        <Badge color="pink">{project.projectStatus}</Badge>
      </Group>
      <Badge color="green" mb={'lg'}>VinGroup</Badge>
      <Text size="md" c="dimmed" lineClamp={3} >
        {project.description}
      </Text>

      <Button
        color="green"
        fullWidth
        mt="md"
        radius="md"
        onClick={handleViewDetail}
      >
        Xem chi tiết
      </Button>
    </Card>
  );
};

export default InvestorProjectCard;
