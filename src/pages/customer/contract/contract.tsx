import React, { useEffect, useState } from "react";
// import { IContract } from "../../../models/contract.model";
import { Grid } from "@mantine/core";
import ContractCard from "./component/contract-card.component";
import { IContract } from "../../../models/contract.model";
import { useContract } from "../../../hooks/use-contract";

const ContractPage: React.FC = () => {
  const [contracts, setContracts] = useState<IContract[]>([]);
  const { getContractsOfACustomer } = useContract();
  const fetchContracts = async () => {
    try {
      const res = await getContractsOfACustomer();
      setContracts(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchContracts();
  }, []);
  return (
    <div>
      <Grid>
        {contracts.map((contract, index) => (
          <Grid.Col span={4} key={index}>
            <ContractCard contract={contract}/>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default ContractPage;
