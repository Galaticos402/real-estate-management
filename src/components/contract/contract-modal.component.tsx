import React from "react";
import { Button, Group, Modal, Select, Text } from "@mantine/core";
import { ISaleBatchDetail } from "../../models/saleBatchDetail.model";
import { numberToMoney } from "../../utils/utils";
import { useFormik } from "formik";
import { IContract } from "../../models/contract.model";
import * as yup from "yup";
import { useContract } from "../../hooks/use-contract";
import { AxiosError } from "axios";
import { notifications } from "@mantine/notifications";
interface IProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  saleBatchDetail?: ISaleBatchDetail;
}

const ContractSchema = yup.object().shape({
  duration: yup.number().required(),
  period: yup.number().required(),
});

const ContractCreationModal: React.FC<IProps> = ({
  isOpen,
  close,
  saleBatchDetail,
}) => {
  const { buildContract } = useContract();
  const handleSubmit = () => {
    const contract: IContract = {
      duration: formik.values.duration,
      listedPrice: formik.values.listedPrice,
      period: formik.values.period,
      propertyId: formik.values.propertyId,
    };
    buildContract(contract)
      .then((res) => {
        console.log(res);
        notifications.show({
          title: "Thông báo",
          message: "Tạo hợp đồng thành công !",
        });
        close()
      })
      .catch((err: AxiosError) => {
        console.warn(err);
        notifications.show({
          title: "Thông báo",
          message: err.message,
        });
        formik.resetForm();
      });
  };

  const formik = useFormik<IContract>({
    initialValues: {
      propertyId: saleBatchDetail?.property
        ? saleBatchDetail.property.propertyId
        : -1,
      duration: -1,
      listedPrice: saleBatchDetail?.price ? saleBatchDetail.price : -1,
      period: -1,
    },
    validationSchema: ContractSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Modal
        opened={isOpen}
        onClose={close}
        title={<h2>Tạo hợp đồng</h2>}
        centered
      >
        <Group gap={"xl"}>
          <Text fw={"bold"}>Giá niêm yết: </Text>
          <Text>{numberToMoney(saleBatchDetail?.price)}</Text>
        </Group>
        <Select
          label="Thời gian trả góp"
          placeholder="Chọn thời gian trả góp"
          onChange={(value) => formik.setFieldValue("duration", value !== null ? parseInt(value) : -1)}
          mb={"1em"}
          data={[
            {
              label: "Trả 1 lần",
              value: "0",
            },
            {
              label: "12 tháng",
              value: "12",
            },
            {
              label: "24 tháng",
              value: "24",
            },
            {
              label: "36 tháng",
              value: "36",
            },
          ]}
        />

        <Select
          label="Chọn đợt trả góp"
          placeholder="Chọn đợt trả góp"
          mb={"1em"}
          onChange={(value) => formik.setFieldValue("period", value !== null ? parseInt(value) : -1)}
          data={[
            {
              label: "Mỗi tháng",
              value: "1",
            },
            {
              label: "Mỗi 3 tháng",
              value: "3",
            },
            {
              label: "Mỗi 6 tháng",
              value: "6",
            },
          ]}
        />
        <Button w={"100%"} onClick={handleSubmit}>
          Tạo hợp đồng
        </Button>
      </Modal>
    </>
  );
};

export default ContractCreationModal;
