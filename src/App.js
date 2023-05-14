import { Grid } from "@mui/material";
import Navbar from "./components/parts/Navbar";
import Results from "./components/parts/Results";
import Tenure from "./components/parts/Tenure";
import SliderSelect from "./components/parts/SliderSelect";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid container spacing={5}>
        <Grid item>
          <SliderSelect />
          <Tenure />
        </Grid>
        <Grid item>
          <Results />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
