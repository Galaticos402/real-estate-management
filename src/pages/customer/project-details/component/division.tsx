import { Card, Text, Image, Group, Badge, Button } from "@mantine/core";
import React from "react";
import vinhomeImg from "../../../../assets/vinhome.jpg";
import { IDivision } from "../../../../models/division.model";
interface IProps{
  division: IDivision
}
const Division: React.FC<IProps> = ({division}) => {
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

      <Button color="red" fullWidth mt="md" radius="md">
        Xem các đợt mở bán
      </Button> 
    </Card>
  );
};

export default Division;
