import {
  Button,
  Flex,
  Group,
  Image,
  Modal,
  rem,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { IconPhoto, IconUpload, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { ISaleBatch } from "../../../models/saleBatch.model";
import { useBooking } from "../../../hooks/use-booking";
import { notifications } from "@mantine/notifications";
import { AxiosError } from "axios";
import { IHttpError } from "../../../models/error.model";
import { numberToMoney } from "../../../utils/utils";
interface IProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  saleBatch: ISaleBatch;
}
const BookingPage: React.FC<IProps> = ({ isOpen, close, saleBatch }) => {
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const { createBooking } = useBooking();
  const handleSubmit = () => {
    createBooking({
      saleBatchId: saleBatch.saleBatchId,
      isPaid: false,
    })
      .then(() => {
        notifications.show({
          title: "Thông báo",
          message: "Đặt chỗ thành công !",
        });
      })
      .catch((e: AxiosError) => {
        console.log(e);
        const error = e.response?.data as IHttpError
        notifications.show({
          title: "Thông báo",
          message:error.message,
          color: "red",
        });
      });
  };

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        // w={'100%'}
        // h={'100%'}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      />
    );
  });

  return (
    <Modal
      opened={isOpen}
      onClose={close}
      title={<h3>Thông tin đặt cọc</h3>}
      centered
    >
      <Flex>
        <Text fw={700}>Số tài khoản : </Text>
        <Text pl={"5%"}>{saleBatch.bankAccount}</Text>
      </Flex>
      <Flex>
        <Text fw={700}>Ngân hàng : </Text>
        <Text pl={"5%"}>{saleBatch.bankName}</Text>
      </Flex>
      <Flex>
        <Text fw={700}>Người thụ hưởng : </Text>
        <Text pl={"5%"}>{saleBatch.receiverName}</Text>
      </Flex>
      <Flex>
        <Text fw={700}>Phí giữ chỗ : </Text>
        <Text pl={"5%"}>{numberToMoney(saleBatch.bookingFee)}</Text>
      </Flex>
      {files.length !== 0 && (
        <SimpleGrid
          cols={{ base: 12, sm: 4 }}
          mt={previews.length > 0 ? "xl" : 0}
        >
          {previews}
        </SimpleGrid>
      )}
      {files.length == 0 && (
        <Dropzone
          onDrop={(files) => setFiles(files)}
          onReject={(files) => console.log("rejected files", files)}
          maxSize={5 * 1024 ** 2}
          maxFiles={1}
          accept={IMAGE_MIME_TYPE}
          mt={"5%"}
        >
          <Group
            justify="center"
            gap="xl"
            mih={220}
            style={{ pointerEvents: "none" }}
          >
            <Dropzone.Accept>
              <IconUpload
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-blue-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-red-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-dimmed)",
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Ảnh chụp màn hình thanh toán
              </Text>
              {/* <Text size="sm" c="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed
                5mb
              </Text> */}
            </div>
          </Group>
        </Dropzone>
      )}
      <Button mt={"5%"} w={"100%"} onClick={handleSubmit}>
        Đặt chỗ
      </Button>
    </Modal>
  );
};

export default BookingPage;
