import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponents = ({
  defaultValue,
  min,
  max,
  amount,
  label,
  unit,
  step,
  marks,
  value,
  onChange
}) => {
  return (
    <Stack my={4}>
      <Stack gap={1.2}>
        <Typography color="text.secondary" variant="subtitle2">
          {label}
        </Typography>
        <Typography color="text.secondary" variant="h5">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        min={min}
        max={max}
        defaultValue={defaultValue}
        aria-label="Default"
        valueLabelDisplay="auto"
        step={step}
        marks={marks}
        value={value}
        onChange = {onChange}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponents;
