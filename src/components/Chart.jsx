import { LineChart } from "@mui/x-charts/LineChart";
import axios from "axios";
import { server } from "../main";
import { useEffect, useState } from "react";

const Chart = () => {
  const [thisWeek, setThisWeek] = useState([]);
  const [xLabels, setXLabels] = useState([
    "sun",
    "mon",
    "tue",
    "wed",
    "thur",
    "fri",
    "sat",
  ]);
  // const [lastWeek, setLastWeek] = useState([]);
  // let pData = [0, 0, 0, 0, 0, 0, 0];

  const getData = async () => {
    const { data } = await axios.get(`${server}/gettransactionforchart`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    let cData = [0, 0, 0, 0, 0, 0, 0];
    const dayss = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
    let temp = [];
    for (let i = 6; i >= 0; i--) {
      let dt = new Date(new Date().setDate(new Date().getDate() - i));
      let dy = new Date(dt).getDay();
      // console.log("date", dt, dy, dayss[dy]);
      temp.push(dayss[dy]);
    }
    // console.log(temp);
    // setThisWeek(data.message);
    // console.log(data);
    // let currTemp = [];
    // let lastTemp = [];
    // data.message.forEach((transaction) => {
    //   const diffTime = Math.abs(Date.now() - new Date(transaction.createdAt));
    //   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    //   if (diffDays > 7) {
    //   }
    // });
    // console.log(data);
    // console.log(cData);
    data.message.forEach((transaction) => {
      let date = new Date(transaction.createdAt);
      let day = new Date(date).getDay();
      cData[temp.indexOf(dayss[day])] =
        cData[temp.indexOf(dayss[day])] + transaction.price;
      // console.log(transaction.createdAt, transaction.price, day);
      // console.log(cData);
      // console.log(day, temp.indexOf(dayss[day]));
    });
    setThisWeek(cData);
    setXLabels(temp);
    // console.log(cData);
  };
  useEffect(() => {
    getData();
  }, [setThisWeek]);

  return (
    <LineChart
      className="chart-svg"
      width={320}
      height={300}
      series={[
        // { data: pData, label: "last week" },
        { data: thisWeek, label: "last 7 Days" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      colors={["#0666EB", "#D9D9D9"]}
      slotProps={{
        legend: {
          labelStyle: {
            fontSize: 15,
          },
        },
      }}
    />
  );
};

export default Chart;
