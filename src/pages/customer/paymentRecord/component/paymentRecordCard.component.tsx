import { Card, Group, Text } from "@mantine/core";
import React from "react";
import { IPaymentRecord } from "../../../../models/paymentRecord.model";
import { numberToMoney } from "../../../../utils/utils";

interface IProps{
    record: IPaymentRecord
    index: number
}

const PaymentRecordCard: React.FC<IProps> = ({record, index}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Đợt thanh toán lần thứ {index}</Text>
      </Group>
      <Group>
        <Text>Ngày bắt đầu : </Text>
        <Text>{record.startDate.split("T")[0]} </Text>
      </Group>
      <Group>
        <Text>Ngày hết hạn : </Text>
        <Text>{record.dueDate.split("T")[0]}</Text>
      </Group>
      <Group>
        <Text>Phí cần thanh toán : </Text>
        <Text>{numberToMoney(record.amount)}</Text>
      </Group>
    </Card>
  );
};

export default PaymentRecordCard;
