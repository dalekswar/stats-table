import React from "react";
import { StatRow } from "../data/stats";
import "./Table.css";
import Chart from "./Chart";

interface Props {
  data: StatRow[];
  onSelect: (row: StatRow | null) => void;
  selected: string;
}

const Table = ({ data, onSelect, selected }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Показатель</th>
          <th>Текущий день</th>
          <th>Вчера</th>
          <th>Этот день недели</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          const weekClass =
            row.week > row.previous
              ? "delta-green"
              : row.week < row.previous
              ? "delta-red"
              : "delta-gray";

          return (
            <React.Fragment key={row.title}>
              <tr
                onClick={() => {
                  if (selected === row.title) {
                    onSelect(null); 
                  } else {
                    onSelect(row);
                  }
                }}
                className={selected === row.title ? "selected" : ""}
              >
                <td data-label="Показатель">{row.title}</td>

                <td data-label="Текущий день">
                  {row.current.toLocaleString()}
                </td>

                <td
                  data-label="Вчера"
                  className={
                    "current-day-cell " +
                    (row.delta > 0
                      ? "delta-green"
                      : row.delta < 0
                      ? "delta-red"
                      : "delta-gray")
                  }
                >
                  <span className="value">
                    {row.previous.toLocaleString()}
                  </span>{" "}
                  <span className="percent">
                    {row.delta > 0 ? "+" : ""}
                    {row.delta}%
                  </span>
                </td>

                <td
                  data-label="Этот день недели"
                  className={weekClass}
                >
                  {row.week.toLocaleString()}
                </td>
              </tr>

              {selected === row.title && (
                <tr>
                  <td colSpan={4}>
                    <Chart title={row.title} data={row.chart} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
