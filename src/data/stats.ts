export interface StatRow {
    title: string;
    current: number;
    previous: number;
    delta: number;
    week: number;
    chart: number[];
  }
  
  export const stats: StatRow[] = [
    {
      title: "Выручка, руб",
      current: 500_521,
      previous: 480_521,
      delta: 4,
      week: 4_805_121,
      chart: [0, 200000, 350000, 450000, 500000, 400000, 480000],
    },
    {
      title: "Наличные",
      current: 300_000,
      previous: 300_000,
      delta: 0,
      week: 300_000,
      chart: [0, 150000, 180000, 250000, 300000, 280000, 300000],
    },
    {
      title: "Безналичный расчет",
      current: 100_000,
      previous: 100_000,
      delta: 0,
      week: 100_000,
      chart: [0, 90000, 95000, 100000, 100000, 100000, 100000],
    },
    {
      title: "Кредитные карты",
      current: 100_521,
      previous: 100_521,
      delta: 0,
      week: 100_521,
      chart: [0, 80000, 90000, 100000, 100521, 99000, 100000],
    },
    {
      title: "Средний чек, руб",
      current: 1300,
      previous: 900,
      delta: 44,
      week: 900,
      chart: [600, 800, 1000, 1100, 900, 1200, 1300],
    },
    {
      title: "Средний гость, руб",
      current: 1200,
      previous: 800,
      delta: 50,
      week: 800,
      chart: [500, 700, 800, 900, 1000, 1100, 1200],
    },
    {
      title: "Удаления из чека (после оплаты), руб",
      current: 1000,
      previous: 1100,
      delta: -9,
      week: 900,
      chart: [500, 800, 900, 1000, 1100, 1000, 1000],
    },
    {
      title: "Удаления из чека (до оплаты), руб",
      current: 1300,
      previous: 1300,
      delta: 0,
      week: 900,
      chart: [700, 800, 900, 1200, 1300, 1100, 1300],
    },
    {
      title: "Количество чеков",
      current: 34,
      previous: 36,
      delta: -6,
      week: 34,
      chart: [20, 25, 30, 32, 36, 34, 34],
    },
    {
      title: "Количество гостей",
      current: 34,
      previous: 36,
      delta: -6,
      week: 32,
      chart: [22, 26, 30, 32, 36, 34, 34],
    },
  ];
  