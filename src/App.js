import { Container, Grid } from "@mui/material";
import Navbar from "./components/parts/Navbar";
import Results from "./components/parts/Results";
import Tenure from "./components/parts/Tenure";
import SliderSelect from "./components/parts/SliderSelect";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5
  });
  
  return (
    <div>
      <Container maxWidth='lg'>
        <Navbar />
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <SliderSelect data={data} setData={setData} />
            <Tenure />
          </Grid>
          <Grid item md={6} xs={12}>
            <Results />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
