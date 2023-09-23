import React from "react";
import TableGenerator from "../../components/ui/tables/TableGenerator.tsx";
import { ADIDAS_SHORTS_TABLE } from "./tablesConfig/adidas-shorts-table.config.ts";
import { KIDS_TRACKSUIT_SIZE_CHART } from "./tablesConfig/kids-tracksuit-size-chart.config.ts";

const TallasComponent: React.FC = () => {
  return (
    <div>
      <TableGenerator tabla={ADIDAS_SHORTS_TABLE} />
      <TableGenerator tabla={KIDS_TRACKSUIT_SIZE_CHART}/>
    </div>
  );
};

export default TallasComponent;
