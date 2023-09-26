import React from "react";
import { ADIDAS_SHORTS_TABLE } from "./tablesConfig/adidas-shorts-table.config.ts";
import { KIDS_TRACKSUIT_SIZE_CHART } from "./tablesConfig/kids-tracksuit-size-chart.config.ts";
import { JACKECT_SIZE_CHART } from "./tablesConfig/jackect-size-chart.config.ts";
import { LONG_SLEEVE_TRAINING_SUIT_SIZE_CHART } from "./tablesConfig/long-sleeve-training-suit-size-chart.config.ts";
import { WINDBREAKER_SIZE } from "./tablesConfig/windbreaker-size.config.ts";
import { POLOS_SIZE } from "./tablesConfig/polos-size.config.ts";
import { PANTS_SIZE } from "./tablesConfig/pants-size.config.ts";
import { TRAINING_JERSEY_SIZE } from "./tablesConfig/training-jersey-size.config.ts";
import { SHORTS_SIZE } from "./tablesConfig/shorts-size.config.ts";
import { NBA_SILK_SIZE } from "./tablesConfig/nba-silk-size.config.ts";
import { WOMEN_SIZE } from "./tablesConfig/women-size.config.ts";
import { PLAYER_VERSION_MEN_SIZE } from "./tablesConfig/player-version-men-size.config copy.ts";
import { KIDS_SIZE } from "./tablesConfig/kids-size.config.ts";
import { FAN_VERSION_MEN_SIZE } from "./tablesConfig/fan-version-men-size.config.ts";
import TableGroup from "../../components/ui/tables/TableGroup.tsx";

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
