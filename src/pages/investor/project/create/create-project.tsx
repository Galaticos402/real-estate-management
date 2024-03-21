import {
  Container,
  Input,
  Select,
  Textarea,
  Text,
  Button,
} from "@mantine/core";
import { useFormik } from "formik";
import React from "react";
import { IProjectCreationModel } from "../../../../models/project.model";
import * as yup from "yup";
import useProject from "../../../../hooks/use-project";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

const ProjectCreationSchema = yup.object().shape({
  area: yup.string().required("Thông tin về diện tích không được trống"),
  buildingContractor: yup
    .string()
    .required("Thông tin về tổng thầu dự án không được trống"),
  description: yup
    .string()
    .required("Thông tin về mô tả dự án không được trống"),
  introPageLink: yup
    .string()
    .required("Thông tin về trang chủ không được trống"),
  juridicalStatus: yup
    .string()
    .required("Thông tin về pháp lý không được trống"),
  location: yup.string().required("Thông tin về vị trí không được trống"),
  projectName: yup.string().required("Tên dự án không được trống"),
  projectStatus: yup.string().required("Trạng thái dự án không được trống"),
  scale: yup.string().required("Quy mô dự án không được trống"),
});

const CreateProjectPage: React.FC = () => {
  const { create } = useProject();
  const navigate = useNavigate()
  const handleSubmit = async () => {
    console.log(formik.values);
    try {
      const isCreated = await create(formik.values);
      if (isCreated) {
        notifications.show({
          title: "Thông báo",
          color: 'green',
          message: "Tạo dự án thành công !",
        });
        navigate("/investor/project")
      }else{
        notifications.show({
            title: "Thông báo",
            color: 'red',
            message: "Tạo dự án thất bại !",
          });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const formik = useFormik<IProjectCreationModel>({
    initialValues: {
      area: "",
      buildingContractor: "",
      description: "",
      introPageLink: "",
      juridicalStatus: "",
      location: "",
      projectName: "",
      projectStatus: "",
      scale: "",
    },
    onSubmit: handleSubmit,
    validationSchema: ProjectCreationSchema,
  });

  return (
    <Container>
      <Text size="xl" fw={700} ta={"center"}>
        Tạo dự án mới
      </Text>
      <Input.Wrapper
        label="Tên dự án"
        mb={"1em"}
        error={formik.errors.projectName}
      >
        <Input
          placeholder="Tên dự án..."
          value={formik.values.projectName}
          onChange={(e) =>
            formik.setFieldValue("projectName", e.currentTarget.value)
          }
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Mô tả dự án"
        mb={"1em"}
        error={formik.errors.description}
      >
        <Textarea
          placeholder="Mô tả dự án..."
          autosize
          value={formik.values.description}
          onChange={(e) =>
            formik.setFieldValue("description", e.currentTarget.value)
          }
        />
      </Input.Wrapper>
      <Input.Wrapper label="Vị trí" mb={"1em"} error={formik.errors.location}>
        <Input
          placeholder="Vị trí..."
          value={formik.values.location}
          onChange={(e) =>
            formik.setFieldValue("location", e.currentTarget.value)
          }
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Tổng thầu xây dựng"
        mb={"1em"}
        error={formik.errors.buildingContractor}
      >
        <Input
          placeholder="Tổng thầu xây dựng..."
          error={formik.errors.buildingContractor}
          value={formik.values.buildingContractor}
          onChange={(e) =>
            formik.setFieldValue("buildingContractor", e.currentTarget.value)
          }
        />
      </Input.Wrapper>
      <Input.Wrapper label="Diện tích" mb={"1em"} error={formik.errors.area}>
        <Input
          placeholder="Diện tích..."
          value={formik.values.area}
          onChange={(e) => formik.setFieldValue("area", e.currentTarget.value)}
        />
      </Input.Wrapper>
      <Input.Wrapper label="Quy mô" mb={"1em"} error={formik.errors.scale}>
        <Input
          placeholder="Quy mô..."
          value={formik.values.scale}
          onChange={(e) => formik.setFieldValue("scale", e.currentTarget.value)}
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Thông tin pháp lý"
        mb={"1em"}
        error={formik.errors.juridicalStatus}
      >
        <Input
          placeholder="Thông tin pháp lý..."
          value={formik.values.juridicalStatus}
          onChange={(e) =>
            formik.setFieldValue("juridicalStatus", e.currentTarget.value)
          }
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Trang thông tin dự án"
        mb={"1em"}
        error={formik.errors.introPageLink}
      >
        <Input
          placeholder="Website..."
          value={formik.values.introPageLink}
          onChange={(e) =>
            formik.setFieldValue("introPageLink", e.currentTarget.value)
          }
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Trạng thái"
        mb={"1em"}
        error={formik.errors.projectStatus}
      >
        <Select
          placeholder="Trạng thái..."
          value={formik.values.projectStatus}
          onChange={(val) => formik.setFieldValue("projectStatus", val)}
          data={[
            {
              label: "Đang triển khai",
              value: "Đang triển khai",
            },
            {
              label: "Đã bàn giao",
              value: "Đã bàn giao",
            },
          ]}
        />
      </Input.Wrapper>
      <Button.Group>
        <Button
          color="green"
          w={"50%"}
          mr={"5%"}
          onClick={handleSubmit}
        >
          Tạo dự án mới
        </Button>
        <Button color="red" w={"50%"}>
          Hủy
        </Button>
      </Button.Group>
    </Container>
  );
};

export default CreateProjectPage;
