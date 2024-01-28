import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import React from "react";
import vinhomeImg from "../../../../assets/vinhome.jpg";
import { useNavigate } from "react-router-dom";

const Project: React.FC = () => {
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
        <Text fw={500}>Dự án Vinhome Grand Park Quận 9</Text>
        <Badge color="pink">Đang triển khai</Badge>
        <Badge color="green">VinGroup</Badge>
      </Group>

      <Text size="sm" c="dimmed" lineClamp={4}>
        Vinhomes Grand Park là dự án Khu đô thị với thông minh kiểu mẫu bật nhất
        tại Việt Nam với quy mô 271ha toạ lạc tại đường Nguyễn Xiển, Phường Long
        Bình và Long Thạnh Mỹ, TP. Thủ Đức, TP.HCM.
      </Text>

      <Button color="green" fullWidth mt="md" radius="md" onClick={handleViewDetail}>
        Xem chi tiết
      </Button>
    </Card>
  );
};

export default Project;
