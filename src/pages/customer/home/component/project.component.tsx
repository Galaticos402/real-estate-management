import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import React from "react";
import vinhomeImg from "../../../../assets/vinhome.jpg";
import { useNavigate } from "react-router-dom";
import { IProject } from "../../../../models/project.model";
interface IProps{
  project: IProject
}
const Project: React.FC<IProps> = ({project}) => {
  const navigate = useNavigate()
  const handleViewDetail = () => {
    navigate('/customer/project/1')
  }
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={vinhomeImg} height={160} alt="Norway" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{project.projectName}</Text>
        <Badge color="pink">{project.projectStatus}</Badge>
        <Badge color="green">VinGroup</Badge>
      </Group>

      <Text size="sm" c="dimmed" lineClamp={4}>
       {project.description}
      </Text>

      <Button color="green" fullWidth mt="md" radius="md" onClick={handleViewDetail}>
        Xem chi tiết
      </Button>
    </Card>
  );
};

export default Project;
