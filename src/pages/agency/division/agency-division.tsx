import React, { useEffect, useMemo, useState } from "react";
import { IDivision } from "../../../models/division.model";
import { Button, Container, Table } from "@mantine/core";
import { useDivision } from "../../../hooks/use-division";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const AgencyDivisionPage: React.FC = () => {
  const [divisions, setDivisions] = useState<IDivision[]>([]);
  const { getDivisionByRole } = useDivision();
  const navigate = useNavigate()
  useEffect(() => {
    getDivisionByRole()
      .then((res) => {
        setDivisions(res);
      })
      .catch((err: AxiosError) => console.log(err));
  }, []);
  const rows = useMemo(() => {
    return divisions.map((division) => (
      <Table.Tr key={division.divisionId}>
        <Table.Td ta={'center'}>{division.divisionName}</Table.Td>
        <Table.Td ta={'center'}>{division.description}</Table.Td>
        <Table.Td ta={'center'}>{division.divisionStatus}</Table.Td>
        <Table.Td ta={'center'}>
            <Button onClick={() => navigate(`/agency/division/${division.divisionId}`)}>Xem danh sách căn hộ</Button>
        </Table.Td>
      </Table.Tr>
    ));
  }, [divisions]);
  return (
    <Container>
      <Table highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th ta={'center'}>Division name</Table.Th>
            <Table.Th ta={'center'}>Description</Table.Th>
            <Table.Th ta={'center'}>Status</Table.Th>
            <Table.Th ta={'center'}>######</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Container>
  );
};

export default AgencyDivisionPage;
