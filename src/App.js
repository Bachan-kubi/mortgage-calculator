import { Container, Grid } from "@mui/material";
import Navbar from "./components/parts/Navbar";
import Results from "./components/parts/Results";
import Tenure from "./components/parts/Tenure";
import SliderSelect from "./components/parts/SliderSelect";

function App() {
  return (
    <div className="App">
      <Container maxWidth='lg'>
        <Navbar />
        <Grid container spacing={5}>
          <Grid item md={6}>
            <SliderSelect />
            <Tenure />
          </Grid>
          <Grid item md={6}>
            <Results />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
