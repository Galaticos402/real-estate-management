import React from "react";
import classes from "./project-detail.module.css";
import vinhomeImg from "../../../assets/vinhome.jpg";
import vinhomeImg2 from "../../../assets/vinhome-2.jpg";
import vinhomeImg3 from "../../../assets/vinhome-3.jpg";
import { Grid, Image, Table, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Division from "./component/division";

const ProjectDetailPage: React.FC = () => {
  return (
    <div className={classes.container}>
      <Grid>
        <Grid.Col span={5}>
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
              <Table.Td ta={"end"}>Vinhome Grand Park</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Vị trí</Table.Td>
              <Table.Td ta={"end"}>
                Nguyễn Xiển – Phường Long Thạnh Mỹ – Quận 9 – TP Hồ Chí Minh
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Chủ đầu tư</Table.Td>
              <Table.Td ta={"end"}>Tập đoàn Vingroup</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Tổng thầu xây dựng</Table.Td>
              <Table.Td ta={"end"}>Contecons</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Tổng diện tích</Table.Td>
              <Table.Td ta={"end"}>271 ha</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td> Quy mô</Table.Td>
              <Table.Td ta={"end"}>22 toà tháp cao từ 25 – 30 tầng</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Pháp lý</Table.Td>
              <Table.Td ta={"end"}>
                Sổ hồng sỡ hữu lâu dài | Người nước ngoài 50 năm
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Trang thông tin chi tiết</Table.Td>
              <Table.Td ta={"end"}>
                <a href="https://vinhome.com.vn/vinhomes-grand-park/">
                  https://vinhome.com.vn/vinhomes-grand-park/
                </a>
              </Table.Td>
            </Table.Tr>
          </Table>
        </Grid.Col>
        <Grid.Col span={7}>
          <Grid>
            <Grid.Col span={6}>
              <Division />
            </Grid.Col>
            <Grid.Col span={6}>
              <Division />
            </Grid.Col>
            <Grid.Col span={6}>
              <Division />
            </Grid.Col>
            <Grid.Col span={6}>
              <Division />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default ProjectDetailPage;
