import { Badge, Button, Card, Grid, Group, Select, Text } from "@mantine/core";
import React, { useCallback, useEffect, useState } from "react";
import { IBooking } from "../../../models/booking.model";
import { useBooking } from "../../../hooks/use-booking";
import { AxiosError } from "axios";
import { numberToMoney } from "../../../utils/utils";

const ManageBookingPage: React.FC = () => {
  const [paidStatus, setPaidStatus] = useState<boolean>(true);
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const { getBookingOfACustomerByStatus } = useBooking();
  useEffect(() => {
    getBookingOfACustomerByStatus(paidStatus)
      .then((res) => {
        setBookings(res);
      })
      .catch((e: AxiosError) => {
        console.log(e);
      });
  }, [paidStatus]);

  const isBookingAvailableForContract = useCallback((booking: IBooking) => {
    const today = Date.now();
    if (
      booking.saleBatch &&
      Date.parse(booking.saleBatch.premiumStartDate) < today &&
      today <= Date.parse(booking.saleBatch.endDate) &&
      booking.isPaid
    ) {
      return true;
    }
    return false;
  }, []);
  return (
    <>
      <Select
        placeholder="Chọn trang thái thanh toán ..."
        label="Trạng thái thanh toán"
        mb={"1em"}
        w={"30%"}
        data={[
          {
            label: "Chờ xác nhận",
            value: "PENDING",
          },
          {
            label: "Đã thanh toán",
            value: "CONFIRMED",
          },
        ]}
        onChange={(value) => {
          if (value === "PENDING") {
            setPaidStatus(false);
          }
          if (value === "CONFIRMED") {
            setPaidStatus(true);
          }
        }}
        defaultValue={"CONFIRMED"}
      />
      <Grid>
        {bookings.map((booking) => (
          <Grid.Col span={4}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{booking.saleBatch?.saleBatchName}</Text>
                <Group>
                  {booking.isPaid ? (
                    <Badge color="green">Đã thanh toán</Badge>
                  ) : (
                    <Badge color="yellow">Chờ xác nhận</Badge>
                  )}
                  {
                    isBookingAvailableForContract(booking) ? (
                        <Badge color="green">Đã mở bán</Badge>
                    ) : (
                        <Badge color="yellow">Chưa mở bán</Badge>
                    )
                  }
                </Group>
              </Group>

              <Group justify="space-between">
                <Text c="dimmed">Ngày bắt đầu:</Text>
                <Text>{booking.saleBatch?.startDate}</Text>
              </Group>

              <Group justify="space-between">
                <Text c="dimmed">Ngày kết thúc:</Text>
                <Text>{booking.saleBatch?.endDate}</Text>
              </Group>

              <Group justify="space-between">
                <Text c="dimmed">Chi phí</Text>
                <Text>{numberToMoney(booking.saleBatch?.bookingFee as number)} VND</Text>
              </Group>

              <Group justify="space-around">
                <Button color="orange" w={"40%"} mt="md" radius="md">
                  Xem chi tiết
                </Button>
                {isBookingAvailableForContract(booking) && (
                  <Button color="green" w={"40%"} mt="md" radius="md">
                    Đặt cọc ngay
                  </Button>
                )}
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default ManageBookingPage;
