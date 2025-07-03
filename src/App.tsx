import { useState } from "react";
import { stats, StatRow } from "./data/stats";
import Table from "./components/Table";

function App() {
  const [selected, setSelected] = useState<StatRow | null>(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Отчет</h2>
      <Table data={stats} onSelect={setSelected} selected={selected?.title || ""} />
    </div>
  );
}

export default App;
