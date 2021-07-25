import { useEffect, useState } from "react";
import { fetchHistory } from "./api";
import DateInput from "./components/Dateinput";
import MissionCard from "./components/MissionCard";
import "./styles.css";

export default function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState([]);

  const gethistory = async () => {
    console.log("Getting history");
    const history = await fetchHistory({
      start: startDate,
      end: endDate
    });
    setData(history);
  };

  useEffect(() => {
    gethistory();
  }, [startDate, endDate]);

  return (
    <div>
      <h1 className="title">Historia de SpacaX 🚀</h1>
      <div className="filters">
        <DateInput
          label="Start Date"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <br />
        <DateInput
          label="End Date"
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className="mission-list">
        {data.map((item, idx) => {
          return <MissionCard key={idx} mission={item} />;
        })}
      </div>
    </div>
  );
}
