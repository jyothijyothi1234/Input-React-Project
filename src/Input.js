import React, { useEffect, useState } from "react";

export default function Inputerst() {
  const [value, setValue] = useState("");
  const [isEven,setIsEven] = useState(null)

  useEffect(() => {
    if (value % 2 === 0) {
      setIsEven(true)
    } else {
        setIsEven(false)
    }
  }, [value]);

  return (
    <div>
      <input
        type="text"
        placeholder="enter your number"
        onChange={(et) => setValue(et.target.value)}
      />
      <div style={{ width: "100%", height: "100px" }}>
        <h1
          style={{
            width: "200px",
            height: "200px",
            background: isEven ? "green" : "red",
            color: "white",
          }}
        >
          {isEven ? "EVEN" : "ODD"}
        </h1>
      </div>
    </div>
  );
}
