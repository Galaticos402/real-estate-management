import React, { useEffect, useState } from "react";
import { IProperty } from "../../../models/property.model";
import { useProperty } from "../../../hooks/use-property";
import { useParams } from "react-router-dom";
import { Grid } from "@mantine/core";
import InvestorPropertyCard from "./component/investor-property-card.component";

const InvestorPropertyPage: React.FC = () => {
  const [properties, setProperties] = useState<IProperty[]>([]);
  const { divisionId } = useParams();
  const { getPropertiesByDivisionId } = useProperty();
  const fetchInvestorPropertiess = async () => {
    try {
      if (divisionId) {
        const res = await getPropertiesByDivisionId(divisionId);
        setProperties(res);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchInvestorPropertiess();
  }, []);
  return (
    <div>
      <Grid>
        {properties.map((property) => (
          <Grid.Col span={4}>
            <InvestorPropertyCard property={property} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default InvestorPropertyPage;
