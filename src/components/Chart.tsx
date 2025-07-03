import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface Props {
  title: string;
  data: number[];
}

const Chart = ({ title, data }: Props) => {
  const options = {
    title: { text: title },
    xAxis: {
      categories: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    },
    yAxis: {
      title: { text: null },
    },
    series: [
      {
        name: title,
        data: data,
        type: "line",
        color: "green",
        marker: {
          fillColor: "green",
        },
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
