import React from "react";
import TableGroup from "../../components/ui/tables/TableGroup";
import { ADIDAS_SHORTS_TABLE } from "./tablesConfig/adidas-shorts-table/adidas-shorts-table.config";
import { KIDS_TRACKSUIT_SIZE_CHART } from "./tablesConfig/kids-tracksuit-size-chart/kids-tracksuit-size-chart.config";
import { JACKECT_SIZE_CHART } from "./tablesConfig/jackect-size-chart/jackect-size-chart.config";
import { LONG_SLEEVE_TRAINING_SUIT_SIZE_CHART } from "./tablesConfig/long-sleeve-training-suit-size-chart/long-sleeve-training-suit-size-chart.config";
import { WINDBREAKER_SIZE } from "./tablesConfig/windbreaker-size/windbreaker-size.config";
import { POLOS_SIZE } from "./tablesConfig/polos-size/polos-size.config";
import { PANTS_SIZE } from "./tablesConfig/pants-size/pants-size.config";
import { TRAINING_JERSEY_SIZE } from "./tablesConfig/training-jersey-size/training-jersey-size.config";
import { KIDS_SIZE } from "./tablesConfig/kids-size/kids-size.config";
import { PLAYER_VERSION_MEN_SIZE } from "./tablesConfig/player-version-men-size/player-version-men-size.config";
import { WOMEN_SIZE } from "./tablesConfig/women-size/women-size.config";
import { NBA_SILK_SIZE } from "./tablesConfig/nba-silk-size/nba-silk-size.config";
import { SHORTS_SIZE } from "./tablesConfig/shorts-size/shorts-size.config";
import { FAN_VERSION_MEN_SIZE } from "./tablesConfig/fan-version-men-size/fan-version-men-size.config";

const tablas = [
  ADIDAS_SHORTS_TABLE,
  KIDS_TRACKSUIT_SIZE_CHART,
  JACKECT_SIZE_CHART,
  LONG_SLEEVE_TRAINING_SUIT_SIZE_CHART,
  WINDBREAKER_SIZE,
  POLOS_SIZE,
  PANTS_SIZE,
  TRAINING_JERSEY_SIZE,
  SHORTS_SIZE,
  NBA_SILK_SIZE,
  WOMEN_SIZE,
  PLAYER_VERSION_MEN_SIZE,
  KIDS_SIZE,
  FAN_VERSION_MEN_SIZE,
];

const TallasComponent: React.FC = () => {
  return (
    <div>
      <TableGroup arrayTablas={tablas} />
    </div>
  );
};

export default TallasComponent;
