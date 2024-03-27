import React, { useEffect, useState } from "react";
import {
  IProperty,
  IPropertyAssignModel,
} from "../../../models/property.model";
import { useParams } from "react-router-dom";
import { useProperty } from "../../../hooks/use-property";
import { AxiosError } from "axios";
import {
  Button,
  Checkbox,
  Container,
  Input,
  Modal,
  Table,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AgencySaleBatchCreation from "../sale-batch/agency-salebatch-creation";
import { useSaleBatch } from "../../../hooks/use-saleBatch";
import { SUCCESS_STATUS_CODE } from "../../../utils/constants";
const AgencyPropertyPage: React.FC = () => {
  const [properties, setProperties] = useState<IProperty[]>([]);
  const [selectedProperties, setSelectedProperties] = useState<
    IPropertyAssignModel[]
  >([]);
  const { divisionId } = useParams();
  const { getPropertiesByDivisionId } = useProperty();
  const { assignProperties } = useSaleBatch();
  const [opened, { open, close }] = useDisclosure();
  const handleAssignPropertiesForSaleBatch = async (saleBatchId: number) => {
    const res = await assignProperties(saleBatchId, selectedProperties);
    if (res.status === SUCCESS_STATUS_CODE) {
      //alert
      alert("Thành công !!!");
    } else {
      //alert
    }
  };

  const handlePriceChange = (propertyId: number, price: number) => {
    const cloneState = [...selectedProperties];
    const updatedIndex = cloneState.findIndex(
      (x) => x.propertyId === propertyId
    );
    setSelectedProperties([
      ...cloneState.slice(0, updatedIndex),
      {
        propertyId: propertyId,
        price: price,
        isSelected: cloneState.at(updatedIndex)?.isSelected,
      },
      ...cloneState.slice(updatedIndex + 1),
    ]);
  };
  useEffect(() => {
    if (divisionId) {
      getPropertiesByDivisionId(divisionId)
        .then((res) => {
          setProperties(res);
          setSelectedProperties(
            res.map((r) => {
              return {
                propertyId: r.propertyId,
                price: 0,
                isSelected: false,
              };
            })
          );
        })
        .catch((err: AxiosError) => {
          console.log(err);
        });
    }
  }, [divisionId]);
  const handleSelectProperty = (propertyId: number) => {
    const cloneState = [...selectedProperties];
    const updatedIndex = cloneState.findIndex(
      (x) => x.propertyId === propertyId
    );
    const itemAtIndex = cloneState.at(updatedIndex)
    setSelectedProperties([
      ...cloneState.slice(0, updatedIndex),
      {
        propertyId: propertyId,
        price: itemAtIndex !== undefined ? itemAtIndex.price : 0,
        isSelected: !cloneState.at(updatedIndex)?.isSelected,
      },
      ...cloneState.slice(updatedIndex + 1),
    ]);
  };
  //   const rows = useMemo(() => {
  //     return properties.map((property) => (
  //       <Table.Tr key={property.propertyId}>
  //         <Table.Td ta={"center"}>{property.propertyName}</Table.Td>
  //         <Table.Td ta={"center"}>{property.description}</Table.Td>
  //         <Table.Td ta={"center"}>{property.area}</Table.Td>
  //         <Table.Td ta={"center"}>
  //           <Checkbox
  //             checked={selectedProperties.includes(property.propertyId)}
  //             onClick={() => handleSelectProperty(property.propertyId)}
  //           />
  //         </Table.Td>
  //       </Table.Tr>
  //     ));
  //   }, [divisionId, properties, selectedProperties]);
  return (
    <Container style={{ position: "relative" }}>
      <Table highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th ta={"center"}>Tên căn hộ</Table.Th>
            <Table.Th ta={"center"}>Mô tả</Table.Th>
            <Table.Th ta={"center"}>Diện tích</Table.Th>
            <Table.Th ta={"center"}>Giá bán</Table.Th>
            <Table.Th ta={"center"}>######</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {properties.map((property) => (
            <Table.Tr key={property.propertyId}>
              <Table.Td ta={"center"}>{property.propertyName}</Table.Td>
              <Table.Td ta={"center"}>{property.description}</Table.Td>
              <Table.Td ta={"center"}>{property.area}</Table.Td>
              <Table.Td ta={"center"}>
                <Input
                  placeholder="Giá bán..."
                  inputMode="numeric"
                  value={
                    selectedProperties.filter(
                      (x) => x.propertyId === property.propertyId
                    )[0].price
                  }
                  onChange={(e) => handlePriceChange(property.propertyId, parseInt(e.currentTarget.value))}
                />
              </Table.Td>
              <Table.Td>
                <Checkbox
                  p={"0% 50%"}
                  checked={selectedProperties.filter( x => x.propertyId === property.propertyId)[0].isSelected}
                  onClick={() => handleSelectProperty(property.propertyId)}
                />
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <Button
        mt={"2%"}
        style={{ position: "absolute", right: "2%" }}
        onClick={() => open()}
      >
        Thêm đợt mở bán
      </Button>
      <Modal opened={opened} onClose={close} title="Thông tin đợt bán">
        <AgencySaleBatchCreation
        close={close}
          handleAssignPropertiesForSaleBatch={
            handleAssignPropertiesForSaleBatch
          }
        />
      </Modal>
    </Container>
  );
};

export default AgencyPropertyPage;
