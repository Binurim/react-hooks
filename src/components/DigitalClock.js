import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  });

  return (
    <div>
      <h1>Digital Clock</h1>
      <h2>{time}</h2>
    </div>
  );
}
