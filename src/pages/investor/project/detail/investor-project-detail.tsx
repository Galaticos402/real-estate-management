import React, { useEffect, useState } from "react";
import { IProject } from "../../../../models/project.model";
import { useParams } from "react-router-dom";
import useProject from "../../../../hooks/use-project";
import { AxiosError } from "axios";
import {
  Button,
  Grid,
  Image,
  Modal,
  Table,
  Text,
  Tooltip,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import vinhomeImg from "../../../../assets/vinhome.jpg";
import vinhomeImg2 from "../../../../assets/vinhome-2.jpg";
import vinhomeImg3 from "../../../../assets/vinhome-3.jpg";
import InvestorDivisionCard from "./component/investor-division.-card.component";
import { IconPlus } from "@tabler/icons-react";
import globalClasses from "../../../../global.module.css";
import { useDisclosure } from "@mantine/hooks";
import CreateDivisionComponent from "./create-division/create-division";

const InvestorProjectDetailPage: React.FC = () => {
  const [project, setProject] = useState<IProject>();
  const { projectId } = useParams();
  const { getById } = useProject();
  const [opened, { open, close }] = useDisclosure(false);
  const [reload, setReload] = useState<boolean>(false)
  useEffect(() => {
    if (projectId) {
      getById(projectId)
        .then((res) => setProject(res))
        .catch((err: AxiosError) => console.log(err));
    }
  }, [projectId, reload]);
  return (
    <div>
      <Grid>
        <Grid.Col span={4}>
          <Carousel withIndicators height={300}>
            <Carousel.Slide>
              <Image src={vinhomeImg} mih={"100%"} miw={"100%"} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={vinhomeImg2} mih={"100%"} miw={"100%"} />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src={vinhomeImg3} mih={"100%"} miw={"100%"} />
            </Carousel.Slide>
          </Carousel>
          <Text ta={"center"} pt={"1em"} fw={700} size="xl">
            Tổng quan dự án
          </Text>
          <Table>
            <Table.Tr>
              <Table.Td>Tên dự án</Table.Td>
              <Table.Td ta={"end"}>{project?.projectName}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Vị trí</Table.Td>
              <Table.Td ta={"end"}>{project?.location}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Chủ đầu tư</Table.Td>
              <Table.Td ta={"end"}>
                {project ? project.investor.userName : "-"}
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Tổng thầu xây dựng</Table.Td>
              <Table.Td ta={"end"}>{project?.buildingContractor}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Tổng diện tích</Table.Td>
              <Table.Td ta={"end"}>{project?.area}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td> Quy mô</Table.Td>
              <Table.Td ta={"end"}>{project?.scale}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Pháp lý</Table.Td>
              <Table.Td ta={"end"}>{project?.juridicalStatus}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Trang thông tin chi tiết</Table.Td>
              <Table.Td ta={"end"}>
                <a href={project?.introPageLink}>{project?.introPageLink}</a>
              </Table.Td>
            </Table.Tr>
          </Table>
        </Grid.Col>
        <Grid.Col span={8}>
          <Grid>
            {project?.divisions &&
              project.divisions.map((division) => (
                <Grid.Col span={6}>
                  <InvestorDivisionCard division={division} />
                </Grid.Col>
              ))}
          </Grid>
        </Grid.Col>
      </Grid>
      <Tooltip label="Thêm 1 phân khu cho dự án">
        <Button className={globalClasses.createBtn} onClick={() => open()}>
          <IconPlus />
        </Button>
      </Tooltip>
      <Modal
        opened={opened}
        onClose={close}
        title={
          <Text size="xl" fw={700} ta={"center"}>
            Thêm phân khu mới cho dự án
          </Text>
        }
      >
        <CreateDivisionComponent projectId={projectId} reload={() => {
           setReload(!reload)
           close()
        }}/>
      </Modal>
    </div>
  );
};
export default InvestorProjectDetailPage;
