import { Button, Container, Input } from "@mantine/core";
import { useFormik } from "formik";
import React from "react";
import { ISaleBatchCreationModel } from "../../../models/saleBatch.model";
import * as yup from "yup";
import { DateInput } from "@mantine/dates";
import { useSaleBatch } from "../../../hooks/use-saleBatch";
import { SUCCESS_STATUS_CODE } from "../../../utils/constants";

const SaleBatchCreationSchema = yup.object().shape({
  bankAccount: yup
    .string()
    .required("Thông tin về mô tả phân khu không được trống"),
  bankName: yup.string().required("Tên phân khu không được trống"),
  bookingFee: yup.string().required("Trạng thái dự án không được trống"),
  endDate: yup.date().required(),
  premiumStartDate: yup.date().required(),
  receiverName: yup.string().required(),
  saleBatchName: yup.string().required(),
  startDate: yup.date().required(),
});

interface IProps {
  handleAssignPropertiesForSaleBatch: (saleBatchId: number) => void;
  close: () => void
}

const AgencySaleBatchCreation: React.FC<IProps> = ({
  handleAssignPropertiesForSaleBatch,
  close
}) => {
  const { create } = useSaleBatch();
  const handleSubmit = async () => {
    const res = await create(formik.values);
    if (res.status === SUCCESS_STATUS_CODE) {
      // Do something here
      handleAssignPropertiesForSaleBatch(res.data.saleBatchId);
    } else {
      // Alert
      alert("Failed")
    }
    close()
  };
  const formik = useFormik<ISaleBatchCreationModel>({
    initialValues: {
      bankAccount: "",
      bankName: "",
      bookingFee: -1,
      endDate: new Date(),
      premiumStartDate: new Date(),
      receiverName: "",
      saleBatchName: "",
      startDate: new Date(),
    },
    onSubmit: handleSubmit,
    validationSchema: SaleBatchCreationSchema,
  });
  return (
    <Container>
      <Input.Wrapper
        label="Tên đợt bán"
        mb={"1em"}
        error={formik.errors.saleBatchName}
        withAsterisk
      >
        <Input
          placeholder="Tên đợt bán..."
          value={formik.values.saleBatchName}
          onChange={(e) =>
            formik.setFieldValue("saleBatchName", e.currentTarget.value)
          }
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Ngày mở bán ưu tiên"
        mb={"1em"}
        error={formik.errors.premiumStartDate}
        withAsterisk
      >
        <DateInput
          placeholder="Ngày mở bán ưu tiên..."
          valueFormat="DD/MM/YYYY"
          value={formik.values.premiumStartDate}
          onChange={(e) => {
            // console.log(e?.getMilliseconds());
            formik.setFieldValue("premiumStartDate", e);
          }}
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Ngày mở bán thực tế"
        mb={"1em"}
        error={formik.errors.startDate}
        withAsterisk
      >
        <DateInput
          placeholder="Ngày mở bán thực tế..."
          valueFormat="DD/MM/YYYY"
          value={formik.values.startDate}
          onChange={(e) => formik.setFieldValue("startDate", e)}
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Ngày kết thúc mở bán"
        mb={"1em"}
        error={formik.errors.endDate}
        withAsterisk
      >
        <DateInput
          placeholder="Ngày kết thúc mở bán..."
          valueFormat="DD/MM/YYYY"
          value={formik.values.endDate}
          onChange={(e) => formik.setFieldValue("endDate", e)}
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Phí đặt cọc"
        mb={"1em"}
        error={formik.errors.bookingFee}
        withAsterisk
      >
        <Input
          placeholder="Phí đặt cọc..."
          inputMode="numeric"
          value={formik.values.bookingFee}
          onChange={(e) =>
            formik.setFieldValue("bookingFee", e.currentTarget.value)
          }
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Số tài khoản"
        mb={"1em"}
        error={formik.errors.bankAccount}
        withAsterisk
      >
        <Input
          placeholder="Số tài khoản..."
          value={formik.values.bankAccount}
          onChange={(e) =>
            formik.setFieldValue("bankAccount", e.currentTarget.value)
          }
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Ngân hàng"
        mb={"1em"}
        error={formik.errors.bankName}
        withAsterisk
      >
        <Input
          placeholder="Ngân hàng..."
          value={formik.values.bankName}
          onChange={(e) =>
            formik.setFieldValue("bankName", e.currentTarget.value)
          }
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Tên người nhận"
        mb={"1em"}
        error={formik.errors.receiverName}
        withAsterisk
      >
        <Input
          placeholder="Tên người nhận..."
          value={formik.values.receiverName}
          onChange={(e) =>
            formik.setFieldValue("receiverName", e.currentTarget.value)
          }
        />
      </Input.Wrapper>
      <Button.Group>
        <Button color="green" w={"100%"}  onClick={handleSubmit}>
          Tạo đợt mở bán mới
        </Button>
      </Button.Group>
    </Container>
  );
};

export default AgencySaleBatchCreation;
