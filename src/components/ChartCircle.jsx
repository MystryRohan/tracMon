import { PieChart } from "@mui/x-charts/PieChart";
import "../styles/stats.css";
import { useContext } from "react";
import { Context } from "../main";

const ChartCircle = () => {
  const { user } = useContext(Context);
  return (
    <PieChart
      className="pie-chart"
      width={320}
      height={320}
      margin={{ top: 60, bottom: 60, left: 60, right: 60 }}
      colors={["#7C00FE", "#F9E400", "#FFAF00", "#F5004F", "#9BEC00"]}
      series={[
        {
          data: [
            { id: 0, value: user.food, label: "Food" },
            { id: 1, value: user.rent, label: "Rent" },
            { id: 2, value: user.travel, label: "Travel" },
            { id: 3, value: user.entertainment, label: "Entertainment" },
            { id: 4, value: user.investment, label: "Investment" },
          ],
        },
      ]}
      slotProps={{
        legend: {
          direction: "row",
          position: { vertical: "bottom", horizontal: "middle" },
          padding: 0,
          itemMarkWidth: 15,
          itemMarkHeight: 15,
          markGap: 5,
          itemGap: 10,
          labelStyle: {
            fontSize: 14,
          },
        },
      }}
    />
  );
};
export default ChartCircle;
