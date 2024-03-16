import { Carousel } from "@mantine/carousel";
import { Button, Container, Grid, Image, Text } from "@mantine/core";
import vinhomeImg from "../../../assets/vinhome.jpg";
import vinhomeImg2 from "../../../assets/vinhome-2.jpg";
import vinhomeImg3 from "../../../assets/vinhome-3.jpg";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useDivision } from "../../../hooks/use-division";
import { IDivision } from "../../../models/division.model";
import { AxiosError } from "axios";
import { ISaleBatch } from "../../../models/saleBatch.model";
import { useSaleBatch } from "../../../hooks/use-saleBatch";
import {
  SaleBatchOpeningStatus,
  isSaleBatchOpening,
} from "../../../utils/utils";
import { useDisclosure } from "@mantine/hooks";
import BookingPage from "../booking/booking";
import ContractCreationModal from "../../../components/contract/contract-modal.component";
import { ISaleBatchDetail } from "../../../models/saleBatchDetail.model";
import { useSaleBatchDetail } from "../../../hooks/use-saleBatch-detail";

const DivisionPage: React.FC = () => {
  const { divisionId } = useParams();
  const [division, setDivision] = useState<IDivision>();
  const [availableSaleBatches, setAvailableSaleBatches] = useState<
    ISaleBatch[]
  >([]);
  // const [properties, setProperties] = useState<IProperty[]>([]);
  const [saleBatchDetails, setSaleBatchDetails] = useState<ISaleBatchDetail[]>(
    []
  );
  const [selectedSaleBatchId, setSelectedSaleBatchId] = useState<number>(-1);
  const [selectedSaleBatchDetail, setSelectedSaleBatchDetail] = useState<ISaleBatchDetail>();
  const { getById } = useDivision();
  const { getSaleBatchDetailBySaleBatchId } = useSaleBatchDetail();
  const { getAvailableSaleBatchesOfADivision } = useSaleBatch();
  const [opened, { open, close }] = useDisclosure(false);

  const [isContractOpen, contractToggler] = useDisclosure(false);

  const saleBatchStatus = useMemo(() => {
    const saleBatch = availableSaleBatches.filter(
      (sb) => sb.saleBatchId === selectedSaleBatchId
    )[0];
    if (saleBatch) {
      return isSaleBatchOpening(saleBatch.startDate, saleBatch.endDate);
    }
  }, [selectedSaleBatchId, availableSaleBatches]);

  const openingSaleBatches = useMemo(() => {
    const today = Date.now();
    return availableSaleBatches.filter(
      (sb) =>
        Date.parse(sb.startDate) <= today && today <= Date.parse(sb.endDate)
    );
  }, [availableSaleBatches]);

  const upcomingSaleBatches = useMemo(() => {
    const today = Date.now();
    return availableSaleBatches.filter(
      (sb) => Date.parse(sb.startDate) > today
    );
  }, [availableSaleBatches]);

  const saleBatchInfo = useMemo(() => {
    const saleBatch = availableSaleBatches.filter(
      (sb) => sb.saleBatchId === selectedSaleBatchId
    )[0];
    return saleBatch;
  }, [selectedSaleBatchId]);

  const fetchSaleBatchDetails = async () => {
    if (selectedSaleBatchId == -1) setSaleBatchDetails([]);
    else {
      try {
        const res = await getSaleBatchDetailBySaleBatchId(selectedSaleBatchId);
        setSaleBatchDetails(res);
      } catch (err) {
        console.warn(err);
      }
    }
  };

  useEffect(() => {
    fetchSaleBatchDetails();
  }, [selectedSaleBatchId]);

  useEffect(() => {
    if (divisionId) {
      getById(divisionId)
        .then((res) => {
          setDivision(res);
          console.log(res);
        })
        .catch((err: AxiosError) => {
          console.warn(err);
        });
      getAvailableSaleBatchesOfADivision(divisionId)
        .then((res) => {
          setAvailableSaleBatches(res);
          console.log(res);
        })
        .catch((err: AxiosError) => {
          console.warn(err);
        });
    }
  }, [divisionId]);
  const handleBooking = () => {
    console.log(selectedSaleBatchDetail);
    open();
  };
  const handleBuy = () => {
    console.log(selectedSaleBatchDetail);
    contractToggler.open();
  };
  return (
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
        <Text ta={"center"} pt={"1em"} pb={"1em"} fw={700} size="xl">
          {division?.divisionName}
        </Text>
        <Text>{division?.description}</Text>
      </Grid.Col>
      <Grid.Col span={7}>
        <Text ta={"center"} fw={700} size="xl" pt={"0.5em"} pb={"0.5em"}>
          Các đợt đang mở bán
        </Text>
        <Grid>
          {openingSaleBatches.map((saleBatch) => (
            <Grid.Col span={3}>
              <Button
                variant="light"
                color={
                  saleBatch.saleBatchId === selectedSaleBatchId
                    ? "yellow"
                    : isSaleBatchOpening(
                        saleBatch.startDate,
                        saleBatch.endDate
                      ) == SaleBatchOpeningStatus.OPENING
                    ? "blue"
                    : "gray"
                }
                size="sm"
                radius={"xl"}
                w={"100%"}
                onClick={() => setSelectedSaleBatchId(saleBatch.saleBatchId)}
              >
                {saleBatch.saleBatchName}
              </Button>
            </Grid.Col>
          ))}
        </Grid>
        <Text ta={"center"} fw={700} size="xl" pt={"0.5em"} pb={"0.5em"}>
          Các đợt sắp mở bán
        </Text>
        <Grid>
          {upcomingSaleBatches.map((saleBatch) => (
            <Grid.Col span={3}>
              <Button
                variant="light"
                color={
                  saleBatch.saleBatchId === selectedSaleBatchId
                    ? "yellow"
                    : isSaleBatchOpening(
                        saleBatch.startDate,
                        saleBatch.endDate
                      ) == SaleBatchOpeningStatus.OPENING
                    ? "blue"
                    : "gray"
                }
                size="sm"
                radius={"xl"}
                w={"100%"}
                onClick={() => setSelectedSaleBatchId(saleBatch.saleBatchId)}
              >
                {saleBatch.saleBatchName}
              </Button>
            </Grid.Col>
          ))}
        </Grid>
        {saleBatchDetails.length !== 0 && (
          <Container mt={"1em"}>
            <Text fw={700} ta={"center"} pt={"0.5em"} pb={"1em"} size="xl">
              Thông tin căn hộ:{" "}
            </Text>
            <Grid pb={"1em"}>
              {saleBatchDetails.map((saleBatchDetail) => (
                <Grid.Col span={4}>
                  <Button
                    variant="light"
                    color={
                      saleBatchDetail.saleBatchDetailId === selectedSaleBatchDetail?.saleBatchDetailId
                        ? "green"
                        : "gray"
                    }
                    size="sm"
                    radius={"xl"}
                    maw={"100%"}
                    w={"100%"}
                    onClick={() => setSelectedSaleBatchDetail(saleBatchDetail)}
                  >
                    {saleBatchDetail.property.brief}
                  </Button>
                </Grid.Col>
              ))}
            </Grid>
            {selectedSaleBatchDetail !== undefined && (
              <>
                <Carousel withIndicators height={400}>
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
                {saleBatchStatus === SaleBatchOpeningStatus.UPCOMING && (
                  <Button
                    mt={"1em"}
                    color="green"
                    w={"100%"}
                    onClick={handleBooking}
                  >
                    Đặt chỗ ngay !
                  </Button>
                )}
                {saleBatchStatus === SaleBatchOpeningStatus.OPENING && (
                  <Button
                    mt={"1em"}
                    color="green"
                    w={"100%"}
                    onClick={handleBuy}
                  >
                    Mua ngay !
                  </Button>
                )}
              </>
            )}
          </Container>
        )}
      </Grid.Col>
      {opened && (
        <BookingPage
          saleBatch={saleBatchInfo}
          isOpen={opened}
          close={close}
          open={open}
        />
      )}
      {isContractOpen && (
        <ContractCreationModal
          saleBatchDetail={selectedSaleBatchDetail}
          isOpen={isContractOpen}
          close={contractToggler.close}
          open={contractToggler.open}
        />
      )}
    </Grid>
  );
};

export default DivisionPage;
