import { useCallback, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import DisplayCounter from "./DisplayCounter";
import DisplayFlag from "./DisplayFlag";
import Button from "./Button";
export default function MemoContainer() {
  const [count, setCounter] = useState(0);
  const [flag, setFlag] = useState(true);

  /**
   * Same component getting rendered for other states as well
   * To avoid that use useCallback
   */
  const changeCounter = useCallback(() => {
    setCounter(count + 1);
  }, [count]);

  const changeFlag = useCallback(() => {
    setFlag(!flag);
  }, [flag]);

  return (
    <div>
      <Header />
      <div className="card" style={{ margin: "auto" }}>
        <DisplayCounter counter={count} />
        <Button caption={"Change count"} click={changeCounter} />
        <DisplayFlag flag={flag} />
        <Button caption={"Change flag"} click={changeFlag} />
      </div>
      <Footer />
    </div>
  );
}
