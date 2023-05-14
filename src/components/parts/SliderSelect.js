import React from "react";
import SliderComponents from "../common/SliderComponents";

const SliderSelect = () => {
  return (
    <div>
      <SliderComponents
        amount={3500}
        label="Home Value"
        unit="$"
        min={1000}
        max={10000}
        defaultValue={3000}
        marks
        step={100}
        onChange={(e)=>console.log(e.target.value)}

      />
    </div>
  );
};

export default SliderSelect;
