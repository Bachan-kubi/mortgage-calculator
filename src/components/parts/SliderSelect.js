import React from "react";
import SliderComponents from "../common/SliderComponents";

const SliderSelect = ({ data, setData }) => {
  const max_limit = 10000;
  // console.log(data);
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
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        marks
        step={200}
        onChange={(e, value) => setData({
          ...data,
            downPayment: value,
            loanAmount: data.homeValue - value
        })}
      />
      <SliderComponents
        amount={data.loanAmount}
        label="Loan Amount"
        unit="$"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        marks
        step={100}
        onChange={(e, value) => setData({
            ...data,
            loanAmount: value,
            downPayment: data.homeValue - value
        })}
      />
      <SliderComponents
        amount={data.interestRate}
        label="Interest Rate"
        unit="%"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        marks
        step={0.5}
        onChange={(e, value) => setData({
          ...data,
          interestRate: value 

        })}
      />
    </div>
  );
};

export default SliderSelect;
