import { Button, Container, FileInput, Input, Select, Textarea } from "@mantine/core";
import { useFormik } from "formik";
import React, { useEffect, useMemo, useState } from "react";
import { IDivisionCreationModel } from "../../../../../models/division.model";
import * as yup from "yup";
import { useDivision } from "../../../../../hooks/use-division";
import { useProperty } from "../../../../../hooks/use-property";
import { SUCCESS_STATUS_CODE } from "../../../../../utils/constants";
import { notifications } from "@mantine/notifications";
import { UserRole, useUser } from "../../../../../hooks/use-user";
import { IUser } from "../../../../../models/user.model";
import { AxiosError } from "axios";
// import { notifications } from "@mantine/notifications";

const DivisionCreationSchema = yup.object().shape({
  description: yup
    .string()
    .required("Thông tin về mô tả phân khu không được trống"),
  divisionName: yup.string().required("Tên phân khu không được trống"),
  divisionStatus: yup.string().required("Trạng thái dự án không được trống"),
  agencyId: yup.number()
});

interface IProps {
  projectId?: string;
  reload: () => void;
}

const CreateDivisionComponent: React.FC<IProps> = ({ projectId, reload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [agencies, setAgencies] = useState<IUser[]>([])
  const { create } = useDivision();
  const { bulkCreate } = useProperty();
  const {getUsersByRole} = useUser()
  useEffect(() => {
    getUsersByRole(UserRole.AGENCY).then((res) => {
      setAgencies(res)
    }).catch((err: AxiosError) => {
      console.log(err)
    })
    
  }, [])
  const handleSubmit = async () => {
    if (projectId) {
      const response = await create(formik.values);
      if (response.status === SUCCESS_STATUS_CODE) {
        // Success notification here
        notifications.show({
          title: "Thông báo",
          message: "Thêm phân khu thành công !",
        });
        //
        const divisionId = response.data.divisionId;
        if (selectedFile !== null && divisionId) {
          const formData = new FormData();
          formData.append("file", selectedFile);
          const bulkUploadResponse = await bulkCreate(
            divisionId.toString(),
            formData
          );
          if (bulkUploadResponse.status === SUCCESS_STATUS_CODE) {
            // Success notification here
            notifications.show({
              title: "Thông báo",
              message: "Thêm danh sách căn hộ thành công !",
            });
          }
        }
      }
      reload();
    }
  };
  const agencySelectData = useMemo(() => {
    return agencies.map((agency) =>  {
      return {
        label: agency.userName,
        value: agency.userId?.toString(),

      }
    })
  }, [agencies])
  const formik = useFormik<IDivisionCreationModel>({
    initialValues: {
      description: "",
      divisionName: "",
      divisionStatus: "",
      projectId: projectId ? projectId.replace(")", "").replace("(", "") : "",
    },
    onSubmit: handleSubmit,
    validationSchema: DivisionCreationSchema,
  });
  return (
    <Container>
      <Input.Wrapper
        label="Tên dự án"
        mb={"1em"}
        error={formik.errors.divisionName}
        withAsterisk
      >
        <Input
          placeholder="Tên phân khu..."
          value={formik.values.divisionName}
          onChange={(e) =>
            formik.setFieldValue("divisionName", e.currentTarget.value)
          }
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Mô tả phân khu"
        mb={"1em"}
        error={formik.errors.description}
        withAsterisk
      >
        <Textarea
          placeholder="Mô tả phân khu..."
          autosize
          value={formik.values.description}
          onChange={(e) =>
            formik.setFieldValue("description", e.currentTarget.value)
          }
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Trạng thái phân khu"
        mb={"1em"}
        error={formik.errors.divisionStatus}
        withAsterisk
      >
        <Input
          placeholder="Trạng thái phân khu..."
          value={formik.values.divisionStatus}
          onChange={(e) =>
            formik.setFieldValue("divisionStatus", e.currentTarget.value)
          }
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Nhà phân phối"
        mb={"1em"}
        error={formik.errors.agencyId}
      >
        <Select
          placeholder="Nhà phân phối ..."
          value={formik.values.agencyId}
          data={agencySelectData}
          onChange={(option) =>
            formik.setFieldValue("agencyId", option)
          }
        />
      </Input.Wrapper>
      <Input.Wrapper
        label="Bảng thông tin căn hộ"
        mb={"1em"}
        withAsterisk
        // error={formik.errors.description}
      >
        <FileInput
          placeholder="Upload file tại đây"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={(file) => {
            setSelectedFile(file);
          }}
        />
      </Input.Wrapper>
      <Button.Group>
        <Button color="green" w={"50%"} mr={"5%"} onClick={handleSubmit}>
          Thêm phân khu
        </Button>
        <Button color="red" w={"50%"}>
          Hủy
        </Button>
      </Button.Group>
    </Container>
  );
};

export default CreateDivisionComponent;
