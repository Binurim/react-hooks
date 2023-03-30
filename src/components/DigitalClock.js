import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  });

  return (
    <div className="card">
      <div className="card-header">
        <h4>Digital Clock</h4>
      </div>
      <h5>{time}</h5>
      <br />
    </div>
  );
}
