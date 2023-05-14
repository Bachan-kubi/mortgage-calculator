import React from "react";
import SliderComponents from "../common/SliderComponents";

const SliderSelect = ({ data, setData }) => {
  const max_limit = 10000;
  console.log(data);
  return (
    <div>
      <SliderComponents
        amount={data.homeValue}
        label="Home Value"
        unit="$"
        min={1000}
        max={max_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        marks
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            homeValue: value,
            downPayment: value * 0.2,
            loanAmount: value * 0.8
          })
        }
      />
      <SliderComponents
        amount={data.downPayment}
        label="Down Payment"
        unit="$"
        min={1000}
        max={10000}
        defaultValue={data.downPayment}
        value={data.downPayment}
        marks
        step={2000}
        onChange={(e, value) => setData({
            downPayment: value
        })}
      />
      <SliderComponents
        amount={data.loanAmount}
        label="Loan Amount"
        unit="$"
        min={1000}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        marks
        step={100}
        onChange={(e, value) => setData({
            loanAmount: value
        })}
      />
      <SliderComponents
        amount={4000}
        label="Interest Rate"
        unit="%"
        min={2}
        max={18}
        defaultValue={5}
        marks
        step={0.5}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default SliderSelect;
