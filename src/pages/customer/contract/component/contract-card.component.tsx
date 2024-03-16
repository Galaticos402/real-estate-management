import { Card, Group, Text, Button } from "@mantine/core";
import React from "react";
import { IContract } from "../../../../models/contract.model";
import { numberToMoney } from "../../../../utils/utils";
import { useNavigate } from "react-router-dom";

interface IProps {
  contract: IContract;
}

const ContractCard: React.FC<IProps> = ({ contract }) => {
  const navigate = useNavigate();
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{contract.property?.propertyName}</Text>
      </Group>
      <Group>
        <Text>Giá niêm yết : </Text>
        <Text>{numberToMoney(contract.listedPrice)} </Text>
      </Group>
      <Group>
        <Text>Thời gian thanh toán : </Text>
        <Text>{contract.duration} tháng </Text>
      </Group>
      <Group>
        <Text>Đợt thanh toán : </Text>
        <Text>Mỗi {contract.period} tháng </Text>
      </Group>

      <Button color="green" fullWidth mt="md" radius="md" onClick={() => {
        navigate(`/customer/contract/payment-record/${contract.contractId}`)
      }}>
        Xem chi tiết các đợt thanh toán
      </Button>
    </Card>
  );
};

export default ContractCard;
