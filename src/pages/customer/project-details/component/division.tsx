import { Card, Text, Image, Group, Badge, Button } from "@mantine/core";
import React from "react";
import vinhomeImg from "../../../../assets/vinhome.jpg";

const Division: React.FC = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={vinhomeImg} height={160} alt="Norway" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>PHÂN KHU THE RAINBOW</Text>
        <Badge color="green">Đã bàn giao</Badge>
        <Badge color="yellow">VinGroup</Badge>
      </Group>

      <Text size="sm" c="dimmed" lineClamp={4}>
        Tên thương mại: Phân khu The Rainbow.– Quy mô: 17 tòa. gồm 10343 căn
        hộ.– Chiều cao: 25 – 35 tầng.– Diện tích căn hộ: từ 30m2 – 82m2.– Giá
        bán: từ 30 – 45 triệu/m2.– Thời gian bàn giao: đã bàn giao từ tháng
        6/2020.
      </Text>

      <Button color="green" fullWidth mt="md" radius="md">
        Đặt chỗ ngay !
      </Button> 
    </Card>
  );
};

export default Division;
