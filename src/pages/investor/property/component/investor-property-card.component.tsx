import { Card, Group, Text, Image } from "@mantine/core";
import React from "react";
import { IProperty } from "../../../../models/property.model";
import vinhomeImg from "../../../../assets/vinhome.jpg";
interface IProps{
    property : IProperty
}
const InvestorPropertyCard: React.FC<IProps> = ({property}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={vinhomeImg} height={160} alt="Norway" />
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Tên sản phẩm : </Text>
        <Text>{property.propertyName}</Text>
      </Group>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Mô tả :  </Text>
        <Text>{property.description} </Text>
      </Group>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Diện tích : </Text>
        <Text>{property.area}</Text>
      </Group>
    </Card>
  );
};

export default InvestorPropertyCard;
