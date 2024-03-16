import { Grid } from "@mantine/core";
import React, { useEffect, useState } from "react";
import PaymentRecordCard from "./component/paymentRecordCard.component";
import { IPaymentRecord } from "../../../models/paymentRecord.model";
import usePaymentRecord from "../../../hooks/use-payment-record";
import { useParams } from "react-router-dom";

const PaymentRecordPage: React.FC = () => {
  const [reocrds, setRecords] = useState<IPaymentRecord[]>([]);
  const { contractId } = useParams();
  const {getPaymentRecordsByContractId} = usePaymentRecord()
  const fetchPaymentRecord = async () => {
    try{
        if(contractId){
            const res = await getPaymentRecordsByContractId(parseInt(contractId))
            setRecords(res)
        }else{
            setRecords([])
        }
    }catch(err){
        setRecords([])
        console.log(err)
    }
  }
  useEffect(() => {
    fetchPaymentRecord()
  }, [])
  return (
    <div>
      <Grid>
        {reocrds.map((record, index) => (
          <Grid.Col span={4} key={index}>
            <PaymentRecordCard record={record} index={index+1} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentRecordPage;
