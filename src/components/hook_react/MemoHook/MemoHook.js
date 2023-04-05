import { memo } from "react";
function MemoHook({ onIncrease }) {
  console.log("e đã có mặt");
  return (
    <>
      <div>
        <h1>em là con</h1>
        <button onClick={onIncrease}>Increase</button>
      </div>
      <div>
        <input type="image" alt="image"></input>
        <input />
      </div>
    </>
  );
}

export default memo(MemoHook);
