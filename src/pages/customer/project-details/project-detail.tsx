import React from "react";
import classes from "./project-detail.module.css";
import vinhomeImg from "../../../assets/vinhome.jpg";
import vinhomeImg2 from "../../../assets/vinhome-2.jpg";
import vinhomeImg3 from "../../../assets/vinhome-3.jpg";
import { Image, Table, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

const ProjectDetailPage: React.FC = () => {
  return (
    <div className={classes.container}>
      <Carousel withIndicators height={500}>
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
      <Text ta="center" fw={700} size="xl" pt={"1em"} pb={"1em"}>
        VINHOMES GRAND PARK
      </Text>
      <Text>
        Vinhomes Grand Park là dự án Khu đô thị với thông minh kiểu mẫu bật nhất
        tại Việt Nam với quy mô 271ha toạ lạc tại đường Nguyễn Xiển, Phường Long
        Bình và Long Thạnh Mỹ, TP. Thủ Đức, TP.HCM. <br></br>
        Vinhomes Grand Park được Chủ đầu tư là Tập đoàn Vingroup phát triển với
        tiêu chí “all in one” cộng hưởng chuỗi hệ sinh thái tiện ích đắng cấp
        mang tầm quốc tế với công viên ánh sáng 36ha, hệ thống trường học
        Vinschool, chuỗi siêu thị Vinmart, bênh viện quốc tế Vinmec, và xe bus
        điện Vinfast … <br></br>
        Là dự án gây được tiếng vang và tạo ra cơn sốt tại thị trường Bất động
        sản thành phố Hồ Chí Minh khi 10.000 căn hộ được bán hết chỉ trong vòng
        17 ngày ra mắt. Có thể nói Đại đô thị Vinhomes là nơi an cư lý tưởng
        dành cho những cư dân tinh hoa.
      </Text>
      <Text ta="center" fw={700} size="xl" pt={"1em"} pb={"1em"}>
        Tổng quan dự án
      </Text>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
        className={classes.projectOverview}
      >
        <Table w={"50%"}>
          <Table.Tr>
            <Table.Td ta={"center"} fw={700}>
              Tên dự án
            </Table.Td>
            <Table.Td ta={"center"}>Vinhome Grand Park</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td ta={"center"} fw={700}>
              Vị trí
            </Table.Td>
            <Table.Td ta={"center"}>
              Nguyễn Xiển, Phường Long Thạnh Mỹ, Quận 9, TP Hồ Chí Minh
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td ta={"center"} fw={700}>
              Chủ đầu tư
            </Table.Td>
            <Table.Td ta={"center"}>Tập đoàn Vingroup</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td ta={"center"} fw={700}>
              Tổng thầu xây dựng
            </Table.Td>
            <Table.Td ta={"center"}>Contecons</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td ta={"center"} fw={700}>
              Đơn vị thiết kế
            </Table.Td>
            <Table.Td ta={"center"}>Artelia Group</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td ta={"center"} fw={700}>
              Tổng diện tích
            </Table.Td>
            <Table.Td ta={"center"}>271 ha</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td ta={"center"} fw={700}>
              Pháp lý
            </Table.Td>
            <Table.Td ta={"center"}>
              Sổ hồng sỡ hữu lâu dài | Người nước ngoài 50 năm
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td ta={"center"} fw={700}>
              Khởi công
            </Table.Td>
            <Table.Td ta={"center"}>2017</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td ta={"center"} fw={700}>
              Tiện ích
            </Table.Td>
            <Table.Td ta={"center"}>
              Công viên ánh sáng 36ha, hệ thống trường học các cấp, trung tâm
              thương mại, hồ bơi…
            </Table.Td>
          </Table.Tr>
        </Table>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
