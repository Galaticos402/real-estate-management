import { Button, Card, Checkbox, Grid, TextInput } from "@mantine/core";
import { IconArrowUp, IconSearch } from "@tabler/icons-react";
import React from "react";

const CustomerHomeFilter: React.FC = () => {
  return (
    <div>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <div>
          <TextInput
            radius="xl"
            placeholder="Tìm kiếm..."
            leftSection={<IconSearch />}
            style={{ paddingBottom: "0.5em" }}
          />
          <Grid style={{ paddingTop: "1em" }}>
            <Grid.Col span={5}>
              <b>Loại hình:</b>
            </Grid.Col>
            <Grid.Col span={7}>
              <div style={{ display: "flex", paddingBottom: "0.5em" }}>
                <Checkbox style={{ paddingRight: "0.5em" }} />
                <div>Nhà ở xã hội</div>
              </div>
              <div style={{ display: "flex", paddingBottom: "0.5em" }}>
                <Checkbox style={{ paddingRight: "0.5em" }} />
                <div>Chung cư cao cấp</div>
              </div>
              <div style={{ display: "flex", paddingBottom: "0.5em" }}>
                <Checkbox style={{ paddingRight: "0.5em" }} />
                <div>Khu dân cư</div>
              </div>
              <div style={{ display: "flex", paddingBottom: "0.5em" }}>
                <Checkbox style={{ paddingRight: "0.5em" }} />
                <div>Căn hộ dịch vụ</div>
              </div>
            </Grid.Col>
          </Grid>
          <Grid style={{ paddingTop: "1em" }}>
            <Grid.Col span={5}>
              <b>Sắp xếp theo:</b>
            </Grid.Col>
            <Grid.Col span={7}>
              {/* <div style={{ display: "flex", paddingBottom: "0.5em" }}>
                <div>Giá</div>
                <IconArrowUp />
              </div> */}
              <div style={{ display: "flex", paddingBottom: "0.5em" }}>
                <div>Ngày đăng</div>
                <IconArrowUp />
              </div>
            </Grid.Col>
          </Grid>
          <Grid style={{ paddingTop: "1em" }}>
            <Grid.Col span={5}>
              <b>Trạng thái:</b>
            </Grid.Col>
            <Grid.Col span={7}>
              <div style={{ display: "flex", paddingBottom: "0.5em" }}>
                <Checkbox style={{ paddingRight: "0.5em" }} />
                <div>Sắp triển khai</div>
              </div>
              <div style={{ display: "flex", paddingBottom: "0.5em" }}>
                <Checkbox style={{ paddingRight: "0.5em" }} />
                <div>Đang triển khai</div>
              </div>
              <div style={{ display: "flex", paddingBottom: "0.5em" }}>
                <Checkbox style={{ paddingRight: "0.5em" }} />
                <div>Đã triển khai</div>
              </div>
            </Grid.Col>
          </Grid>
          <Button color="green" fullWidth mt="md" radius="md">
            Lọc ngay
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CustomerHomeFilter;
