import clsx from "clsx";
import MemoHook from "./MemoHook/MemoHook";
import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react";
import styles from "./LearnHook.module.css";
function LearnHook() {
  const [count, setCount] = useState(60);
  const timerID = useRef();
  const h1Ref = useRef();

  const handleStart = () => {
    timerID.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    console.log("Start timerID", timerID.current);
  };
  const handleEnd = () => {
    clearInterval(timerID.current);
    console.log("End timerID", timerID.current);
  };
  // const handleIncrease = () => {
  //   setCount(count + 1);
  // };
  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  // const prevCount = useRef();
  // useEffect(() => {
  //   prevCount.current = count;
  // }, [count]);
  // console.log(
  //   "current count = ",
  //   count,
  //   " || prev count = ",
  //   prevCount.current
  // );
  useEffect(() => {
    const toado = h1Ref.current.getBoundingClientRect();
    console.log("h1 ref = ", toado);
  }, []);
  return (
    <div className={clsx(styles.wrap_layout)}>
      <h1 ref={h1Ref}>hook in react js</h1>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleEnd}>End</button>
      <div>
        <MemoHook onIncrease={handleIncrease} />
      </div>
    </div>
  );
}

export default LearnHook;
