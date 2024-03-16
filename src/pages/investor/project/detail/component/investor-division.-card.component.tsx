import { Card, Group, Image, Text, Badge, Button } from "@mantine/core";
import React from "react";
import vinhomeImg from "../../../../../assets/vinhome.jpg";
import { IDivision } from "../../../../../models/division.model";
import { useNavigate } from "react-router-dom";
interface IProps {
  division: IDivision;
}
const InvestorDivisionCard: React.FC<IProps> = ({ division }) => {
  const navigate = useNavigate();
  const handleViewProperties = () => {
    navigate(`/investor/project-detail/division/${division.divisionId}/properties`);
  };
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={vinhomeImg} height={160} alt="Norway" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{division.divisionName}</Text>
        <Badge color="green">{division.divisionStatus}</Badge>
      </Group>

      <Text size="sm" c="dimmed" lineClamp={4}>
        {division.description}
      </Text>

      <Button
        color="red"
        fullWidth
        mt="md"
        radius="md"
        onClick={handleViewProperties}
      >
        Xem chi tiết các sản phẩm căn hộ
      </Button>
    </Card>
  );
};

export default InvestorDivisionCard;
